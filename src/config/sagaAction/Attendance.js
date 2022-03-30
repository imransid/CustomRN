// https://hrmspvm.predictionla.com/api/user/daily-attendance
import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {SIGH_IN_ERROR, SIGH_IN_SUCCESSFULLY} from '../../constant/Constants';

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

const _ApiCall = function* (action) {
  try {
    const uri = action.uri;

    return yield axios
      .post(uri, {
        employee_id: action.employee_id,
      })
      .then(function (response) {
        console.log('response', response);
        // let res = {
        //   status: true,
        //   token: response.data.access_token,
        //   username: response.data.user.first_name,
        //   expireTime: response.data.expires_in,
        //   userAllData: response.data.user,
        // };

        // return res;
      })
      .catch(function (error) {
        console.log('error', error);
        // let res = {
        //   status: false,
        //   msg: error.msg,
        //   token: '',
        //   username: '',
        //   expireTime: '',
        //   userAllData: {},
        // };

        return res;
      });
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};
