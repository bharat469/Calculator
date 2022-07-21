import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../../screens/onboardingScreen/onBoardingScreen';
import LoginScreen from '../../screens/loginScreen/loginScreen';
const homestack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <homestack.Navigator>
        <homestack.Screen name="onboarding" component={OnBoardingScreen} />
        <homestack.Screen name="login" component={LoginScreen} />
      </homestack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
