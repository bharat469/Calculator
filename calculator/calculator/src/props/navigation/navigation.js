import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';
import History from '../../screens/history';

const homeStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <homeStack.Navigator>
        <homeStack.Screen
          name="mainPage"
          component={Home}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
      </homeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
