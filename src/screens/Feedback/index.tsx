import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';
import manImg from '@assets/man.png';
import womanImg from '@assets/woman.png';

import {
  BoldText,
  ButtonContainer,
  Container,
  Message,
  TextContainer,
  Title,
} from './styles';

type RouteParams = {
  success: boolean;
};

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { success } = route.params as RouteParams;

  if (success) {
    return (
      <Container>
        <TextContainer>
          <Title success>Keep going!</Title>
          <Message>
            You're <BoldText>on the diet.</BoldText> Very good!
          </Message>
        </TextContainer>

        <Image source={womanImg} />

        <ButtonContainer>
          <Button onPress={() => navigation.navigate('home')}>
            Back to Home Screen
          </Button>
        </ButtonContainer>
      </Container>
    );
  }

  return (
    <Container>
      <TextContainer>
        <Title success={false}>Too bad!</Title>
        <Message>
          You're <BoldText>off the diet</BoldText> this time, but keep trying
          and don't give up!
        </Message>
      </TextContainer>

      <Image source={manImg} />

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('home')}>
          Back to Home Screen
        </Button>
      </ButtonContainer>
    </Container>
  );
}
