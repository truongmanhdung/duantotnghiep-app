import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Avatar from '../components/avatarComponent/Avatar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchComponent from '../components/searchComponent/searchComponent';
import MessContent from '../components/messComponent/MessContent';
import MessageBody from '../components/messComponent/MessageBody';
import MessageNew from '../components/messComponent/messageNew';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalView: {
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginHorizontal: 6,
    position: 'absolute',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 13,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#a5a5a54f',
    margin: 0,
    height: '95%'
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {},
  textModal: {
    width: 60
  },
  textHeaderModal: {
    padding: 10,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
const user = {
  id: 1,
  uri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=argtI6X9Nf8AX-R81hS&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_AgsceQ5tOGx0q4TDXAPBdf1gIckfRoJNVNxYQuRh_tg&oe=61F80196',
  name: 'Trương Mạnh Dũng',
  email: 'truongmanhdung04@gmail.com',
};
function MessScreen(props) {
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsShowModal(prev => !prev);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <TouchableOpacity onPress={onShowModal}>
          <Avatar
            uri={user.uri}
            width={35}
            height={35}
          />
        </TouchableOpacity>
        <Text style={styles.chatText}>Chat</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign style={styles.iconAdd} name="form" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {/* <SearchComponent /> */}
        <MessageNew />
        <MessageBody />
      </ScrollView>

      {isShowModal && (
        <Modal
          style={{margin: 0}}
          onModalHide={onShowModal}
          visible={true}
          useNativeDriver={true}
          onBackdropPress={onShowModal}
          onBackButtonPress={onShowModal}
          isVisible={true}
          backdropColor="null"
          hasBackdrop={true}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={onShowModal} style={styles.textModal}>
                <Text style={styles.textHeaderModal}>Xong</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                <Avatar
                  uri={user.uri}
                  width={80}
                  height={80}
                  onShowModal={onShowModal}
                />
              </View>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black', textAlign: 'center', margin: 5}}>{user.name}</Text>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>

                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
}

MessScreen.propTypes = {};

export default memo(MessScreen);
