import React, { useState, useMemo } from 'react';

import { SafeAreaView, ScrollView, Modal, View, Text, TouchableOpacity } from 'react-native';

import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';
import CustomModal from '../../components/CustomModal/CustomModal';
import SearchBox from '../../components/searchBox/SearchBox';


const Immigration = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return <>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <CustomModal
            onPress={() => setModalVisible(false)}
            children
          />

        </Modal>
        <View style={styles.search}>
          <SearchBox />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>

          <TableCard
            sl="1"
            datas={[
              { title: "Document Type", value: "VIP" },
              { title: "Issue Date", value: "21/12/2021" },
              { title: "Expire Date", value: "21/12/2021" },
              { title: "Review Date", value: "21/12/2021" },
              { title: "Country", value: "123, ABC Street, XYZ City" },
              { title: "Document File", value: "Download" },
            ]}
            variant="EmergencyContacts"
          />
        </TouchableOpacity>


      </SafeAreaView>
    </ScrollView>

  </>;
};
export default Immigration;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: "#F2F2F2",
  },
  eventList: {
    marginTop: 20,
  },
  listitem: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  sl: {
    flexDirection: 'column',
  },
  slno: {
    fontSize: 50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth: {
    fontSize: 16,
    color: "#0099FF",
    fontWeight: "600",
  },
  poilcyContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  policyTitle: {
    fontSize: 18,
    color: "#151515",
  },
  addedBy: {
    fontSize: 16,
    color: "#151515",
  },
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
    color: "#151515",
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
  },

});