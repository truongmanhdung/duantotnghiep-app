import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from '../avatarComponent/Avatar';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 10,
    marginTop: 5,
    padding: 10,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    color: 'white',
    maxWidth: 200,
    marginLeft: 5
  },
});
function MessageLeftItem(props) {
  const {message} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View>
        <Avatar width={25} height={25} />
      </View>
      <Text style={[styles.text, {backgroundColor: message.color}]}>
        {message.content}
      </Text>
    </TouchableOpacity>
  );
}

MessageLeftItem.propTypes = {
  message: PropTypes.object,
};

export default MessageLeftItem;
