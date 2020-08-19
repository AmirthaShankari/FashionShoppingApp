// React Imports
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// App Screens Imports
import HomeScreen from '../screens/HomeScreen';
import {AppConstants} from '../constants/AppConstants';

export default () => {
  // Defining stack navigator
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={AppConstants.ROUTES.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
