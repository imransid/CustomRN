import * as React from 'react';
import {DataTable} from 'react-native-paper';
import Orientation from 'react-native-orientation';

const optionsPerPage = [2, 3, 4];

const DateWiseAttendance = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  //   React.useEffect(() => {
  //     Orientation.lockToLandscape();
  //     setPage(0);
  //   }, []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>SL</DataTable.Title>
        <DataTable.Title>Employee</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>Clock In</DataTable.Title>
        <DataTable.Title>Clock Out</DataTable.Title>
        <DataTable.Title>Overtime</DataTable.Title>
        <DataTable.Title>Total Work</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        {/* <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={page => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default DateWiseAttendance;
