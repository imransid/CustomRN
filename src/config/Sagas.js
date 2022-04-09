import { takeEvery } from 'redux-saga/effects';
import { SIGN_IN, CHECK_IN, CHECK_OUT, GET_ASSETS } from '../constant/Constants';

import { _signIn, _signOut } from './sagaAction/SignIn';
import { _Attendance, _CheckInOutUpdate } from './sagaAction/Attendance';
import { _Assets } from './sagaAction/Assets.saga';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
  yield takeEvery(CHECK_IN, _CheckInOutUpdate);
  yield takeEvery(CHECK_OUT, _CheckInOutUpdate);
  yield takeEvery(GET_ASSETS, _Assets);
};

export default rootSaga;
