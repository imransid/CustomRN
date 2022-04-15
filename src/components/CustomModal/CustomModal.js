import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import React, {Children, useEffect, useState} from 'react';

const Generator = () => {
  const ID = Math.floor(Math.random() * Date.now())
    .toString()
    .substring(0, 5);

  return ID;
};

const CustomModal = ({children, onPress, onValue, type, modalName}) => {
  const [value, setValue] = useState(onValue);

  const OnTextChange = (name, val) => {
    let filterItem = value.filter(e => {
      if (e[0] === name) {
        e[1] = val;
      } else if (e[2].includes('ID')) {
        e[1] = Generator();
      }
      return e;
    });

    setValue(filterItem);
  };

  const Onsubmit = () => {
    onPress(value, type);
  };

  const FormControlItem = ({data}) => {
    return (
      <>
        <FormControl.Label>{data[2]}</FormControl.Label>
        <Input
          type="text"
          editable={data[2].includes('ID') ? false : true}
          onChangeText={e => OnTextChange(data[0], e)}
          defaultValue={data[1].toString()}
          style={{backgroundColor: data[2].includes('ID') ? '#c3c3c3' : '#fff'}}
          placeholder={data[1].toString() !== '' ? '' : data[2]}
        />
      </>
    );
  };

  return (
    <View style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={{flex: 1, padding: 20}}>
          <View>
            <Text style={styles.modalTitle}>{modalName}</Text>
          </View>
          <View>
            <Box alignItems="center">
              <Box w="100%" maxWidth="300px">
                <FormControl isRequired>
                  <Stack mx="4">
                    <ScrollView>
                      {value?.map((e, i) => (
                        <FormControlItem key={i} data={e} />
                      ))}
                    </ScrollView>
                  </Stack>
                </FormControl>
              </Box>
            </Box>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => Onsubmit()}>
            <View style={styles.modalButton1}>
              <Text style={styles.modalButtonText}>
                {type === 'add' ? 'Add' : 'Update'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
            <View style={styles.modalButton2}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    height: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 15,
    color: '#151515',
    marginBottom: 10,
  },
  modalButton1: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    // flexDirection:"column-reverse"
  },
  modalButton2: {
    backgroundColor: '#FF0099',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    // flexDirection:"column-reverse"
  },
  modalButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    // padding: 10,
  },
});
