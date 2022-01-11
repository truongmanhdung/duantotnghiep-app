import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Avatar from '../avatarComponent/Avatar';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 5,
  },
  image: {
    width: 100,
    height: 190,
    borderRadius: 16,
  },
  viewNewMess: {
    zIndex: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  viewUser: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 20,
    borderColor: 'blue',
    borderWidth: 4,
    borderRadius: 50,
    zIndex: 15,
  },
  text: {
    color: 'white',
    zIndex: 15,
    fontWeight: '500',
    fontSize: 14,
  },
  positionText: {
    position: 'absolute',
    bottom: 10,
    left: 5,
  },
  textTime: {
    color: 'white',
    zIndex: 15,
    fontWeight: '400',
    fontSize: 11,
  }
});
function MessageNewItem(props) {
  const {messagenew} = props;
  const date = new Date();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.viewUser}>
        <Avatar uri={messagenew.avatar} width={30} height={30} />
      </View>
      <View style={styles.overlay}></View>
      <View style={styles.viewNewMess}>
        <Image style={styles.image} source={{uri: messagenew.newMessage.uri}} />
      </View>
      <View style={styles.positionText}>
        {(date.getTime() - messagenew.newMessage.time) < 600000 &&  <Text style={styles.textTime}>Vừa xong</Text>}
        <Text style={styles.text}>{messagenew.name}</Text>
      </View>
      
    </TouchableOpacity>
  );
}

MessageNewItem.propTypes = {
  messagenew: PropTypes.object,
};

export default MessageNewItem;
