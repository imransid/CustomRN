import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import Dashmenu from '../../components/Dashmenu/Dashmenu';
import Controlbar from '../../components/ControlBar/ControlBar';
// import Orientation from 'react-native-orientation'; ///need to remove this pac
import Geolocation from '@react-native-community/geolocation';

import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../actions/Attendance';

import Loader from '../../components/Loader';

import { getApiFetch, _postApiFetch } from '../../services/Services';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  const loader = false; //useSelector(state => state.user.checkInLoader);
  console.log(global.HermesInternal !== null);
  // jessan api call
  useEffect(() => {
    (async () => {
      let parmZ = {
        uri: 'immigration',
        id: '6',
      };

      const fetchDataGet = await getApiFetch(parmZ);

      console.log('fetchDataGet', fetchDataGet);

      // post parm
      let bodyData = [
        ['id', '6'],
        ['immigrant_document_type', 'VIP'],
        ['immigrant_document_number', '4444'],
        ['immigrant_issue_date', '4444'],
        ['immigrant_expired_date', '4444'],
        ['immigrant_document_file', '800px_COLOURBOX27028397.jpg'],
        ['immigrant_eligible_review_date', '4444'],
        ['immigrant_country', 'DSDSDS'],
      ];

      let parm = {
        bodyData: bodyData,
        uri: 'immigration-update',
      };

      const fetchData = await getApiFetch(parm);
    })();

    return () => { };
  }, []);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        dispatch(setLocation(currentLongitude, currentLatitude));

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={styles.container}>
      <Controlbar />
      <Dashmenu />
      <Loader loading={loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Dashboard;
