import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);
