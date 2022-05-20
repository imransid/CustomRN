import React from 'react';
import {View, Image, Button, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import {_postApiADD} from '../../services/Services';

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

  const handleUploadPhoto = async () => {
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
      ? type === 'edit'
        ? 'Update Successfully'
        : 'Save Successfully'
      : 'Failed Please Check Again.!';

    console.log('msg', msg);
  };

  // const handleUploadPhoto = () => {
  //   fetch(`${apiUri}/api/user/profile-pic-change`, {
  //     method: 'POST',
  //     body: createFormData(photo, { id: id }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response', response);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {photo && (
        <>
          <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default ProfilePicture;
