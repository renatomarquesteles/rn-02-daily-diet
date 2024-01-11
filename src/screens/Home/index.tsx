import { Image } from 'react-native';

import logoImg from '@assets/logo.png';
import personImg from '@assets/person.png';

import {
  Container,
  Header,
  ProfilePicture,
  ProfilePictureContainer,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <ProfilePictureContainer>
          <ProfilePicture source={personImg} />
        </ProfilePictureContainer>
      </Header>
    </Container>
  );
}
