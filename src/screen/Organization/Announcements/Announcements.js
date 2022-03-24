import * as React from 'react';
import DataTable from '../../../components/dataTable/DataTable';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'native-base';
import SearchBox from '../../../components/searchBox/SearchBox';

const Announcements = () => {
    const tableHead = {
        tableHead: [
            'Sl',
            'Department Name',
            'Title',
            'Description',
            'Announced By',
        ],
        widthArr: [50, 140, 80, 100, 120, 140],
    };

    const data = [];

    for (let i = 0; i < 30; i += 1) {
        const dataRow = [];
        for (let j = 0; j < 6; j += 1) {
            dataRow.push(`${i}${j}`);
        }
        data.push(dataRow);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <SearchBox />
            </View>
            <TouchableOpacity onPress={() => alert("Hello")}>
                <View style={styles.listitem}>
                    <View style={styles.sl}>
                        <Text style={styles.slno}>1</Text>
                    </View>
                    <View style={styles.poilcyContent}>
                        <Text style={styles.policyTitle}>Department: IT</Text>
                        <Text style={styles.policyTitle}>Title: New Announcement</Text>
                        <Text style={styles.addedBy}>Announced by: John Doe</Text>
                        <Text style={styles.description}>This is description...</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
    container: {
        backgroundColor: "#F2F2F2",
    },
    eventList: {
        marginTop: 20,
    },
    listitem: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    sl: {
        flexDirection: 'column',
    },
    slno: {
        fontSize: 50,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventMonth: {
        fontSize: 16,
        color: "#0099FF",
        fontWeight: "600",
    },
    poilcyContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    policyTitle: {
        fontSize: 18,
        color: "#151515",
    },
    addedBy: {
        fontSize: 16,
        color: "#151515",
    },
});

export default Announcements;
