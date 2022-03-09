import React from 'react';
import App from './src/components/tapButton/TapButton';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppK = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <App />
    </GestureHandlerRootView>
  );
};

export default AppK;
