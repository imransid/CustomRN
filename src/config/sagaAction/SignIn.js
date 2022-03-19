import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {SIGH_IN_ERROR, SIGH_IN_SUCCESSFULLY} from '../../constant/Constants';
const _authApiCall = function* (action) {
  try {
    const uri = action.uri;

    return yield axios
      .post(uri, {
        username: action.username,
        password: action.password,
        strategy: action.strategy,
      })
      .then(function (response) {
        let res = {
          status: true,
          token: response.data.accessToken,
          username: action.username,
          expireTime: response.data.authentication.payload.exp,
          userAllData: response.data.user,
        };

        return res;
      })
      .catch(function (error) {
        let res = {
          status: false,
          msg: error.msg,
          token: '',
          username: '',
          expireTime: '',
          userAllData: {},
        };

        return res;
      });
  } catch (err) {
    console.log('Error in  _authApiCall ', err);
  }
};

// for login
export const _signIn = function* (action) {
  try {
    const State = yield select();

    console.log('State', State);

    const uri = State.api + '/authentication';

    let data = {
      username: action.data.username,
      password: action.data.password,
      uri: uri,
    };

    const authStatus = yield call(_authApiCall, data);

    if (authStatus.status) {
      yield put({
        type: SIGH_IN_SUCCESSFULLY,
        payload: {
          username: authStatus.username,
          token: authStatus.token,
          scode: State.user.scode,
          userAllData: authStatus.userAllData,
        },
      });
    } else {
      yield put({
        type: SIGH_IN_ERROR,
        payload: {
          msg: authStatus.msg,
        },
      });
    }
  } catch (err) {
    console.log('Error in  _signIn ', err);
  }
};
