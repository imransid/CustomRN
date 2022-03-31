import {takeEvery} from 'redux-saga/effects';
import {SIGN_IN} from '../constant/Constants';

import {_signIn, _signOut} from './sagaAction/SignIn';

const rootSaga = function* () {
  yield takeEvery(SIGN_IN, _signIn);
};

export default rootSaga;
