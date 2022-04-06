import React, {useState} from 'react';

import withCalender from '../HOC/withCaledder';

import {Calendar} from 'react-native-calendars';

const Calendars = () => {
  return (
    <Calendar
      markedDates={markedDates}
      markingType={'period'}
      onDayPress={handleDayPress}
    />
  );
};

export default withCalender(Calendars);
