import { formatDate } from './formatDateTime';

type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

type MealsByDateType = {
  [date: string]: MealType[];
};

export function groupMealsByDate(meals: MealType[]) {
  return meals.reduce<MealsByDateType>((grouped, currentMeal) => {
    const mealDate = formatDate(new Date(currentMeal['date']));

    const dateAlreadyExists = grouped[mealDate];

    if (dateAlreadyExists) {
      return {
        ...grouped,
        [mealDate]: [...grouped[mealDate], currentMeal],
      };
    }

    return {
      ...grouped,
      [mealDate]: [currentMeal],
    };
  }, {});
}
