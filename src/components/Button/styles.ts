import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  padding: 16px 24px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent'};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
