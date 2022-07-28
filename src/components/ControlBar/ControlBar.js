import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import TapButton from '../../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';
import {CheckIn, CheckOut} from '../../actions/Attendance';
import useFetchData from '../../components/HOC/withGetData';

const ControlCenter = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userAllData);
  const apiUri = useSelector(state => state.api.domainName);
  const profilePic = useSelector(state => state.user.profilePic);

  const URL_IMG = `${apiUri.slice(0, -10)}/${
    profilePic !== '' ? profilePic : user.profile_photo
  }`;

  const lat = useSelector(state => state.user.Latitude);
  const long = useSelector(state => state.user.Longitude);
  const checkInStatus = useSelector(state => state.user.checkInStatus);
  const checkInLoader = useSelector(state => state.user.checkInLoader);
  // console.log("user datas", firstname)

  let designation = useFetchData(
    [
      ['company_id', user.com_id],
      ['designation_id', user.designation_id],
    ],
    'designation',
    'post',
    apiUri,
  );

  let shiftStatus = useFetchData(
    [
      ['company_id', user.com_id],
      ['office_shift_id', user.office_shift_id],
    ],
    'office-shift',
    'post',
    apiUri,
  );

  let checkStatus = useFetchData(
    [
      ['attendance_com_id', user.com_id],
      ['employee_id', user.id],
    ],
    'attendance-status-for-current-date',
    'post',
    apiUri,
  );

  console.log('user', user, checkStatus);

  const OnPress = useCallback(() => {
    dispatch(checkInStatus ? CheckOut() : CheckIn());
  }, [dispatch, checkInStatus]);

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Image style={styles.avatar} source={{uri: URL_IMG}} />

        <Text style={styles.name}>
          {user.first_name} {user.last_name}{' '}
        </Text>
        <Text style={styles.designation}>
          {designation.length ? designation[0] : ''}
        </Text>
        <Text style={styles.officeShift}>
          Office Shift: 9:00 AM To 6:00 PM{' '}
          {shiftStatus.length ? '(' + shiftStatus[0] + ')' : ''}
        </Text>
        <Text style={styles.Location}>
          Long: {parseFloat(long).toFixed(2) || 0.0}, Lat:{' '}
          {parseFloat(lat).toFixed(2) || 0.0}
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={OnPress}>
          {!checkStatus[1] ? (
            <Text style={styles.designation}>
              Check {checkStatus[0] === 'Absent' ? 'In' : 'Out'}
            </Text>
          ) : (
            <ActivityIndicator size="small" color="#CFCFCF" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
  },
  headerContent: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
