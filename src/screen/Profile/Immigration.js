import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Modal, View } from 'react-native';

import TableCard from '../../components/TableCard/TableCard';
import { ScaledSheet } from 'react-native-size-matters';
import ImmigrationModal from '../../components/CustomModal/ImmigrationModal';
import SearchBox from '../../components/searchBox/SearchBox';
import { _postApiFetch } from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';
import PlusButton from '../../components/plusButton';
import { useSelector } from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';
import CustomModal from '../../components/CustomModal/CustomModal';
import DeleteModal from '../../components/CustomModal/DeleteModal';

const Immigration = () => {
  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)



  const id = useSelector(state => state.user.userAllData.id);

  let data = useFetchData(
    [['immigrant_employee_id', id]],
    'immigration',
    'post',
  );

  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);

  useEffect(() => {
    try {
      data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
      data[0].length !== documentData.length ? setDocumentData(data[0]) : null;
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, documentLoader, documentData]);

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={addModal}
            onRequestClose={() => {
              setAddModal(false);
            }}>
            <CustomModal onPress={() => setAddModal(false)} />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editModal}
            onRequestClose={() => {
              setEditModal(false);
            }}>
            <CustomModal onPress={() => setEditModal(false)} />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={deleteModal}
            onRequestClose={() => {
              setDeleteModal(false);
            }}>
            <DeleteModal onCancel={() => setDeleteModal(false)} onDelete={() => setDeleteModal(false)} />
          </Modal>

          <View style={styles.search}>
            <SearchBox />
          </View>
          {documentLoader && <CustomIndicator />}

          {!documentLoader &&
            documentData?.map((data, i) => (
              <TableCard
                key={i}
                sl={i + 1}
                datas={[
                  { title: 'Document Type', value: data.immigrant_document_type },

                  { title: 'Issue Date', value: data.immigrant_issue_date },
                  {
                    title: 'Review Date',
                    value: data.immigrant_eligible_review_date,
                  },
                  { title: 'Expired Dtae', value: data.immigrant_expired_date },

                  { title: 'Document File', value: data.immigrant_document_file },
                  { title: 'Country', value: data.immigrant_country },
                ]}
                variant="Immigration"
                onEdit={() => setEditModal(true)}
                onDelete={() => setDeleteModal(true)}
                buttonVisible={true}
              />
            ))}

        </SafeAreaView>
      </ScrollView>
      {/* <PlusButton OnPress={() => setModalVisible(true)} /> */}
    </>
  );
};
export default Immigration;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#F2F2F2',
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
    color: '#0099FF',
    fontWeight: '600',
  },
  eventMonth: {
    fontSize: 16,
    color: '#0099FF',
    fontWeight: '600',
  },
  poilcyContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  policyTitle: {
    fontSize: 18,
    color: '#151515',
  },
  addedBy: {
    fontSize: 16,
    color: '#151515',
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
    color: '#151515',
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
    color: '#FFFFFF',
    fontWeight: '600',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  activityIndicator: { alignSelf: 'center', paddingVertical: '50%' },
  addbutton: {
    backgroundColor: '#0099FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});
