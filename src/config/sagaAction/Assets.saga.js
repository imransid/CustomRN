
import { call, put, select } from 'redux-saga/effects';

export const _Assets = function* (action) {

    console.log('saga data', action)

    try {


        const uri = 'https://hrmspvm.predictionla.com/api/user/asset';

        let data = {
            asset_com_id: action.asset_com_id,
            asset_employee_id: asset_employee_id,
            uri: uri,
        };

        const apiStatus = yield call(_ApiCall, data);

        // if (apiStatus.status) {
        //     //   yield put({
        //     //     type: SIGH_IN_SUCCESSFULLY,
        //     //     payload: {
        //     //       username: authStatus.username,
        //     //       token: authStatus.token,
        //     //       expireTime: authStatus.expireTime,
        //     //       userAllData: authStatus.userAllData,
        //     //     },
        //     //   });
        // } else {
        //     //   yield put({
        //     //     type: SIGH_IN_ERROR,
        //     //     payload: {
        //     //       msg: authStatus.msg,
        //     //     },
        //     //   });
        // }
    } catch (err) {
        console.log('Error Getting Data ', err);
    }
}



const _ApiCall = function* (action) {



    try {
        var formdata = new FormData();
        formdata.append('asset_com_id', action.asset_com_id);
        formdata.append('asset_employee_id', action.asset_employee_id);

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

