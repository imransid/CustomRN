import React from 'react';

// import {createDrawerNavigator} from '@react-navigation/drawer';

// // import CustomSidebarMenu from "../components/common/CustomSidebarMenu";
// // import TabNav from "./TabNav";
// // import { getHeaderTitle } from "@react-navigation/elements";
// // import AppHeader from "../components/common/new/AppHeader";
// // import WatchesScreen from '../screens/watchScreen/WatchesScreen';

import BasicInfo from '../screen/Profile/BasicInfo';
import Dashboard from '../screen/Dashboard/Dashboard';
import DateWiseAttendance from '../screen/timeSheets/DateWiseAttendances';
// const Drawer = createDrawerNavigator();

// const DrawerNav = () => {
//   return (
//     <Drawer.Navigator
//     // screenOptions={{
//     //   header: ({ navigation, route, options }) => {
//     //     const title = getHeaderTitle(options, route.name);
//     //     return title === "" ? (
//     //       <AppHeader title={title} navigation={navigation} />
//     //     ) : null;
//     //   },
//     // }}
//     // drawerContent={(props) => <CustomSidebarMenu {...props} />}
//     >
//       {/* <Drawer.Screen name="Activity Scanner" component={TabNav} /> */}
//       <Drawer.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{
//           headerShown: false,
//           title: 'Dashboard',
//         }}
//       />
//       <Drawer.Screen
//         name="BasicInfo"
//         component={BasicInfo}
//         options={{
//           headerShown: false,
//           title: 'BasicInfo',
//         }}
//       />

//       {/* <Drawer.Screen name="QueueScreen" component={QueueScreen} /> */}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNav;

import {createDrawerNavigator} from '@react-navigation/drawer';

import {drawerItemsMain} from './Drawer/DrawerItemsMain';
import CustomDrawerContent from './Drawer/CustomDrawerContent';
import {View, Text} from 'react-native';

import Attendances from '../screen/timeSheets/Attendances';

const Drawer = createDrawerNavigator();

function ApproveEmployeeLeaves() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ApproveEmployeeLeaves</Text>
    </View>
  );
}

function MonthlyAttendances() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MonthlyAttendances</Text>
    </View>
  );
}

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="BasicInfo" component={BasicInfo} />

      <Drawer.Screen name="MonthlyAttendances" component={MonthlyAttendances} />
      <Drawer.Screen
        name="ApproveEmployeeLeaves"
        component={ApproveEmployeeLeaves}
      />
      <Drawer.Screen name="Attendances" component={Attendances} />
      <Drawer.Screen
        name="DateWiseAttendances"
        component={DateWiseAttendance}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigation;
