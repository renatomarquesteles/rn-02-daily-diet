type MealType = {
  id: string;
  name: string;
  description: string;
  date: string;
  isDiet: boolean;
};

type MealsListType = {
  title: string;
  data: MealType[];
}[];

export function sortMealsListByTitle(list: MealsListType) {
  return list.sort((a, b) => {
    const yearA = a.title.slice(-4);
    const monthA = a.title.slice(3, 5);
    const dayA = a.title.slice(0, 2);
    const yearB = b.title.slice(-4);
    const monthB = b.title.slice(3, 5);
    const dayB = b.title.slice(0, 2);

    const timeA = new Date(`${yearA}-${monthA}-${dayA}`).getTime();
    const timeB = new Date(`${yearB}-${monthB}-${dayB}`).getTime();

    return timeB - timeA;
  });
}

export function sortDayMealsByTime(meals: MealType[]) {
  return meals.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
