import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryID: itemData.item.id,
            categoryTitle: itemData.item.title,
          })
        }
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesScreen;
