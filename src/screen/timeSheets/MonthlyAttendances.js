import * as React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'native-base';
import SearchBox from '../../components/searchBox/SearchBox';
import moment from 'moment';

import {_} from 'lodash';

const MonthlyAttendances = () => {
  var daysInMonth = ['Sl', 'Employee'];
  var daysInWidth = [50, 100];

  var monthDate = moment().startOf('month'); // change to a date in the month of interest

  _.times(monthDate.daysInMonth(), function (n) {
    daysInMonth.push(monthDate.format('DD ddd')); // your format
    daysInWidth.push(40);
    monthDate.add(1, 'day');
  });

  const tableHead = {
    tableHead: daysInMonth,
    widthArr: daysInWidth,
  };

  const data = [];

  for (let i = 0; i < 1; i += 1) {
    const dataRow = [1, 'Imran'];
    for (let j = 0; j < 31; j += 1) {
      j % 2 == 0 ? dataRow.push(`L`) : dataRow.push(`P`);
    }
    data.push(dataRow);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBox />
      </View>
      <DataTable tableHead={tableHead} data={data} headerColour={'#00695c'} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
});

export default MonthlyAttendances;
