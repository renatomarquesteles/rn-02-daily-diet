export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealRegistration: undefined | { meal: string };
      feedback: undefined;
      details: {
        meal: string;
      };
      update: {
        meal: string;
      };
    }
  }
}
