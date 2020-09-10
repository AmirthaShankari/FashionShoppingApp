// React Imports
import React, { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

// App Imports
import { AppConstants } from '../../constants/AppConstants';
import { styles } from './styles';
import { log } from '../../utils/logger';

// Components Import
import CategorySelection from '../../components/CategorySelection';
import OffersSection from '../../components/OffersSection';
import ProductsList from '../../components/ProductsList';
import Header from '../../components/common/Header';
import AppStatusBar from '../../components/common/AppStatusBar';
import { Context as CartContext } from '../../context/CartContext';

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
      <AppStatusBar />
      <SafeAreaView>
        <Header transparentHeader={false} roundButton={false} />
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



export default HomeScreen;
