type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: { meals: MealType[] };
      mealRegistration: undefined | { meal: MealType };
      feedback: { success: boolean };
      details: { meal: MealType };
    }
  }
}
