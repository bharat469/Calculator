import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/props/navigation/navigation';
import Store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
