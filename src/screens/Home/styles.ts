import { ArrowUpRight, Plus } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
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

type Props = {
  success: boolean;
};

export const StatisticsContainer = styled.TouchableOpacity<Props>`
  position: relative;
  width: 100%;
  margin-top: 36px;
  padding: 24px;
  background-color: ${({ theme, success }) =>
    success ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const StatisticsPercentage = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const StatisticsText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
`;

export const OpenIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, success }) => ({
    size: 24,
    color: success ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)<Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const AddMealContainer = styled.View`
  width: 100%;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const AddMealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const MealContainer = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 16px;
  margin: 8px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XSM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  padding-right: 12px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-right-width: 1px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  flex: 1;
  padding: 0 12px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

type MealTypeProps = {
  isDiet: boolean;
};

export const MealType = styled.View<MealTypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ isDiet, theme }) =>
    isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
