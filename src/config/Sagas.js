import {takeEvery} from 'redux-saga/effects';
import {SIGN_IN, CHECK_IN, CHECK_OUT} from '../constant/Constants';

import {_signIn, _signOut} from './sagaAction/SignIn';
import {_Attendance, _CheckInOutUpdate} from './sagaAction/Attendance';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
  yield takeEvery(CHECK_IN, _CheckInOutUpdate);
  yield takeEvery(CHECK_OUT, _CheckInOutUpdate);
};

export default rootSaga;
