import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

// import CustomSidebarMenu from "../components/common/CustomSidebarMenu";
// import TabNav from "./TabNav";
// import { getHeaderTitle } from "@react-navigation/elements";
// import AppHeader from "../components/common/new/AppHeader";
// import WatchesScreen from '../screens/watchScreen/WatchesScreen';

import initPage from '../screen/ApiSetupScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
    // screenOptions={{
    //   header: ({ navigation, route, options }) => {
    //     const title = getHeaderTitle(options, route.name);
    //     return title === "" ? (
    //       <AppHeader title={title} navigation={navigation} />
    //     ) : null;
    //   },
    // }}
    // drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      {/* <Drawer.Screen name="Activity Scanner" component={TabNav} /> */}
      <Drawer.Screen name="Screen 1" component={initPage} />
      {/* <Drawer.Screen name="QueueScreen" component={QueueScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
