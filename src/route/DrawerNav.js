import React from 'react';

import BasicInfo from '../screen/Profile/BasicInfo';
import Dashboard from '../screen/Dashboard/Dashboard';
import DateWiseAttendance from '../screen/timeSheets/DateWiseAttendances';
import Announcements from '../screen/Organization/Announcements/Announcements';
import CompanyPolicy from '../screen/Organization/CompanyPolicy/CompanyPolicy';
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

import { createDrawerNavigator } from '@react-navigation/drawer';

import { drawerItemsMain } from './Drawer/DrawerItemsMain';
import CustomDrawerContent from './Drawer/CustomDrawerContent';
import { View, Text } from 'react-native';
import CustomHeader from './Drawer/CustomHeader';
import MonthlyAttendances from '../screen/timeSheets/MonthlyAttendances';
import Attendances from '../screen/timeSheets/Attendances';
import DetailsScreen from '../screen/Organization/DetailsScreen';

const Drawer = createDrawerNavigator();

function ApproveEmployeeLeaves() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ApproveEmployeeLeaves</Text>
    </View>
  );
}

const getHeaderTitle = (options, name) => {
  let returnName = [];
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      returnName.push(name[i]);
    } else {
      if (name[i] === name[i].toUpperCase()) {
        returnName.push(' ');
        returnName.push(name[i]);
      } else {
        returnName.push(name[i]);
      }
    }
  }

  let data = returnName.toString();

  let result = '';

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== ',') {
      result += data[i];
    }
  }

  return result;
};

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          console.log('route', route.name, title);

          // return title === "" ? (
          return <CustomHeader title={title} navigation={navigation} />;
          // ) : null;
        },
      }}
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
      <Drawer.Screen name="Announcements" component={Announcements} />
      <Drawer.Screen name="CompanyPolicy" options={{ title: "Company Policy" }} component={CompanyPolicy} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigation;
