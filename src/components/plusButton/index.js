import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

const PlusButton = props => {
  return (
    <View style={styles.loading}>
      <TouchableOpacity onPress={() => props.OnPress()}>
        <Icon name="plussquareo" size={50} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 5,
    top: 5,
    bottom: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default PlusButton;
