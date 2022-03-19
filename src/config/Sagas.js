import {takeEvery} from 'redux-saga/effects';
import {SIGN_IN} from '../constant/Constants';

import {_signIn} from './sagaAction/SignIn';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
  //yield takeEvery(GET_SECURITY_CHECK, GetSecurityCheck);
};

export default rootSaga;
