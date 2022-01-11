import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';


const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    backgroundColor: 'black',
  },
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
  },
  
});
function Avatar(props) {
  const {onShowModal, width, height, uri} = props;
  return (
    <View>
      <TouchableOpacity onPress={onShowModal} activeOpacity={0.4}>
        <Image
          source={{
            uri: uri,
          }}
          style={[styles.avatar, {width: width, height: height}]}
        />
      </TouchableOpacity>
    </View>
  );
}

Avatar.propTypes = {
    onShowModal: PropTypes.func,
    uri: PropTypes.string
};

export default memo(Avatar);
