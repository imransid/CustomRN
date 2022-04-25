import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
// import Typography from '../components/Typography';
import {Paragraph} from 'react-native-paper';
import {_postApiFetch} from '../../services/Services';
import useFetchData from '../../components/HOC/withGetData';
import {useSelector} from 'react-redux';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const apiUri = useSelector(state => state.api.domainName);

  const [items, setItems] = useState({});
  const [appLoadItems, setAppLoadItems] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2022-04-05');
  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  let data = useFetchData(
    [
      ['company_calendar_employee_id', id],
      ['company_calendar_com_id', com_id],
    ],
    'calendar',
    'post',
    apiUri,
  );

  useEffect(() => {
    try {
      data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;

      if (documentData.length !== data[0].length) {
        let value = {};

        let dataDat = '';

        data[0]?.map(e => {
          if (value[e.start] !== undefined) {
            value[e.start].push({
              name: e.title,
            });
          } else {
            value[e.start] = [
              {
                name: e.title,
              },
            ];
          }
          dataDat = e.start;
        });

        setAppLoadItems(value);
        setSelectedDate(dataDat);

        setDocumentData(data[0]);
      }
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
  }, [data, documentLoader, documentData]);

  // const loadItems = day => {
  //   setTimeout(() => {
  //     console.log('data', data);
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach(key => {
  //       newItems[key] = items[key];
  //     });

  //     console.log(newItems);
  //     setItems(newItems);
  //   }, 1000);
  // };

  const loadItems = day => {
    let itemData = {
      '2017-05-22': [{name: 'item 1 - any js object'}],
      '2017-05-23': [{name: 'item 2 - any js object', height: 80}],
      '2017-05-24': [],
      '2017-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}],
    };

    if (appLoadItems !== null) {
      console.log('value C', itemData, appLoadItems);

      setItems(appLoadItems);
    }
  };

  const renderItem = item => {
    console.log('item', item);
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Paragraph>{item.name}</Paragraph>
              {/* <Avatar.Text label="J" /> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {documentData.length > 0 ? (
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={selectedDate}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

export default Schedule;
