// https://hrmspvm.predictionla.com/api/user/daily-attendance
import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGH_IN_ERROR,
  SIGH_IN_SUCCESSFULLY,
  CHECK_IN_SUCCESSFULLY,
} from '../../constant/Constants';
import NetInfo from '@react-native-community/netinfo';

export const _Attendance = function* (action) {
  try {
    const State = yield select();

    const uri = 'https://hrmspvm.predictionla.com/api/user/daily-attendance'; //State.api + '/authentication';

    let data = {
      employee_id: State.user.userAllData.id, //action.data.username,
      uri: uri,
    };

    const apiStatus = yield call(_ApiCall, data);

    if (apiStatus.status) {
      //   yield put({
      //     type: SIGH_IN_SUCCESSFULLY,
      //     payload: {
      //       username: authStatus.username,
      //       token: authStatus.token,
      //       expireTime: authStatus.expireTime,
      //       userAllData: authStatus.userAllData,
      //     },
      //   });
    } else {
      //   yield put({
      //     type: SIGH_IN_ERROR,
      //     payload: {
      //       msg: authStatus.msg,
      //     },
      //   });
    }
  } catch (err) {
    console.log('Error in  _signIn ', err);
  }
};

export const _CheckIN = function* () {
  try {
    const State = yield select();

    const uri = 'https://hrmspvm.predictionla.com/api/user/attendance-check-in';

    const NetStatus = yield NetInfo.fetch().then(state => state.isConnected);

    let IP;
    NetStatus ? (IP = yield call(_GetIp)) : (IP = '000.000.000.000');

    let data = {
      com_id: State.user.userAllData.com_id.toString(), //action.data.username,
      employee_id: State.user.userAllData.id.toString(),
      lat: State.user.Latitude,
      longt: State.user.Longitude, //action.data.username,
      office_shift_id: State.user.userAllData.office_shift_id.toString(),
      user_over_time_type: State.user.userAllData.user_over_time_type,
      over_time_payable: State.user.userAllData.over_time_payable,
      user_over_time_rate:
        State.user.userAllData.user_over_time_rate.toString(),
      ip_address: IP,
      uri: uri,
    };

    const checkInStatus = yield call(_ApiCall, data);

    if (checkInStatus) {
      yield put({
        type: CHECK_IN_SUCCESSFULLY,
      });
    } else {
      yield put({
        type: CHECK_IN_ERROR,
      });
    }
  } catch (err) {
    console.log('Error in _CheckIN', err);
  }
};

const _ApiCall = function* (action) {
  try {
    var formdata = new FormData();
    formdata.append('com_id', action.com_id);
    formdata.append('employee_id', action.employee_id);
    formdata.append('lat', action.lat);
    formdata.append('longt', action.longt);
    formdata.append('office_shift_id', action.office_shift_id);
    formdata.append('user_over_time_type', action.user_over_time_type);
    formdata.append('over_time_payable', action.over_time_payable);
    formdata.append('user_over_time_rate', action.user_over_time_rate);
    formdata.append('ip_address', action.ip_address);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    return yield fetch(action.uri, requestOptions)
      .then(response => response.text())
      .then(result => true)
      .catch(error => false);
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};

const _GetIp = function* (action) {
  try {
    return yield axios
      .get('https://api.ipify.org?format=jsonp?callback=?')
      .then(function (res) {
        return res.data;
      })
      .catch(() => '');
  } catch (err) {
    console.log('Error in _GetIp ', err);
  }
};
