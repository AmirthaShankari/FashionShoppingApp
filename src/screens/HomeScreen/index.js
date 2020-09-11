// React Imports
import React, { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

// App Imports
import { AppConstants } from '../../constants/AppConstants';
import { styles } from './styles';
import { log } from '../../utils/logger';
import { Context as CartContext } from '../../context/CartContext';

// Components Import
import { CategorySelection, OffersSection, ProductsList, Header, AppStatusBar } from '../../components';

// Constants
const C = AppConstants.SCREENS.HOME.CATEGORIES;

const HomeScreen = ({ navigation }) => {
  log.info('Rendering Home Screen!!');
  // Declaring States
  const [selectedCategory, setSelectedCategory] = useState('');
  const { getCart } = useContext(CartContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log.info('focussed');
      getCart();
    });
    return () => {
      unsubscribe();
    }
  }, [navigation]);

  useEffect(() => {
    // Setting default category selection
    if (!selectedCategory) {
      const defaultCategory = C.find((category) => category.DEFAULT);
      setSelectedCategory(defaultCategory.KEY);
    }
  }, [])

  const updateCategorySelection = (selection) => setSelectedCategory(selection);

  return (
    <View style={styles.mainContainer}>
      <AppStatusBar />
      <SafeAreaView>
        <Header transparentHeader={false} roundButton={false} />
        <CategorySelection
          categories={C}
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



export default HomeScreen;
