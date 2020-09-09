// React Imports
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

// App Imports
import { AppConstants } from '../constants/AppConstants';
import { Context as AppLoadContext } from '../context/AppLoadContext';

// App Screens Imports
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import AppLoadScreen from '../screens/AppLoadScreen';

export default () => {

  // Extracting Context values needed to decide the navigation stack
  const { state: { isAppLoadComplete } } = useContext(AppLoadContext)

  // Defining stack navigator
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>{isAppLoadComplete ? (
          // App Stack
          <>
            <Stack.Screen name={AppConstants.ROUTES.HOME} component={HomeScreen} />
            <Stack.Screen name={AppConstants.ROUTES.PRODUCT_DETAIL} component={ProductDetailScreen} />
          </>
        ) : (
            // App Loading Stack
            <Stack.Screen name={AppConstants.ROUTES.APP_LOAD} component={AppLoadScreen} />
          )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};
