export const drawerItemsMain = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'TimeSheets',
    title: 'Time Sheets',
    routes: [
      {nav: 'MainDrawer', routeName: 'Attendances', title: 'Attendances'},
      {
        nav: 'MainDrawer',
        routeName: 'DateWiseAttendances',
        title: 'Date Wise Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'MonthlyAttendances',
        title: 'Monthly Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'ApproveEmployeeLeaves',
        title: 'Approve Employee Leaves',
      },
    ],
  },
  {
    key: 'Organization',
    title: 'Organization',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'Announcements',
        title: 'Announcements',
      },
      {
        nav: 'MainDrawer',
        routeName: 'CompanyPolicy',
        title: 'Company Policy',
      },
    ],
  },
  {
    key: 'HrCalenders',
    title: 'HR Calenders',
    routes: [
      {nav: 'MainDrawer', routeName: 'HrCalenders', title: 'HR Calenders'},
    ],
  },
  {
    key: 'Assets',
    title: 'Assets',
    routes: [{nav: 'MainDrawer', routeName: 'Assets', title: 'Assets'}],
  },
];

export const drawerItemsSubMain = [
  {
    key: 'Home',
    title: 'Dashboard',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'Profile',
    title: 'Profile',
    routes: [
      {nav: 'BasicInfo', routeName: 'BasicInfo', title: 'Basic Info'},
      {
        nav: 'Immigration',
        routeName: 'Immigration',
        title: 'Immigration',
      },
      {
        nav: 'EmergencyContacts',
        routeName: 'EmergencyContacts',
        title: 'Emergency Contacts',
      },
      {
        nav: 'SocialProfile',
        routeName: 'SocialProfile',
        title: 'Social Profile',
      },
      {
        nav: 'Document',
        routeName: 'Document',
        title: 'Document',
      },
      {
        nav: 'Qualification',
        routeName: 'Qualification',
        title: 'Qualification',
      },
      {
        nav: 'WorkExperience',
        routeName: 'WorkExperience',
        title: 'Work Experience',
      },

      {
        nav: 'SalaryBankAccount',
        routeName: 'SalaryBankAccount',
        title: 'Salary Bank Account',
      },
      {
        nav: 'ChangePassword',
        routeName: 'ChangePassword',
        title: 'Change Password',
      },
      {
        nav: 'AppointmentLetter',
        routeName: 'AppointmentLetter',
        title: 'Appointment Letter',
      },
      {
        nav: 'DownloadLatestIDCard',
        routeName: 'DownloadLatestIDCard',
        title: 'Download Latest ID Card',
      },
    ],
  },
  {
    key: 'Organization',
    title: 'Organization',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'Announcements',
        title: 'Announcements',
      },
      {
        nav: 'MainDrawer',
        routeName: 'CompanyPolicy',
        title: 'Company Policy',
      },
    ],
  },
  {
    key: 'HrCalenders',
    title: 'HR Calenders',
    routes: [
      {nav: 'MainDrawer', routeName: 'HrCalenders', title: 'HR Calenders'},
    ],
  },
  {
    key: 'Assets',
    title: 'Assets',
    routes: [{nav: 'MainDrawer', routeName: 'Assets', title: 'Assets'}],
  },
];
