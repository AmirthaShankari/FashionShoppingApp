// React Imports
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

// App Imports
import { AppMessages } from '../../constants/AppMessages';
import { AppConstants } from '../../constants/AppConstants';
import { CommonStyles } from '../../themes';
import { log } from '../../utils/logger';

// Components Import
import CategorySelection from '../../components/CategorySelection';
import OffersSection from '../../components/OffersSection';
import ProductsList from '../../components/ProductsList';

const HomeScreen = () => {
  log.info('Rendering Home Screen!!');
  // Declaring States
  const [selectedCategory, setSelectedCategory] = useState('');

  // Constants
  const DATA = AppConstants.SCREENS.HOME.CATEGORIES;

  // Setting default category selection
  if (!selectedCategory) {
    const defaultCategory = DATA.find((category) => category.DEFAULT);
    setSelectedCategory(defaultCategory.KEY);
  }

  const updateCategorySelection = (selection) => setSelectedCategory(selection);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <CategorySelection
          categories={DATA}
          selectedCategory={selectedCategory}
          updateSelection={updateCategorySelection}
        />
        <ScrollView>
          <OffersSection />
          <ProductsList selectedCategory={selectedCategory} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...CommonStyles.screen,
});

export default HomeScreen;
