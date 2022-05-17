var axios = require('axios');
var FormData = require('form-data');
import RNFetchBlob from 'rn-fetch-blob';
import {ToastAndroid, Platform} from 'react-native';

//
export const _postApiFetch = async data => {
  try {
    var myHeaders = new Headers();
    // myHeaders.append(
    //   'Cookie',
    //   'XSRF-TOKEN=eyJpdiI6InJxcUVRVkwrQmFIZ2drUGZDQUplaFE9PSIsInZhbHVlIjoidmVHTnFkZmZTbnA1TTRFNlR2ZG1RWktuaVhTdE0xbkFWeVJXZGJ5K1JZbmxCWTNvVytQa1FubGF3d29Qa0UxSE54bEc2ZkFrY1pYZnlrNEhNUXdQVFJLTXFha0FnS1dsZ0M5QlN1WDQrSE16R0Nybm5SeCt3dXFxYU5tY1J1akgiLCJtYWMiOiIzYTkwYmNmYWM5ZWNkODVlOGE4ZTVlMDMwYmIyNzViNWUzMWM2ZDA2ZWJkNzYzYzQxY2ZlNTY5Yjc4NGFkODU0IiwidGFnIjoiIn0%3D; predictionit_session=eyJpdiI6IlkwRFFtR1dzaHcvT0Y0STVLejcwUXc9PSIsInZhbHVlIjoiall0ckd6NmpiZlBwSmNZQ0JCWllLQzBOS3VKTklwR2JGWGpGam95c3RBOGdkZmduTmZ1akNneFhxenI1dUZ3d1EwWVNlU0FFVTd4cVdaMTlVcENqdEFSbXRXRUNDaXR2YnQra3JUMEc1OGlleEtxdEJXRWdJcFM2eDNyZituakQiLCJtYWMiOiI5OTgwNjhhOWNjNmMwYTczMzk3MjY3NzQ2MTFjYjIzZWIxOTc4MDM1YTU2OTg3ZDc2ZmM1NDY4N2E2ZjVhYzdlIiwidGFnIjoiIn0%3D',
    // );

    console.log('data', data);

    var formdata = new FormData();

    data.bodyData.length > 0
      ? data.bodyData.map(e => {
          let idValueCheck = typeof e[1] === 'string' ? e[1] : e[1].toString();
          formdata.append(e[0], e[0] === 'id' ? idValueCheck : e[1]);
        })
      : null;

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    console.log('data', data);

    let response = fetch(data.domainName + data.uri, requestOptions)
      .then(response => response.json())
      .then(result => {
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

const _ImageValueGenerate = (name, val) => {
  console.log('name, val', name, val);

  if (typeof val !== 'string') {
    //console.log('console val', name, val);
    let photo = val;

    let res = {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    };

    return res;
  } else {
    return val;
  }
};

export const _postApiADD = async data => {
  try {
    var formdata = new FormData();
    data.bodyData.length > 0
      ? data.bodyData.map(e =>
          formdata.append(e[0], _ImageValueGenerate(e[0], e[1])),
        )
      : null;
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    };

    let response = fetch(data.domainName + data.uri, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
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

export const _fetchPostImage = async data => {
  let imageName = data.name;
  let dirs = RNFetchBlob.fs.dirs;
  let path =
    Platform.OS === 'ios'
      ? dirs['MainBundleDir'] + imageName
      : dirs.PictureDir + imageName;

  await RNFetchBlob.config({
    fileCache: true,
    appendExt: 'pdf',
    indicator: true,
    IOSBackgroundTask: true,
    path: path,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: path,
      description: 'Image',
    },
  })
    .fetch('GET', data.uri)
    .then(res => {
      ToastAndroid.showWithGravityAndOffset(
        'Downloading...',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    })
    .catch(err => {
      ToastAndroid.showWithGravityAndOffset(
        'Something is wrong! Please try again later.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    });
};

export const _searchData = (documentData, searchText) => {
  // search by any value of the object documentData
  console.log('first', documentData);
  let searchData = documentData.filter(function (item) {
    return Object.keys(item).some(function (key) {
      return String(item[key]).includes(searchText);
    });
  });
  console.log('kkkkkkkkkk', searchData);
  return searchData;
};
