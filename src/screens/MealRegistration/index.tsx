import { useState } from 'react';

import { Button } from '@components/Button';

import {
  BackButton,
  BackIcon,
  CircleIcon,
  Content,
  DateContainer,
  FormContainer,
  Header,
  Input,
  InputContainer,
  InputLabel,
  InputsWrapper,
  OptionButton,
  OptionLabel,
  OptionsContainer,
  PageContainer,
  TextArea,
  Title,
} from './styles';

export function MealRegistration() {
  const [isDiet, setIsDiet] = useState<boolean | null>(null);

  return (
    <PageContainer>
      <Header>
        <BackButton>
          <BackIcon />
        </BackButton>

        <Title>New Meal</Title>
      </Header>

      <FormContainer
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Content>
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <Input returnKeyType="next" />
          </InputContainer>

          <InputContainer>
            <InputLabel>Description</InputLabel>
            <TextArea returnKeyType="next" />
          </InputContainer>

          <InputsWrapper>
            <DateContainer>
              <InputLabel>Date</InputLabel>
              <Input returnKeyType="next" />
            </DateContainer>

            <DateContainer>
              <InputLabel>Time</InputLabel>
              <Input returnKeyType="next" />
            </DateContainer>
          </InputsWrapper>

          <InputContainer>
            <InputLabel>Is this meal in line with the diet?</InputLabel>
            <OptionsContainer>
              <OptionButton
                type={isDiet ? 'success' : undefined}
                onPress={() => setIsDiet(true)}
              >
                <CircleIcon success />
                <OptionLabel>Yes</OptionLabel>
              </OptionButton>
              <OptionButton
                type={isDiet === false ? 'failure' : undefined}
                onPress={() => setIsDiet(false)}
              >
                <CircleIcon success={false} />
                <OptionLabel>No</OptionLabel>
              </OptionButton>
            </OptionsContainer>
          </InputContainer>
        </Content>

        <Button>Add meal</Button>
      </FormContainer>
    </PageContainer>
  );
}
