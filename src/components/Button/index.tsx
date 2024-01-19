import { TouchableOpacityProps } from 'react-native';

import { ButtonStyleType, ButtonText, Container } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonStyleType;
};

export function Button({ type = 'PRIMARY', children, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
