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

    console.log('loader', loader, assetData);

    useEffect(() => {
        dispatch(getAssets(user.com_id, user.id));
    }, [user]);


    // asset_category_name: "regreg"
    // asset_code: "1234567"
    // asset_department_name: "Sales"
    // asset_employee_name: "Tarekul   test Alam(test)"
    // asset_image: "uploads/asset-images/1649065791.png"
    // asset_is_working: "On Maintenance"
    // asset_manufacturer: "tst"
    // asset_name: "test"
    // asset_note: "dfghj"
    // asset_purchase_date: "2022-04-04"
    // asset_serial_number: "123313"
    // asset_warranty_end_date: "2022-04-05"
    // created_at: "2022-04-04T09:49:52.000000Z"
    // id: 11
    // updated_at: "2022-04-04T09:49:52.000000Z"

    return (
        <ScrollView style={styles.root}>
            {assetData?.map(d => (
                <TableCardAttachment
                    key={d.id}
                    datas={[
                        { title: "Department", value: d.asset_department_name },
                        { title: "Asset Name", value: d.asset_name },
                        { title: "Asset Code", value: d.asset_code },
                        { title: "Asset Category", value: d.asset_category_name },
                        { title: "Asset Working", value: d.asset_is_working },
                        { title: "Asset Manufracturer", value: d.asset_manufacturer },
                        { title: "Serial No", value: d.asset_serial_number },
                        { title: "Asset Note", value: d.asset_note },
                    ]}
                    attachment={d.asset_image}
                    headline={d.asset_employee_name}
                    dates={[
                        { title: "Purchased Date", value: d.asset_purchase_date },
                        { title: "Warrenty Till", value: d.asset_warranty_end_date },
                    ]}
                />
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
