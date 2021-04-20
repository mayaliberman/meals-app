import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
const CategoriesMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };
  const { categoryID } = props.navigation.state.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(items, index) => items.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const { categoryTitle } = navigationData.navigation.state.params;
  return {
    headerTitle: categoryTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesMealsScreen;
