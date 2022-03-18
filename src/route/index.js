import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNav from './DrawerNav';
// import {MainStackNavigator} from './StackNavigator';

import { createStackNavigator } from '@react-navigation/stack';

import ApiSetupScreen from '../screen/ApiSetupScreen';
import Dashboard from '../screen/Dashboard/Dashboard';
// import LoginScreen from '../screens/login/LoginScreen';
// import ApplicationUpdateScreen from '../components/new/ApplicationUpdateScreen';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ApiSetupScreen" component={Dashboard} />
      {/* {screen === 1 ? (
        <Stack.Screen name="ApiSetupScreen" component={ApiSetupScreen} />
      ) : screen === 4 ? (
        <Stack.Screen
          name="ApplicationUpdateScreen"
          component={ApplicationUpdateScreen}
        />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )} */}
    </Stack.Navigator>
  );
};

export { MainStackNavigator };



export default function Nav() {
  const isLogged = false; //useSelector(state => state.user.islogged);

  return (
    <NavigationContainer>
      {!isLogged ? <MainStackNavigator /> : null}
    </NavigationContainer>
  );
}
