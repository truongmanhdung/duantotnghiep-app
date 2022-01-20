import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconView from '../common/IconView';
import Avatar from '../components/avatarComponent/Avatar';
import Modal from 'react-native-modal';
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  back: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    width: 40,
  },
  avatar: {},
  camera: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    right: -10,
    backgroundColor: 'white',
    borderRadius: 100,
    bottom: -10,
    padding: 8,
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
  },
  textModalHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#c8c7c9',
  },
  iconModal: {
    borderRadius: 100,  
    borderColor: 'black',
    borderWidth: 1,
    padding: 4,
  },
  textModal: {
    color: 'black',
  },
});
const user = {
  id: 1,
  uri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=argtI6X9Nf8AX-R81hS&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_AgsceQ5tOGx0q4TDXAPBdf1gIckfRoJNVNxYQuRh_tg&oe=61F80196',
  name: 'Trương Mạnh Dũng',
  email: 'truongmanhdung04@gmail.com',
};
function SettingScreen(props) {
  const navigation = useNavigation();
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsShowModal(prev => !prev);
  }, []);

  const onShowCamera = useCallback(() => {}, []);

  const onShowMedia = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <IconView component="AntDesign" name="left" size={24} />
      </TouchableOpacity>

      <View style={styles.camera}>
        <TouchableOpacity style={styles.avatar} onPress={onShowModal}>
          <Avatar width={85} height={85} uri={user.uri} />
          <View style={styles.cameraIcon}>
            <IconView size={20} component="Entypo" name="camera" />
          </View>
        </TouchableOpacity>
      </View>

      {isShowModal && (
        <Modal
          style={{margin: 0}}
          onModalHide={onShowModal}
          visible={true}
          useNativeDriver={true}
          onBackdropPress={onShowModal}
          onBackButtonPress={onShowModal}
          isVisible={true}
          backdropColor="#79777c"
          hasBackdrop={true}>
          <View style={styles.modalView}>
            <View style={styles.itemModal}>
              <Text style={styles.textModalHeader}>Thay đổi ảnh đại diện</Text>
              <TouchableOpacity onPress={onShowModal} style={styles.textModal}>
                <IconView size={20} component="AntDesign" name="close" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.itemModal} onPress={onShowCamera}>
              <Text style={styles.textModal}>Chụp ảnh</Text>
              <View style={styles.iconModal}>
                <IconView size={12} component="AntDesign" name="right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemModal} onPress={onShowMedia}>
              <Text style={styles.textModal}>Chọn trong Thư viện ảnh</Text>
              <View style={styles.iconModal}>
                <IconView size={12} component="AntDesign" name="right" />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

SettingScreen.propTypes = {};

export default SettingScreen;
