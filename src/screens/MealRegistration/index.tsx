import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { formatDate, formatTime } from '@utils/formatDateTime';

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

type DatePickerModeType = 'date' | 'time';

export function MealRegistration() {
  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] =
    useState<DatePickerModeType>('date');
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();

  function handleDateChange(_: any, selectedDate: Date | undefined) {
    if (!selectedDate) return;

    setShowDatePicker(false);
    setDate(selectedDate);
  }

  function handleOpenDatePicker(mode: DatePickerModeType = 'date') {
    setShowDatePicker(true);
    setDatePickerMode(mode);
  }

  return (
    <PageContainer>
      <Header>
        <BackButton onPress={navigation.goBack}>
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
              <Input
                value={formatDate(date)}
                onFocus={() => handleOpenDatePicker('date')}
                onPressIn={() => handleOpenDatePicker('date')}
                showSoftInputOnFocus={false}
                caretHidden
              />
            </DateContainer>

            <DateContainer>
              <InputLabel>Time</InputLabel>
              <Input
                value={formatTime(date)}
                onFocus={() => handleOpenDatePicker('time')}
                onPressIn={() => handleOpenDatePicker('time')}
                showSoftInputOnFocus={false}
                caretHidden
              />
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

        {showDatePicker && (
          <DateTimePicker
            mode={datePickerMode}
            value={date}
            onChange={handleDateChange}
            is24Hour
          />
        )}
      </FormContainer>
    </PageContainer>
  );
}
