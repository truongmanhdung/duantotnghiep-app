import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 10,
    marginTop: 5,
    justifyContent: 'space-between'
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    textAlign: 'right',
    color: 'white'
  },
});
function MessageRightItem(props) {
  const {message} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View><Text></Text></View>
      <Text style={[styles.text, {backgroundColor: message.color}]}>
        {message.content}
      </Text>
    </TouchableOpacity>
  );
}

MessageRightItem.propTypes = {
  message: PropTypes.object,
};

export default MessageRightItem;
