import {takeEvery} from 'redux-saga/effects';
import {SIGN_IN, CHECK_IN} from '../constant/Constants';

import {_signIn, _signOut} from './sagaAction/SignIn';
import {_Attendance} from './sagaAction/Attendance';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
  yield takeEvery(CHECK_IN, _Attendance);
};

export default rootSaga;
