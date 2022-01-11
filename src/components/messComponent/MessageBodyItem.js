import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from '../avatarComponent/Avatar';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  content: {
    marginLeft: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    maxWidth: '77%',
  },
});
function MessageBodyItem(props) {
  const {message} = props;
  const navigation = useNavigation();
  const showDetail = () => {
    navigation.navigate('MessageDetail', {message})
  }
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={showDetail}>
      <Avatar uri={message.avatar} width={50} height={50} />
      <View style={styles.content}>
        <Text style={styles.name}>{message.name}</Text>
        <View style={styles.contentText}>
          <Text numberOfLines={1} style={styles.message}>
            {message.checked ? 'You' : message.firstName}: {message.message}
          </Text>
          <Text>
            <Entypo name="dot-single" /> {message.timeLine}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

MessageBodyItem.propTypes = {
  message: PropTypes.object,
};

export default MessageBodyItem;
