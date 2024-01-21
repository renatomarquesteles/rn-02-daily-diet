import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import { formatDate, formatTime } from '@utils/formatDateTime';

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  MainContainer,
  Header,
  Title,
  MealName,
  Text,
  Label,
  TextContainer,
  Tag,
  CircleIcon,
  TagText,
  TagsContainer,
  EditIcon,
  DeleteIcon,
  ButtonsContainer,
} from './styles';

type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

type RouteParams = {
  meal: MealType;
};

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const dateAndTime = `${formatDate(new Date(meal.date))} at ${formatTime(
    new Date(meal.date)
  )}`;

  function handleEditMeal() {
    navigation.navigate('mealRegistration', { meal });
  }

  function handleDeleteMeal() {}

  return (
    <Container success={meal.isDiet}>
      <Header>
        <BackButton onPress={navigation.goBack}>
          <BackIcon />
        </BackButton>

        <Title>Meal</Title>
      </Header>

      <MainContainer>
        <Content>
          <TextContainer>
            <MealName>{meal.name}</MealName>
            <Text>{meal.description}</Text>
          </TextContainer>
          <TextContainer>
            <Label>Date and time</Label>
            <Text>{dateAndTime}</Text>
          </TextContainer>

          <TagsContainer>
            <Tag>
              <CircleIcon success={meal.isDiet} />
              <TagText>
                {meal.isDiet ? 'is in the diet' : 'is not in the diet'}
              </TagText>
            </Tag>
          </TagsContainer>
        </Content>

        <ButtonsContainer>
          <Button icon={<EditIcon />} onPress={handleEditMeal}>
            Edit meal
          </Button>
          <Button
            type="secondary"
            icon={<DeleteIcon />}
            onPress={handleDeleteMeal}
          >
            Delete meal
          </Button>
        </ButtonsContainer>
      </MainContainer>
    </Container>
  );
}
