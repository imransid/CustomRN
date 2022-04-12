import React, { useState, useEffect } from 'react';

import { SafeAreaView, ScrollView, Modal, View, Text, TouchableOpacity } from 'react-native';

import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';
import CustomModal from '../../components/CustomModal/CustomModal';
import SearchBox from '../../components/searchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { getImmigrations } from '../../actions/Immigration.action'


const Immigration = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  const immigrationData = useSelector(state => state.immigration.immigrationData)
  const immigrationLoader = useSelector(state => state.immigration.immigrationLoader)

  const id = useSelector(state => state.user.userAllData.id)


  useEffect(() => {
    dispatch(getImmigrations(id))
  }, [id])



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


        {!immigrationLoader && immigrationData?.map(data => (<TableCard
          sl="1"
          datas={[
            { title: "Company ID", value: data.immigrant_com_id },
            { title: "Immigrant Country", value: data.immigrant_country },
            { title: "Employee ID", value: data.immigrant_employee_id },
            { title: "Issue Date", value: data.immigrant_issue_date },
            { title: "Eligible Review Date", value: data.immigrant_eligible_review_date },
            { title: "Expired Dtae", value: data.immigrant_expired_date },
            { title: "Document Type", value: data.immigrant_document_type },
            { title: "Document File", value: data.immigrant_document_file },

          ]}
          variant="Immigration"
        />))}
        { /* ))} */}
        {/* </TouchableOpacity> */}


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