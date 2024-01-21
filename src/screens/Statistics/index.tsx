import { useNavigation, useRoute } from '@react-navigation/native';

import { sortDayMealsByTime } from '@utils/sortMealsList';

import {
  BackIcon,
  Card,
  CardText,
  CardTitle,
  CardsWrapper,
  Container,
  Content,
  ContentTitle,
  Header,
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

type RouteParams = {
  meals: MealType[];
};

export function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meals } = route.params as RouteParams;

  const mealsOnDietCount = meals.filter((meal) => meal.isDiet).length;
  const mealsNotOnDietCount = meals.length - mealsOnDietCount;
  const percentage = mealsOnDietCount / meals.length;
  const mealsOnDietStreak = sortDayMealsByTime(meals).reduce(
    (streak, meal) => {
      if (meal.isDiet) {
        const currentStreak = streak.current + 1;

        if (currentStreak > streak.highest) {
          return { current: currentStreak, highest: currentStreak };
        } else {
          return { ...streak, current: currentStreak };
        }
      }

      return { ...streak, current: 0 };
    },
    { current: 0, highest: 0 }
  ).highest;

  return (
    <Container success={percentage >= 0.5}>
      <Header onPress={navigation.goBack}>
        <StatisticsPercentage>
          {(percentage * 100).toFixed(2)}%
        </StatisticsPercentage>
        <StatisticsText>of the food eaten meets the diet.</StatisticsText>
        <BackIcon success={percentage >= 0.5} />
      </Header>

      <Content
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <ContentTitle>General Statistics</ContentTitle>

        <Card>
          <CardTitle>{mealsOnDietStreak}</CardTitle>
          <CardText>best meal streak in diet</CardText>
        </Card>

        <Card>
          <CardTitle>{meals.length}</CardTitle>
          <CardText>registered meals</CardText>
        </Card>

        <CardsWrapper>
          <Card type="success">
            <CardTitle>{mealsOnDietCount}</CardTitle>
            <CardText>meals in line with the diet</CardText>
          </Card>

          <Card type="failure">
            <CardTitle>{mealsNotOnDietCount}</CardTitle>
            <CardText>meals that don't meet the diet</CardText>
          </Card>
        </CardsWrapper>
      </Content>
    </Container>
  );
}
