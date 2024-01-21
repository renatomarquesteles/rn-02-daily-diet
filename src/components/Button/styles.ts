import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonStyleType = 'primary' | 'secondary';

type Props = {
  type: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  padding: 16px 24px;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GRAY_200 : 'transparent'};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ButtonText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`;
