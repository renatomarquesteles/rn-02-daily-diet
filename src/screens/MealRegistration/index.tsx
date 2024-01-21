import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Crypto from 'expo-crypto';

import { Button } from '@components/Button';
import { formatDate, formatTime } from '@utils/formatDateTime';
import { mealCreate } from '@storage/meal/mealCreate';
import { mealUpdate } from '@storage/meal/mealUpdate';

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

type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

type RouteParams = {
  meal: MealType;
};

export function MealRegistration() {
  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] =
    useState<DatePickerModeType>('date');
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mealEditId, setMealEditId] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

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

    const newMeal = {
      id: Crypto.randomUUID(),
      name,
      description,
      date,
      isDiet,
    };

    mealCreate(newMeal);
    navigation.navigate('feedback', { success: isDiet });
  }

  async function handleEditMeal() {
    if (!mealEditId) {
      return Alert.alert('Meal not found');
    }

    if (!name || !description || !date || isDiet === null) {
      return Alert.alert(
        'Missing information',
        'Please fill in all the fields'
      );
    }

    const updatedMeal = {
      id: mealEditId,
      name,
      description,
      date: date.toISOString(),
      isDiet,
    };

    await mealUpdate(updatedMeal);
    navigation.navigate('details', { meal: updatedMeal });
  }

  useEffect(() => {
    if (!route.params) return;

    const { meal } = route.params as RouteParams;

    if (!meal) return;

    setMealEditId(meal.id);
    setName(meal.name);
    setDescription(meal.description);
    setDate(new Date(meal.date));
    setIsDiet(meal.isDiet);
  }, []);

  return (
    <PageContainer>
      <Header>
        <BackButton onPress={navigation.goBack}>
          <BackIcon />
        </BackButton>

        <Title>{mealEditId ? 'Edit Meal' : 'New Meal'}</Title>
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

        {mealEditId ? (
          <Button onPress={handleEditMeal}>Save changes</Button>
        ) : (
          <Button onPress={handleAddMeal}>Add meal</Button>
        )}

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
