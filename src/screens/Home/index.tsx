import { useCallback, useMemo, useState } from 'react';
import { Image, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png';
import personImg from '@assets/person.png';
import { Button } from '@components/Button';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { formatTime } from '@utils/formatDateTime';
import { groupMealsByDate } from '@utils/groupMealsByDate';

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
  date: string;
  isDiet: boolean;
};

type MealsByDateType = {
  [date: string]: MealType[];
};

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<MealsByDateType>({});
  const navigation = useNavigation();
  const listData = useMemo(
    () =>
      Object.keys(mealsByDate).map((item) => ({
        title: item,
        data: mealsByDate[item],
      })),
    [mealsByDate]
  );

  function handleStatistics() {
    navigation.navigate('statistics');
  }

  function handleAddMeal() {
    navigation.navigate('mealRegistration');
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();

      if (data.length > 0) {
        return setMealsByDate(groupMealsByDate(data));
      }

      setMealsByDate({});
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

      <StatisticsContainer success={false} onPress={handleStatistics}>
        <StatisticsPercentage>90.86%</StatisticsPercentage>
        <StatisticsText>of the food eaten meets the diet.</StatisticsText>
        <OpenIcon success={false} />
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
