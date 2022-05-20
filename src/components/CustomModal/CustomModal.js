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
var ImagePicker = require('react-native-image-picker');
import DropDown from '../DorpDown';
import Calendars from '../Calender/Calender';
import InputBox from '../InputBox';

const CustomModal = ({
  children,
  onPress,
  onValue,
  type,
  modalName,
  dropDownValue,
}) => {
  const [value, setValue] = useState(onValue);
  const [singleFile, setSingleFile] = useState(null);

  const [pickerValue, setPickerValue] = useState({});

  const [pickerStatus, setPickerStatus] = useState(true);

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
          e[1] = pickerValue.TYPE;
        } else if (e[2].includes('PRIORITY')) {
          e[1] = pickerValue.PRIORITY;
        } else if (e[2].includes('STATUS')) {
          e[1] = pickerValue.STATUS;
        }
        return e;
      });

      setValue(filterItem);
    }
  }, [pickerValue, pickerStatus]);

  const getDropDownRender = data => {
    let result = [];
    if (data[2].includes('TYPE')) {
      result[0] = true;
      result[1] = dropDownValue;
    } else if (data[2].includes('PRIORITY')) {
      result[0] = true;
      result[1] = dropDownValue.priority;
    } else if (data[2].includes('STATUS')) {
      result[0] = true;
      result[1] = dropDownValue.status;
    } else {
      result[0] = false;
      result[1] = [];
    }
    return result;
  };

  const getDropDownValue = data => {
    let value = '';

    if (data[2].includes('TYPE')) {
      value = pickerValue.TYPE;
    } else if (data[2].includes('PRIORITY')) {
      value = pickerValue.PRIORITY;
    } else if (data[2].includes('STATUS')) {
      value = pickerValue.STATUS;
    }
    return value;
  };

  const setDropDownValue = (data, info) => {
    let result = pickerValue;
    if (data[2].includes('TYPE')) {
      result.TYPE = info;

      setPickerValue(result);
    } else if (data[2].includes('PRIORITY')) {
      result.PRIORITY = info;
      setPickerValue(result);
    } else if (data[2].includes('STATUS')) {
      result.STATUS = info;
      setPickerValue(result);
    }

    setPickerStatus(!pickerStatus);
  };

  const _updateDateValue = (key, val) => {
    let filterItem = value.filter(e => {
      if (e[0] === key) {
        e[1] = val;
      }
      return e;
    });

    setValue(filterItem);
  };

  const _getDateShowStatus = name => {
    // let filterItem = value.filter(e => (e[0] === name ? e : null));

    // return filterItem[0][1];

    return name.includes('DATE');
  };

  const _getInputValue = name => {
    let filterItem = value.filter(e => (e[0] === name ? e : null));

    return filterItem[0][1];
  };

  const FormControlItem = ({data}) => {
    const checkAttachment = data => {
      return data.includes('ATTACHMENTS') ||
        (data.includes('FILE') && !data.includes('PROFILE'))
        ? true
        : false;
    };

    data[1] === null ? (data[1] = '') : null;

    return (
      <>
        <FormControl.Label>{data[2]}</FormControl.Label>

        {checkAttachment(data[2]) ? (
          singleFile != null ? (
            <Text style={styles.textStyle}>
              File Name: {singleFile.fileName ? singleFile.fileName : ''}
            </Text>
          ) : (
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={SelectFile}>
              <Text style={styles.buttonTextStyle}>
                {data[1].toString() ? 'Upload File' : 'Select File'}
              </Text>
            </TouchableOpacity>
          )
        ) : // check Document && Type
        getDropDownRender(data)[0] ? (
          <DropDown
            data={getDropDownRender(data)[1]}
            selectValue={val => setDropDownValue(data, val)}
            pickerValue={getDropDownValue(data)}
          />
        ) : // check DATE

        _getDateShowStatus(data[2]) ? (
          <Calendars
            valueDate={data[1]}
            keyDate={data[0]}
            updateDateValue={(key, val) => _updateDateValue(key, val)}
          />
        ) : (
          <InputBox
            data={data}
            val={_getInputValue(data[0])}
            OnFocus={(name, val) => OnTextChange(name, val)}
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
