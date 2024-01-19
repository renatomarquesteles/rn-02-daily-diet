import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonStyleType, ButtonText, Container } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonStyleType;
  icon?: ReactNode;
};

export function Button({ type = 'PRIMARY', icon, children, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon}
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
