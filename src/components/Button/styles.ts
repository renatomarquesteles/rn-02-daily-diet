import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent'};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
