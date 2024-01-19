import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const PageContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
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

export const FormContainer = styled.View`
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

export const InputContainer = styled.View`
  width: 100%;
  gap: 4px;
`;

export const DateContainer = styled.View`
  width: 48%;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  flex-shrink: 1;
  height: 48px;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 4,
  textAlignVertical: 'top',
})`
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const InputsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

type OptionButtonProps = {
  type?: 'success' | 'failure';
};

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return css`
          background-color: ${theme.COLORS.GREEN_LIGHT}
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `;
      case 'failure':
        return css`
          background-color: ${theme.COLORS.RED_LIGHT}
          border: 1px solid ${theme.COLORS.RED_DARK};
        `;
      default:
        return css`
          background-color: ${theme.COLORS.GRAY_600}
          border: 1px solid ${theme.COLORS.GRAY_600};
        `;
    }
  }}

  width: 48%;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
`;

export const OptionLabel = styled.Text`
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
