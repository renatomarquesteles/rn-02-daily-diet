export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealRegistration: undefined | { meal: string };
      feedback: undefined | { success: boolean };
      details: {
        meal: string;
      };
      update: {
        meal: string;
      };
    }
  }
}
