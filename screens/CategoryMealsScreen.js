import React from 'react';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
const CategoriesMealsScreen = (props) => {
  const { categoryID } = props.navigation.state.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const { categoryTitle } = navigationData.navigation.state.params;
  return {
    headerTitle: categoryTitle,
  };
};

export default CategoriesMealsScreen;
