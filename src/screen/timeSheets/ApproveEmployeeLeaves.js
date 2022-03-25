import * as React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'native-base';
import SearchBox from '../../components/searchBox/SearchBox';

const ApproveEmployeeLeaves = () => {
  const tableHead = {
    tableHead: [
      'Sl',
      'Employee',
      'Department',
      'Designation',
      'Start Date',
      'End Name',
      'Action',
    ],
    widthArr: [50, 140, 110, 100, 120, 140, 160],
  };

  const data = [];

  for (let i = 0; i < 3; i += 1) {
    const dataRow = [];
    for (let j = 0; j < 12; j += 1) {
      dataRow.push(`${i}${j}`);
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

export default ApproveEmployeeLeaves;
