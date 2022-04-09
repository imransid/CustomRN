import React, {useCallback} from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'native-base';
import SearchBox from '../../components/searchBox/SearchBox';
import {Subheading} from 'react-native-paper';
import RnPdf from '../../components/GenaratePdf';

const SocialProfile = () => {
  const tableHead = {
    tableHead: [
      'Sl',
      'Facebook Profile',
      'linkedin Profile',
      'Skype Profile',
      'TWitter Profile',
      'WhatsApp Profile ',
      'Action',
    ],
    widthArr: [50, 240, 220, 200, 200, 200, 80],
  };

  const data = [];

  for (let i = 0; i < 30; i += 1) {
    const dataRow = [];
    for (let j = 0; j < 7; j += 1) {
      dataRow.push(`${i}${j}`);
    }
    data.push(dataRow);
  }

  const OnPress = useCallback(() => {
    // dispatch(checkInStatus ? CheckOut() : CheckIn());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBox />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '50%', justifyContent: 'center', height: 60}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={OnPress}>
              {/* {!checkInLoader ? ( */}
              <Subheading style={styles.designation}>
                Add Social Profile
              </Subheading>
              {/* ) : (
                 <ActivityIndicator size="small" color="#CFCFCF" />
               )} */}
            </TouchableOpacity>
          </View>
          <View style={styles.pdfBox}>
            <RnPdf
              Filename={'SocialProfile'}
              headerItem={tableHead.tableHead}
              bodyItem={data}
            />
          </View>
        </View>
      </View>
      <DataTable tableHead={tableHead} data={data} headerColour={'#00695c'} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  pdfBox: {
    paddingTop: 10,
    width: '50%',
    alignItems: 'flex-end',
  },
  designation: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: '#33b5e5',
  },
});

export default SocialProfile;
