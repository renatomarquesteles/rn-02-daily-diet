import { ArrowLeft, Trash } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { PencilLine } from 'phosphor-react-native';

type Props = {
  success: boolean;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, success }) =>
    success ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 10px;
  border-radius: 999px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
`;

export const MainContainer = styled.View`
  flex: 1;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  justify-content: space-between;
  gap: 24px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { gap: 24 },
  showsVerticalScrollIndicator: false,
})``;

export const TextContainer = styled.View`
  gap: 8px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

type CircleIconProps = {
  success: boolean;
};

export const CircleIcon = styled.View<CircleIconProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, success }) =>
    success ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagsContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Tag = styled.View`
  padding: 8px 16px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ButtonsContainer = styled.View`
  gap: 9px;
`;

export const EditIcon = styled(PencilLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_200,
}))``;
