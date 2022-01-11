import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import MessageRightItem from './MessageRightItem';
import MessageLeftItem from './MessageLeftItem';
import {ScrollView} from 'react-native';

const data = [
  {
    id: 1,
    content: 'alo bsdasd adsdasdadds sad sddsdsa sadsadsa saddsa ',
    color: '#00ccff',
    checked: true,
  },
  {
    id: 2,
    content: 'sdadsadsadsa',
    color: '#669999',
    checked: false,
  },
  {
    id: 3,
    content: 'saddsd',
    color: '#669999',
    checked: false,
  },
];

const styles = StyleSheet.create({
  message: {},
});
function MessContent(props) {
  return (
    <View style={styles.message}>
      {data.map(item =>
        item.checked ? (
          <MessageLeftItem key={item.id} message={item} />
        ) : (
          <MessageRightItem key={item.id} message={item} />
        ),
      )}
    </View>
  );
}

MessContent.propTypes = {};

export default MessContent;
