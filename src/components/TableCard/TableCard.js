import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'

const TableCard = ({ sl, title, description, date, department, addedBy, variant }) => {

    return (

        <View style={styles.listitem}>
            <View style={styles.sl}>
                <Text style={styles.slno}>{sl}</Text>
            </View>
            <View style={styles.poilcyContent}>
                {department && <Text style={styles.policyTitle}>Department: {department}</Text>}
                <Text style={styles.policyTitle}>Title: {title}</Text>
                {addedBy && <Text style={styles.addedBy}>{variant} by: {addedBy}</Text>}
                <Text style={styles.addedBy}>Date: {date}</Text>

                <Text style={styles.description}>{description}</Text>
            </View>
        </View>

    )
}

export default TableCard

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
