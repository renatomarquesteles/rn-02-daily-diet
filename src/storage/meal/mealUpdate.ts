import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';

type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

export async function mealUpdate(mealUpdated: MealType) {
  try {
    const storedMeals = await mealsGetAll();

    const mealExists = storedMeals.find((item) => item.id === mealUpdated.id);

    if (!mealExists) {
      throw new AppError('Meal not found.');
    }

    const newStorage = JSON.stringify(
      storedMeals.map((item) => {
        if (item.id === mealUpdated.id) {
          return mealUpdated;
        }
        return item;
      })
    );
    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
