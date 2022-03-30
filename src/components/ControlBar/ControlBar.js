import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import TapButton from '../../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';
import {CheckIn} from '../../actions/Attendance';

const ControlCenter = () => {
  const dispatch = useDispatch();

  const OnPress = useCallback(() => {
    dispatch(CheckIn());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}
          />

          <Text style={styles.name}>Tony Stark</Text>
          <Text style={styles.designation}>Owner</Text>
          <Text style={styles.officeShift}>
            Office Shift: 9:00 AM To 6:00 PM(Night Shift)
          </Text>
          <Text style={styles.Location}>Long: 90.82, Lat: 20.98</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={OnPress}>
            <Text style={styles.designation}>Check In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  designation: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  officeShift: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  Location: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: '#E15FED',
  },
});

export default ControlCenter;
