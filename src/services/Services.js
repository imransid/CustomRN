var axios = require('axios');
var FormData = require('form-data');

//
export const _postApiFetch = async data => {
  try {
    var formdata = new FormData();
    data.bodyData.length > 0
      ? data.bodyData.map(e => formdata.append(e[0], e[1]))
      : null;
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    let response = fetch(
      'https://hrmspvm.predictionla.com/api/user/' + data.uri,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('result', result);
        let res = {
          status: true,
          data: result.data,
          msg: result.message,
        };
        return res;
      })
      .catch(error => {
        console.log('error', error);
        let res = {
          status: false,
          data: [],
          msg: 'post error',
        };
        return res;
      });

    return response;
  } catch (err) {
    console.log('Error in _postApiFetch ', err);
  }
};

export const _postApiADD = async data => {
  try {
    var formdata = new FormData();
    data.bodyData.length > 0
      ? data.bodyData.map(e => formdata.append(e[0], e[1]))
      : null;
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    let response = fetch(
      'https://hrmspvm.predictionla.com/api/user/' + data.uri,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('result add', result);
        let res = {
          status: true,
          data: result.data,
          msg: result.message,
        };
        return res;
      })
      .catch(error => {
        console.log('error', error);
        let res = {
          status: false,
          data: [],
          msg: 'post error',
        };
        return res;
      });

    return response;
  } catch (err) {
    console.log('Error in _postApiFetch ', err);
  }
};
