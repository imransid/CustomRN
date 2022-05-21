import React from 'react';
import {View, Image, Button, Platform, ToastAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import {_postApiADD} from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

const ProfilePicture = () => {
  const [photo, setPhoto] = React.useState(null);
  const [documentLoader, setDocumentLoader] = React.useState(false);

  const id = useSelector(state => state.user.userAllData.id);
  const apiUri = useSelector(state => state.api.domainName);
  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const showToastWithGravityAndOffset = msg => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleUploadPhoto = async () => {
    setDocumentLoader(true);
    let objectData = [
      ['id', id.toString()],
      ['profile_photo', photo],
    ];

    let parm = {
      bodyData: objectData,
      uri: 'profile-pic-change',
      domainName: apiUri,
    };

    const result = await _postApiADD(parm);

    let msg = result.status
      ? 'Save Successfully'
      : 'Failed Please Check Again.!';

    showToastWithGravityAndOffset(msg);
    setDocumentLoader(false);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {photo && (
        <>
          {documentLoader ? (
            <CustomIndicator />
          ) : (
            <>
              <Image
                source={{uri: photo.uri}}
                style={{width: 300, height: 300}}
              />
              <Button title="Upload Photo" onPress={handleUploadPhoto} />
            </>
          )}
        </>
      )}
      {!documentLoader && (
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      )}
    </View>
  );
};

export default ProfilePicture;
