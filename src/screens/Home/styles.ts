import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePictureContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  overflow: hidden;
`;

export const ProfilePicture = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: null;
  height: null;
`;
