import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAssets } from '../../actions/Assets';
import TableCardAttachment from '../../components/TableCardAttachment/TableCardAttachment'
const temp = [
    {
        id: '1',
        emp_name: 'Imran Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-001',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-001',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '2',
        emp_name: 'Jessan Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-002',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-002',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '3',
        emp_name: 'Tinku Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-003',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-002',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '4',
        emp_name: 'Moksed Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-004',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-004',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '5',
        emp_name: 'Tori Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-005',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-005',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '6',
        emp_name: 'Mehedy Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-034',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-034',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '7',
        emp_name: 'Saiful Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-036',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-036',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
    {
        id: '8',
        emp_name: 'Sabbir Khan',
        department: 'IT',
        asset_name: 'Laptop',
        asset_code: 'LAP-345',
        asset_category: 'Laptop',
        asset_working: 'Yes',
        asset_manufracturer: 'Apple',
        serial_no: 'LAP-345',
        asset_note: 'Laptop',
        attachment: 'https://img.icons8.com/fluency/48/000000/laptop.png',
        purchased_date: '2020-01-01',
        warrenty_till: '2020-01-01',
    },
];

const Assets = () => {
    const [data, setData] = useState(temp);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userAllData);
    const loader = useSelector(state => state.asset.assetLoader);
    const assetData = useSelector(state => state.asset.assetData);


  useEffect(() => {
    //
    dispatch(getAssets(user.com_id, user.id));
    //
  }, [user]);

  return (
    <ScrollView style={styles.root}>
      {data?.map((d, i) => (
        <View style={styles.container} key={i}>
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <View style={styles.text}>
                <Text style={styles.name}>{d.emp_name}</Text>
                <Text style={styles.fields}>Department: {d.department}</Text>
                <Text style={styles.fields}>Asset Name: {d.asset_name}</Text>
                <Text style={styles.fields}>Asset Code: {d.asset_code}</Text>
                <Text style={styles.fields}>
                  Asset Category: {d.asset_category}
                </Text>
                <Text style={styles.fields}>
                  Asset Working: {d.asset_working}
                </Text>
                <Text style={styles.fields}>
                  Asset Manufracturer: {d.asset_manufracturer}
                </Text>
                <Text style={styles.fields}>Serial No.: {d.serial_no}</Text>
                <Text style={styles.fields}>Asset Note: {d.asset_note}</Text>
              </View>
              <Text style={styles.date}>
                Purchased Date: {d.purchased_date}
              </Text>
              <Text style={styles.date}>Warrenty till: {d.warrenty_till}</Text>
            </View>
          </View>
          <Image source={{uri: d.attachment}} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Assets;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF"
    }
});
