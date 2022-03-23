import * as React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'native-base';
import SearchBox from '../../components/searchBox/SearchBox';

const Attendances = () => {
  const tableHead = {
    tableHead: [
      'Sl',
      'Employee',
      'Date',
      'Status',
      'Clock In',
      'IN LC',
      'Clock Out',
      'OUT LC',
      'Late',
      'Early Leaving',
      'Overtime',
      'Total Work',
    ],
    widthArr: [50, 140, 80, 100, 120, 140, 160, 180, 200, 200, 200, 200],
  };

  const data = [];

  for (let i = 0; i < 30; i += 1) {
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

export default Attendances;
