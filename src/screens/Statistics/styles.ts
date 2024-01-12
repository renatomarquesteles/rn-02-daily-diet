import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

type Props = {
  success: boolean;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, success }) =>
    success ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.TouchableOpacity`
  width: 100%;
  padding: 34px 24px;
  justify-content: center;
  align-items: center;
`;

export const StatisticsPercentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatisticsText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, success }) => ({
    size: 24,
    color: success ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)<Props>`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
`;

type CardProps = {
  type?: 'success' | 'failure';
};

export const Card = styled.View<CardProps>`
  flex-shrink: 1;
  padding: 16px;
  margin: 12px 0;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.COLORS.GREEN_LIGHT;
      case 'failure':
        return theme.COLORS.RED_LIGHT;
      default:
        return theme.COLORS.GRAY_600;
    }
  }};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CardText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
`;

export const CardsWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;
