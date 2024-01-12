import { useNavigation } from '@react-navigation/native';

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

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container success>
      <Header onPress={navigation.goBack}>
        <StatisticsPercentage>90.86%</StatisticsPercentage>
        <StatisticsText>of the food eaten meets the diet.</StatisticsText>
        <BackIcon success />
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
          <CardTitle>22</CardTitle>
          <CardText>best meal streak in diet</CardText>
        </Card>

        <Card>
          <CardTitle>109</CardTitle>
          <CardText>registered meals</CardText>
        </Card>

        <CardsWrapper>
          <Card type="success">
            <CardTitle>99</CardTitle>
            <CardText>meals in line with the diet</CardText>
          </Card>

          <Card type="failure">
            <CardTitle>10</CardTitle>
            <CardText>meals that don't meet the diet</CardText>
          </Card>
        </CardsWrapper>
      </Content>
    </Container>
  );
}
