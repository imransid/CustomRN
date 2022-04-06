import React, {useState, useMemo} from 'react';
import {FormControl, Input, Stack, Box, WarningOutlineIcon} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TapButton from '../../components/tapButton/TapButton';
import {useDispatch, useSelector} from 'react-redux';
import {LogIn} from '../../actions/SignIn';
import {SafeAreaView, ScrollView} from 'react-native';
import {Card, Headline} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
const BasicInfo = () => {
  const dispatch = useDispatch();

  // global asset
  const loader = useSelector(state => state.user.loader);
  const errorMsg = useSelector(state => state.user.errorMsg);

  const [userName, setUserName] = useState('');
  const [userInvalid, setUserInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  const [markedDates, setMarkedDates] = useState({
    '2022-04-05': {
      // disabled: true,
      startingDay: true,
      color: 'orange',
      endingDay: true,
    },
  });

  const handleDayPress = day => {
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        endingDay: true,
        color: 'orange',
      },
    });
  };

  const errorMsgUser = useMemo(() => {
    return 'Required. ';
  }, [userInvalid]);

  // button pressed
  const OnPress = () => {
    if (userName !== '' && password !== '') {
      let data = {
        userName: userName,
        password: password,
      };

      dispatch(LogIn(data));
      setAppLoaded(true);
    } else {
      if (userName === '' && password === '') {
        setUserInvalid(true);
        setPasswordInvalid(true);
      } else if (userName === '') {
        setUserInvalid(true);
      } else {
        setPasswordInvalid(true);
      }
    }
  };

  const RenderBox = ({label}) => {
    return (
      <Box>
        <FormControl mb="5" isInvalid={userInvalid}>
          <FormControl.Label>{label}</FormControl.Label>
          <Input
            placeholder={label.slice(0, -1)}
            onChange={e => setUserName(e)}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMsgUser}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
    );
  };

  const RenderDate = ({label}) => {
    return (
      <Calendar
        markedDates={markedDates}
        markingType={'period'}
        onDayPress={handleDayPress}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginBottom: 10}}>
        <KeyboardAwareScrollView
          style={{
            width: '100%',
          }}>
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: '100%',
              md: '25%',
            }}>
            <Box>
              <Headline>Details of User</Headline>
            </Box>

            <Card style={{padding: 5}}>
              <RenderBox label={'First Name *'} />
              <RenderBox label={'Last Name *'} />
              <RenderBox label={'Email *'} />
              <RenderBox label={'Address *'} />
              <RenderBox label={'Gender *'} />
              <RenderBox label={'Phone *'} />
              <RenderDate label={'DOB *'} />
            </Card>

            <Box>
              <TapButton
                text={'Submit'}
                _singleTap={() => OnPress()}
                _doubleTap={() => OnPress()}
                _longTap={() => OnPress()}
                spinner={loader}
              />
            </Box>
          </Stack>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInfo;
