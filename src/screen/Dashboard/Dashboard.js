import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Dashmenu from '../../components/Dashmenu/Dashmenu';
import Controlbar from '../../components/ControlBar/ControlBar';
import Orientation from 'react-native-orientation';

const Dashboard = () => {
  //   useEffect(() => {
  //     Orientation.lockToPortrait();
  //   }, []);

  return (
    <View style={styles.container}>
      <Controlbar />
      <Dashmenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Dashboard;
