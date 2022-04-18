import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNav from './DrawerNav';
import CustomHeader from './Drawer/CustomHeader';
// import {MainStackNavigator} from './StackNavigator';

import {createStackNavigator} from '@react-navigation/stack';

import ApiSetupScreen from '../screen/ApiSetupScreen';
import SignIn from '../screen/SignIn';

// import LoginScreen from '../screens/login/LoginScreen';

// import ApplicationUpdateScreen from '../components/new/ApplicationUpdateScreen';

import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />

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

export default function Nav() {
  const isLogged = useSelector(state => state.user.islogged);

  return (
    <NavigationContainer>
      {!isLogged ? (
        <MainStackNavigator />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerMode: 'screen',
            headerTintColor: '#404554',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            header: props => {
              return <CustomHeader {...props} />;
            },
          }}>
          <Stack.Screen name="MainDrawer" component={DrawerNav} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
