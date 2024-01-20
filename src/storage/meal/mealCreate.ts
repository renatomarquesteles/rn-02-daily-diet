import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';

type MealType = {
  id: string;
  name: string;
  description: string;
  date: Date;
  isDiet: boolean;
};

export async function mealCreate(newMeal: MealType) {
  try {
    const storedMeals = await mealsGetAll();

    const mealAlreadyExists = storedMeals.find(
      (item) => item.id === newMeal.id
    );

    if (mealAlreadyExists) {
      throw new AppError('Meal already registered.');
    }

    const newStorage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
