import React from 'react'
import {
    StyleSheet,
    View,

} from 'react-native';
import Dashmenu from '../../components/Dashmenu/Dashmenu'
import Controlbar from '../../components/ControlBar/ControlBar'


const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Controlbar />
            <Dashmenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});

export default Dashboard