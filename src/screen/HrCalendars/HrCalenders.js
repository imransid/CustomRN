// import React, {Component} from 'react';
// import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {
//   Agenda,
//   DateData,
//   AgendaEntry,
//   AgendaSchedule,
// } from 'react-native-calendars';
// import testIDs from './testIDs';

// export default class AgendaScreen extends Component {
//   state = {
//     items: undefined,
//   };

//   render() {
//     return (
//       <Agenda
//         testID={testIDs.agenda.CONTAINER}
//         items={this.state.items}
//         loadItemsForMonth={this.loadItems}
//         selected={'2017-05-16'}
//         renderItem={this.renderItem}
//         renderEmptyDate={this.renderEmptyDate}
//         rowHasChanged={this.rowHasChanged}
//         showClosingKnob={true}
//         // markingType={'period'}
//         // markedDates={{
//         //    '2017-05-08': {textColor: '#43515c'},
//         //    '2017-05-09': {textColor: '#43515c'},
//         //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
//         //    '2017-05-21': {startingDay: true, color: 'blue'},
//         //    '2017-05-22': {endingDay: true, color: 'gray'},
//         //    '2017-05-24': {startingDay: true, color: 'gray'},
//         //    '2017-05-25': {color: 'gray'},
//         //    '2017-05-26': {endingDay: true, color: 'gray'}}}
//         // monthFormat={'yyyy'}
//         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
//         //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
//         // hideExtraDays={false}
//         // showOnlySelectedDayItems
//       />
//     );
//   }

//   loadItems = () => {
//     const items = this.state.items || {};

//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);

//         if (!items[strTime]) {
//           items[strTime] = [];

//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150)),
//               day: strTime,
//             });
//           }
//         }
//       }

//       const newItems = {};
//       Object.keys(items).forEach(key => {
//         newItems[key] = items[key];
//       });
//       this.setState({
//         items: newItems,
//       });
//     }, 1000);
//   };

//   renderItem = () => {
//     const fontSize = isFirst ? 16 : 14;
//     const color = isFirst ? 'black' : '#43515c';

//     return (
//       <TouchableOpacity
//         testID={testIDs.agenda.ITEM}
//         style={[styles.item, {height: reservation.height}]}
//         onPress={() => Alert.alert(reservation.name)}>
//         <Text style={{fontSize, color}}>{reservation.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   };

//   rowHasChanged = () => {
//     return r1.name !== r2.name;
//   };

//   timeToString() {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17,
//   },
//   emptyDate: {
//     height: 15,
//     flex: 1,
//     paddingTop: 30,
//   },
// });

// //  exm 2

// import {addDays, format} from 'date-fns';
// import React, {useEffect, useState} from 'react';
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {Agenda} from 'react-native-calendars';

// const App = () => {
//   const [items, setItems] = useState({});

//   useEffect(() => {
//     // run once

//     const getData = async () => {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts',
//       );
//       const data = await response.json();

//       const mappedData = data.map((post, index) => {
//         const date = addDays(new Date(), index);

//         return {
//           ...post,
//           date: format(date, 'yyyy-MM-dd'),
//         };
//       });

//       console.log('mappedData', mappedData);

//       const reduced = mappedData.reduce((acc, currentItem) => {
//         const {date, ...coolItem} = currentItem;

//         acc[date] = [coolItem];

//         return acc;
//       }, {});

//       setItems(reduced);
//     };

//     getData();
//   }, []);

//   const renderItem = item => {
//     return (
//       <View style={styles.itemContainer}>
//         <Text>{item.name}</Text>
//         <Text>{item.cookies ? `🍪` : `😋`}</Text>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <Agenda items={items} renderItem={renderItem} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//   },
//   itemContainer: {
//     backgroundColor: 'white',
//     margin: 5,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
// });

// export default App;

// // exm 3

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
// import Typography from '../components/Typography';
import { Paragraph } from 'react-native-paper';
import { _postApiFetch } from '../../services/Services';
import useFetchData from '../../components/HOC/withGetData';
import { useSelector } from 'react-redux';


const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});
  const [documentData, setDocumentData] = useState([]);
  const [documentLoader, setDocumentLoader] = useState(false);
  const id = useSelector(state => state.user.userAllData.id);
  const com_id = useSelector(state => state.user.userAllData.com_id);
  let data = useFetchData(
    [['company_calendar_employee_id', id], ['company_calendar_com_id', com_id]],
    'calendar',
    'post',
  );

  useEffect(() => {
    try {
      data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
      documentData.length === 0 ? setDocumentData(data[0]) : null;
    } catch (err) {
      console.log('Error in useEffect ', err);
    }
    console.log("Calendar data", documentData);

  }, [data, documentLoader, documentData]);


  console.log("Calendar data", documentData);

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = documentData;
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Paragraph>{item.id}</Paragraph>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;
