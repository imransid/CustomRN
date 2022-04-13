import React from 'react';

import BasicInfo from '../screen/Profile/BasicInfo';
import Dashboard from '../screen/Dashboard/Dashboard';
import DateWiseAttendance from '../screen/timeSheets/DateWiseAttendances';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {drawerItemsMain, drawerItemsSubMain} from './Drawer/DrawerItemsMain';
import CustomDrawerContent from './Drawer/CustomDrawerContent';
import CustomHeader from './Drawer/CustomHeader';
import Attendances from '../screen/timeSheets/Attendances';
import MonthlyAttendances from '../screen/timeSheets/MonthlyAttendances';
import ApproveEmployeeLeaves from '../screen/timeSheets/ApproveEmployeeLeaves';
import Announcements from '../screen/organization/Announcements';
import CompanyPolicy from '../screen/organization/CompanyPolicy';
import HrCalenders from '../screen/HrCalendars/HrCalenders';
import DetailsScreen from '../screen/detailsScreen/DetailsScreen';
import SocialProfile from '../screen/Profile/SocialProfile';
import Assets from '../screen/Assets/Assets';
import Immigration from '../screen/Profile/Immigration';
import EmergencyContacts from '../screen/Profile/EmergencyContacts';
import Document from '../screen/Profile/Document';
import Qualification from '../screen/Profile/Qualification';
import SalaryBankAccount from '../screen/Profile/SalaryBankAccount';
import WorkExperience from '../screen/Profile/WorkExperience';

import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

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
  const drawerMode = useSelector(state => state.setting.drawerMode);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);

          return <CustomHeader title={title} navigation={navigation} />;
        },
      }}
      drawerContent={props => (
        <CustomDrawerContent
          drawerItems={drawerMode ? drawerItemsMain : drawerItemsSubMain}
          {...props}
        />
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
      <Drawer.Screen name="CompanyPolicy" component={CompanyPolicy} />
      <Drawer.Screen name="HrCalenders" component={HrCalenders} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Assets" component={Assets} />
      <Drawer.Screen name="SocialProfile" component={SocialProfile} />
      <Drawer.Screen name="Immigration" component={Immigration} />
      <Drawer.Screen name="EmergencyContacts" component={EmergencyContacts} />
      <Drawer.Screen name="Document" component={Document} />
      <Drawer.Screen name="Qualification" component={Qualification} />
      <Drawer.Screen name="SalaryBankAccount" component={SalaryBankAccount} />
      <Drawer.Screen name="WorkExperience" component={WorkExperience} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigation;
