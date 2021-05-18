import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';
const CategoriesMealsScreen = (props) => {
  const { categoryID } = props.navigation.state.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals found, maybe check your filters</DefaultText>
      </View>
    );
  } else {
    return <MealList listData={displayedMeals} navigation={props.navigation} />;
  }
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const { categoryTitle } = navigationData.navigation.state.params;
  return {
    headerTitle: categoryTitle,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesMealsScreen;
