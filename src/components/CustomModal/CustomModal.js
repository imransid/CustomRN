import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Box, FormControl, Input, Stack} from 'native-base';
import React, {useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';

import DropDownPicker from 'react-native-dropdown-picker';
var ImagePicker = require('react-native-image-picker');

const CustomModal = ({children, onPress, onValue, type, modalName}) => {
  const [value, setValue] = useState(onValue);
  const [singleFile, setSingleFile] = useState(null);

  const [open, setOpen] = useState(false);
  const [pickerValue, setPickerValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Other', value: 'Other'},
    {label: 'Certificate', value: 'Certificate'},
  ]);

  const OnTextChange = (name, val) => {
    let filterItem = value.filter(e => {
      if (e[0] === name) {
        e[1] = val;
      }
      return e;
    });

    setValue(filterItem);
  };

  const Onsubmit = () => {
    onPress(value, type);
  };

  const SelectFile = async () => {
    // Opening Document Picker to select one file
    try {
      // const res = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.allFiles],
      // });

      const options = {
        noData: true,
      };

      const res = await ImagePicker.launchImageLibrary(
        options,
        response => response,
      );

      setSingleFile(res.assets[0]);

      let filterItem = value.filter(e => {
        if (e[2].includes('FILE')) {
          e[1] = res.assets[0];
        }
        return e;
      });

      setValue(filterItem);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  // update picker
  useEffect(() => {
    if (pickerValue) {
      let filterItem = value.filter(e => {
        if (e[2].includes('TYPE')) {
          e[1] = pickerValue;
        }
        return e;
      });

      setValue(filterItem);
    }
  }, [pickerValue]);

  const FormControlItem = ({data}) => {
    return (
      <>
        <FormControl.Label>{data[2]}</FormControl.Label>

        {data[2].includes('FILE') ? (
          singleFile != null ? (
            <Text style={styles.textStyle}>
              File Name: {singleFile.fileName ? singleFile.fileName : ''}
            </Text>
          ) : (
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={SelectFile}>
              <Text style={styles.buttonTextStyle}>Select File</Text>
            </TouchableOpacity>
          )
        ) : // check Document && Type
        data[2].includes('TYPE') ? (
          <DropDownPicker
            open={open}
            value={pickerValue}
            items={items}
            setOpen={setOpen}
            setValue={setPickerValue}
            setItems={setItems}
            theme="LIGHT"
            multiple={false}
            mode="BADGE"
          />
        ) : (
          <Input
            type="text"
            editable={data[2].includes('ID') ? false : true}
            onChangeText={e => OnTextChange(data[0], e)}
            defaultValue={data[1].toString()}
            variant={data[2].includes('ID') ? 'filled' : 'outline'}
            placeholder={data[1].toString() !== '' ? '' : data[2]}
          />
        )}
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
                    <ScrollView
                      style={{
                        height: 390,
                      }}>
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
  buttonStyle: {
    backgroundColor: '#c3c3c3',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft: 35,
    // marginRight: 35,
    // marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
