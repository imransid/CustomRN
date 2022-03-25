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
];
