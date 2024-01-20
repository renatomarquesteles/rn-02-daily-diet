import { useState } from 'react';
import { Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import * as Crypto from 'expo-crypto';

import { Button } from '@components/Button';
import { formatDate, formatTime } from '@utils/formatDateTime';
import { mealCreate } from '@storage/meal/mealCreate';

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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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

  function handleAddMeal() {
    if (!name || !description || !date || isDiet === null) {
      return Alert.alert(
        'Missing information',
        'Please fill in all the fields'
      );
    }

    const meal = {
      id: Crypto.randomUUID(),
      name,
      description,
      date,
      isDiet,
    };

    mealCreate(meal);
    navigation.navigate('feedback', { success: isDiet });
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
            <Input returnKeyType="next" value={name} onChangeText={setName} />
          </InputContainer>

          <InputContainer>
            <InputLabel>Description</InputLabel>
            <TextArea
              returnKeyType="next"
              value={description}
              onChangeText={setDescription}
            />
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

        <Button onPress={handleAddMeal}>Add meal</Button>

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
