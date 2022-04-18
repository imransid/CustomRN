import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Root, StyleProvider, NativeBaseProvider} from 'native-base';
import {PersistGate} from 'redux-persist/integration/react';
import store from './config/Store';
import Router from './route/';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <SafeAreaView style={styles.container}>
            <Router />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
