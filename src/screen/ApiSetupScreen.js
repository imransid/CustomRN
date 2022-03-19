import React, {useEffect, useState, useCallback} from 'react';
import {Dimensions, StyleSheet, StatusBar, Image, Text} from 'react-native';
// import { connect } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
// import {
//   Container,
//   Content,
//   Form,
//   Item,
//   Input,
//   Button,
//   Text,
//   Spinner,
// } from 'native-base';
// import {scaleModerate, scaleVertical} from '../../utils/scale';
// import { ApiSetupValidation } from "../actions";

import {AppStartUp} from '../../actions/new/ApiSetupAction';

const ApiSetupScreen = () => {
  // const dispatch = useDispatch();
  // // global redux state
  // const spinner = false; //useSelector(state => state.spinner.loading);

  // // local state
  // const [inputValue, setInputValue] = useState('https://');
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (spinner !== loading) {
  //     setLoading(spinner);
  //   }
  // }, [spinner, loading]);

  // const onSubmitClick = useCallback(() => {
  //   dispatch(AppStartUp(inputValue));
  // }, [inputValue]);

  // const RenderImage = () => {
  //   const screenSize = Dimensions.get('window');
  //   const imageSize = {
  //     width: screenSize.width,
  //     height: screenSize.height - scaleModerate(325, 1),
  //   };
  //   return (
  //     <Image
  //       style={[styles.image, imageSize]}
  //       source={require('../../assets/images/loginBg.png')}
  //     />
  //   );
  // };

  // const RenderButton = () => {
  //   if (loading) {
  //     return <Spinner color={styleVariables.brandPrimary} />;
  //   }
  //   return (
  //     <Button
  //       onPress={onSubmitClick}
  //       style={{
  //         marginLeft: 10,
  //         marginRight: 10,
  //         marginBottom: 10,
  //         backgroundColor: styleVariables.buttonBackground,
  //       }}
  //       full
  //       rounded
  //       primary>
  //       <Text>Save</Text>
  //     </Button>
  //   );
  // };

  // return (
  //   <Container>
  //     <Content>
  //       <StatusBar
  //         backgroundColor={styleVariables.fixedStartupColor}
  //         barStyle="light-content"
  //       />
  //       <RenderImage />
  //       <Content
  //         style={{
  //           marginLeft: 15,
  //           marginRight: 15,
  //           marginBottom: 35,
  //           textAlign: 'center',
  //         }}>
  //         <Text style={{textAlign: 'center', fontSize: 14}}>
  //           It looks like it is a first launch of application on this device.
  //           Please provide Webservice base URL.
  //         </Text>
  //       </Content>
  //       <Form>
  //         <Item
  //           rounded
  //           last
  //           style={{marginLeft: 15, marginRight: 15, marginBottom: 15}}>
  //           <Input
  //             value={inputValue}
  //             onChangeText={e => setInputValue(e)}
  //             autoCorrect={false}
  //             caretHidden={false}
  //             contextMenuHidden={true}
  //             placeholder="Webservice URL"
  //           />
  //         </Item>
  //         <RenderButton />
  //       </Form>
  //     </Content>
  //   </Container>
  // );

  return <Text>ok done</Text>;
};

export default ApiSetupScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    //marginBottom: scaleVertical(10),
  },
  buttonStyle: {
    height: 50,
    width: 400,
  },
});
