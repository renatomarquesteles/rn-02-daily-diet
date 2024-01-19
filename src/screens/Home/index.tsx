import { Image, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png';
import personImg from '@assets/person.png';
import { Button } from '@components/Button';

import {
  AddMealContainer,
  AddMealTitle,
  ButtonLabel,
  Container,
  Date,
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

const DATA = [
  {
    title: '01.12.24',
    data: [
      { name: 'Chicken Sandwich', time: '10:00', isDiet: true },
      { name: 'Whey Protein', time: '09:30', isDiet: true },
      { name: 'Ceasar Salad', time: '09:00', isDiet: true },
      { name: 'Orange Juice', time: '08:30', isDiet: false },
    ],
  },
  {
    title: '01.11.24',
    data: [
      { name: 'Chicken Sandwich', time: '10:00', isDiet: true },
      { name: 'Whey Protein', time: '09:30', isDiet: true },
      { name: 'Ceasar Salad', time: '09:00', isDiet: true },
      { name: 'Orange Juice', time: '08:30', isDiet: false },
    ],
  },
  {
    title: '01.10.24',
    data: [
      { name: 'Chicken Sandwich', time: '10:00', isDiet: true },
      { name: 'Whey Protein', time: '09:30', isDiet: true },
      { name: 'Ceasar Salad', time: '09:00', isDiet: true },
      { name: 'Orange Juice', time: '08:30', isDiet: false },
    ],
  },
  {
    title: '01.09.24',
    data: [
      { name: 'Chicken Sandwich', time: '10:00', isDiet: true },
      { name: 'Whey Protein', time: '09:30', isDiet: true },
      { name: 'Ceasar Salad', time: '09:00', isDiet: true },
      { name: 'Orange Juice', time: '08:30', isDiet: false },
    ],
  },
];

export function Home() {
  const navigation = useNavigation();

  function handleStatistics() {
    navigation.navigate('statistics');
  }

  function handleAddMeal() {
    navigation.navigate('mealRegistration');
  }

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
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealContainer>
            <MealTime>{item.time}</MealTime>
            <MealName>{item.name}</MealName>
            <MealType isDiet={item.isDiet} />
          </MealContainer>
        )}
        renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
