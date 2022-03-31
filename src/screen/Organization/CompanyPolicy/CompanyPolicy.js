import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'native-base';
import SearchBox from '../../../components/searchBox/SearchBox';
import TableCard from '../../../components/TableCard/TableCard';

const CompanyPolicy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <SearchBox />
            </View>
            <TouchableOpacity onPress={() => alert("Hello")}>
                <TableCard
                    sl='1'
                    title='New Announcement'
                    description='This is description...'
                    date='12/12/2020'
                    // department='IT'
                    addedBy='John Doe'
                    variant='Policy'
                />
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

export default CompanyPolicy;
