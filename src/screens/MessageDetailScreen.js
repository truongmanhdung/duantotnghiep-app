import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
    // bottom: 0,
    // left: 0,
    // right: 0,
    // height: 300,
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
});
function MessageDetailScreen(props) {
  const {route} = props;
  const {message} = route.params;
  const navigation = useNavigation();
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
        <MessContent />
      </ScrollView>
    </View>
  );
}

MessageDetailScreen.propTypes = {};

export default MessageDetailScreen;
