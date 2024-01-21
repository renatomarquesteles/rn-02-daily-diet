import { useCallback, useEffect, useMemo, useState } from 'react';
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

export function Home() {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [isOnDiet, setIsOnDiet] = useState(false);
  const [dietPercentage, setDietPercentage] = useState(0);
  const navigation = useNavigation();

  const listData = useMemo(() => {
    const mealsByDate = groupMealsByDate(meals);
    const mealsDates = Object.keys(mealsByDate);
    const mealsFormatted = mealsDates.map((date) => {
      const timeSortedDailyMeals = sortDayMealsByTime(
        mealsByDate[date]
      ).reverse();
      return {
        title: date,
        data: timeSortedDailyMeals,
      };
    });

    return sortMealsListByTitle(mealsFormatted);
  }, [meals]);

  function handleStatistics() {
    navigation.navigate('statistics', { meals });
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
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  useEffect(() => {
    updateDietPercentage(meals);
  }, [meals]);

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
