import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  justify-content: center;
  align-items: center;
`;

type TitleProps = {
  success: boolean;
};

export const TextContainer = styled.View`
  gap: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme, success }) =>
    success ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  text-align: center;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ButtonContainer = styled.View`
  margin-top: 32px;
`;
