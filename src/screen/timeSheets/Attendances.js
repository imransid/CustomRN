import * as React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Attendances = () => {
  const tableHead = {
    tableHead: [
      'Head',
      'Head2',
      'Head3',
      'Head4',
      'Head5',
      'Head6',
      'Head7',
      'Head8',
      'Head9',
    ],
    widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
  };

  const data = [];

  for (let i = 0; i < 30; i += 1) {
    const dataRow = [];
    for (let j = 0; j < 9; j += 1) {
      dataRow.push(`${i}${j}`);
    }
    data.push(dataRow);
  }

  return (
    <SafeAreaView style={styles.container}>
      <DataTable tableHead={tableHead} data={data} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default Attendances;
