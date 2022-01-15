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
    color: '#e6e6eb',
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
  {
    id: 4,
    content: 'alo bsdasd adsdasdadds sad sddsdsa sadsadsa saddsa ',
    color: '#e6e6eb',
    checked: true,
  },
  {
    id: 21,
    content: 'sdadsadsadsa',
    color: '#669999',
    checked: false,
  },
  {
    id: 35,
    content: 'saddsd',
    color: '#669999',
    checked: false,
  },
  {
    id: 13,
    content: 'alo bsdasd adsdasdadds sad sddsdsa sadsadsa saddsa ',
    color: '#e6e6eb',
    checked: true,
  },
  {
    id: 25,
    content: 'sdadsadsadsa',
    color: '#669999',
    checked: false,
  },
  {
    id: 36,
    content: 'saddsd',
    color: '#669999',
    checked: false,
  },
  {
    id: 17,
    content: 'alo bsdasd adsdasdadds sad sddsdsa sadsadsa saddsa ',
    color: '#e6e6eb',
    checked: true,
  },
  {
    id: 299,
    content: 'sdadsadsadsa',
    color: '#669999',
    checked: false,
  },
  {
    id: 355,
    content: 'saddsd',
    color: '#669999',
    checked: false,
  },
];

const styles = StyleSheet.create({
  message: {},
});
function MessContent(props) {
  const {messagedata} = props;
  return (
    <View style={styles.message}>
      {data.map(item =>
        item.checked ? (
          <MessageLeftItem key={item.id} message={item} avatar={messagedata.avatar} />
        ) : (
          <MessageRightItem key={item.id} message={item} />
        ),
      )}
    </View>
  );
}

MessContent.propTypes = {
  messagedata: PropTypes.object,
};

export default MessContent;
