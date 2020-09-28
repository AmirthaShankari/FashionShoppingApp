// React Imports
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity
} from 'react-native';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';

const CategorySelection = ({ categories, selectedCategory, updateSelection }) => {
  log.info('Category Selection component Initialized! selected Category...', selectedCategory);

  const renderItem = ({ item }) => {
    const selected = selectedCategory === item.KEY;
    return (
      <TouchableOpacity onPress={() => updateSelection(item.KEY)}>
        <View style={[styles.item, selected ? styles.itemSelected : '']}>
          <Text style={[styles.title, selected ? styles.titleSelected : '']}>
            {item.DISPLAY_NAME}

          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.categoryWrapper}>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.KEY}
      />
    </View>
  );
};

export default CategorySelection;
