import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import MessContent from '../components/messComponent/MessContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Avatar from '../components/avatarComponent/Avatar';
import {useNavigation} from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalView: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  iconAdd: {
    color: '#66ccff',
  },
  chatText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    padding: 14,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e6e6eb',
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
  },
  input: {
    paddingVertical: 0,
    width: "85%",
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
  },
  icon: {
    
  }
});
function MessageDetailScreen(props) {
  const {route} = props;
  const {message} = route.params;
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const showDetail = () => {
    setIsFocus(false);
  }
  const onFocusInput = () => {
    setIsFocus(true);
  };

  const keyboardDidHide = () => {
    setIsFocus(false);
  }

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onShowKeyboard = useCallback(() => {
    setIsShowKeyboard(true)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.avatar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={{marginRight: 10}}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>
          <Avatar uri={message.avatar} width={35} height={35} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.chatText}>{message.name}</Text>
            <Text>Hoạt động 15 phút trước</Text>
          </View>
        </View>
        <View style={styles.avatar}>
          <TouchableOpacity activeOpacity={0.8}>
            <FontAwesome style={styles.iconAdd} name="phone" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}} activeOpacity={0.8}>
            <FontAwesome style={styles.iconAdd} name="video-camera" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <MessContent messagedata={message} />
      </ScrollView>

      <View style={styles.bottom}>
        {isFocus ? (
          <TouchableOpacity onPress={showDetail}>
            <AntDesign name="right" size={20} style={{color: message.color}} />
          </TouchableOpacity>
        ) : (
          <View style={styles.flex}>
            <AntDesign style={styles.icon} name="pluscircle" size={20} style={{color: message.color}} />
            <FontAwesome style={styles.icon} size={20} style={{color: message.color}} name="camera" />
            <TouchableOpacity onPress={onShowKeyboard}>
              <FontAwesome style={styles.icon} size={20} style={{color: message.color}} name="image" />
            </TouchableOpacity>
            <FontAwesome style={styles.icon} size={20} style={{color: message.color}} name="microphone" />
          </View>
        )}
        <View style={[styles.viewInput, isFocus ? {width: '82%'} : {width: '40%'}]}>
          <TextInput
            style={styles.input}
            onFocus={onFocusInput}
            placeholder="Aa"
          />
          <AntDesign name="meho" size={20} style={{color: message.color}} />
        </View>
        <AntDesign name="like1" size={20} style={{color: message.color}} />
      </View>
      <View>

      </View>
    </View>
  );
}

MessageDetailScreen.propTypes = {};

export default MessageDetailScreen;
