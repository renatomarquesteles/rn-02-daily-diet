import { useCallback, useMemo, useState } from 'react';
import { Image, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png';
import personImg from '@assets/person.png';
import { Button } from '@components/Button';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { formatTime } from '@utils/formatDateTime';
import { groupMealsByDate } from '@utils/groupMealsByDate';
import { sortDayMealsByTime, sortMealsListByTitle } from '@utils/sortMealsList';

import {
  AddMealContainer,
  AddMealTitle,
  Container,
  DateTitle,
  Header,
  MealContainer,
  MealName,
  MealTime,
  MealType,
  OpenIcon,
  PlusIcon,
  ProfilePicture,
  ProfilePictureContainer,
  StatisticsContainer,
  StatisticsPercentage,
  StatisticsText,
} from './styles';

type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

type MealsByDateType = {
  [date: string]: MealType[];
};

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<MealsByDateType>({});
  const [isOnDiet, setIsOnDiet] = useState(false);
  const [dietPercentage, setDietPercentage] = useState(0);
  const navigation = useNavigation();
  const listData = useMemo(() => {
    const mealsDates = Object.keys(mealsByDate);
    const mealsFormatted = mealsDates.map((date) => {
      const timeSortedDailyMeals = sortDayMealsByTime(mealsByDate[date]);
      return {
        title: date,
        data: timeSortedDailyMeals,
      };
    });

    return sortMealsListByTitle(mealsFormatted);
  }, [mealsByDate]);

  function handleStatistics() {
    navigation.navigate('statistics');
  }

  function handleAddMeal() {
    navigation.navigate('mealRegistration');
  }

  function updateDietPercentage(meals: MealType[]) {
    const mealsOnDietCount = meals.filter((meal) => meal.isDiet).length;
    const percentage = mealsOnDietCount / meals.length;

    setDietPercentage(percentage * 100);
    setIsOnDiet(percentage >= 0.5);
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();

      if (data.length > 0) {
        updateDietPercentage(data);
        return setMealsByDate(groupMealsByDate(data));
      }

      setMealsByDate({});
      setDietPercentage(0);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <ProfilePictureContainer>
          <ProfilePicture source={personImg} />
        </ProfilePictureContainer>
      </Header>

      <StatisticsContainer success={isOnDiet} onPress={handleStatistics}>
        <StatisticsPercentage>
          {dietPercentage.toFixed(2)}%
        </StatisticsPercentage>
        <StatisticsText>of the food eaten meets the diet.</StatisticsText>
        <OpenIcon success={isOnDiet} />
      </StatisticsContainer>

      <AddMealContainer>
        <AddMealTitle>Meals</AddMealTitle>
        <Button onPress={handleAddMeal} icon={<PlusIcon />}>
          Add Meal
        </Button>
      </AddMealContainer>

      <SectionList
        sections={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealContainer>
            <MealTime>{formatTime(new Date(item.date))}</MealTime>
            <MealName>{item.name}</MealName>
            <MealType isDiet={item.isDiet} />
          </MealContainer>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateTitle>{title}</DateTitle>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
