import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconView from '../common/IconView';
import Avatar from '../components/avatarComponent/Avatar';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#e2e1e3',
    borderColor: '#b9b7b9',
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
  flexBoxBorder: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  textBold: {
    color: 'black',
    fontWeight: 'bold',
  },
  textLink: {
    color: 'blue',
  },
  flexText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e1e3',
    marginTop: 10,
  },
  btnOut: {
    paddingTop: 10,
    paddingBottom: 40,
    marginLeft: 10,
    borderTopWidth: 3,
    marginRight: 10,
    borderTopColor: '#e2e1e3'
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
  const [filePath, setFilePath] = useState(user);
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const onShowModal = useCallback(() => {
    setIsShowModal(prev => !prev);
  }, []);

  const onShowCamera = useCallback(async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);

          return;
        }
        console.log('base64 -> ', response.assets[0].uri);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath({
          id: 1,
          uri: response.assets[0].uri,
          name: 'Trương Mạnh Dũng',
          email: 'truongmanhdung04@gmail.com',
        });
      });
    }
  }, []);

  const onShowMedia = useCallback(async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchImageLibrary(options, response => {
        console.log('Response = ', response);

        // if (response.didCancel) {
        //   alert('User cancelled camera picker');
        //   return;
        // } else if (response.errorCode == 'camera_unavailable') {
        //   alert('Camera not available on device');
        //   return;
        // } else if (response.errorCode == 'permission') {
        //   alert('Permission not satisfied');
        //   return;
        // } else if (response.errorCode == 'others') {
        //   alert(response.errorMessage);
        //   return;
        // }
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath({
          id: 1,
          uri: response.assets[0].uri,
          name: 'Trương Mạnh Dũng',
          email: 'truongmanhdung04@gmail.com',
        });
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <IconView component="AntDesign" name="left" size={24} />
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.camera}>
          <TouchableOpacity style={styles.avatar} onPress={onShowModal}>
            <Avatar width={85} height={85} uri={filePath.uri} />
            <View style={styles.cameraIcon}>
              <IconView size={20} component="Entypo" name="camera" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.flexBoxBorder}>
          <Text style={{marginBottom: 5}}>Tên</Text>
          <View style={styles.flexDirection}>
            <Text style={styles.textBold}>{filePath.name}</Text>
            <TouchableOpacity onPress={onShowModal} style={styles.textModal}>
              <Text style={styles.textLink}>Thay đổi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexBoxBorder}>
          <Text style={{marginBottom: 5}}>Email</Text>
          <View style={styles.flexDirection}>
            <Text style={styles.textBold}>{filePath.email}</Text>
            <TouchableOpacity onPress={onShowModal} style={styles.textModal}>
              <Text style={styles.textLink}>Thay đổi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            styles.textBold,
            {marginTop: 20, marginLeft: 10, marginBottom: 10},
          ]}>
          Thông Tin về BeeHi
        </Text>
        <View style={styles.flexText}>
          <Text>FAQ</Text>
        </View>
        <View style={styles.flexText}>
          <Text>Báo cáo sự cố</Text>
        </View>
        <View style={styles.flexText}>
          <Text>Bộ nhớ cache</Text>
          <Text>14MB</Text>
        </View>
        <View style={styles.flexText}>
          <Text>Phiên bản</Text>
          <Text>1.0.0</Text>
        </View>
        <Text style={{marginBottom: 10, marginLeft: 10, marginTop: 10}}>
          Thông tin ứng dụng
        </Text>
        <Text style={{marginBottom: 10, marginLeft: 10}}>
          Chính sách bảo mật
        </Text>
        <Text style={{marginBottom: 10, marginLeft: 10}}>
          Điều khoản sử dụng
        </Text>
        <Text style={{marginBottom: 10, marginLeft: 10}}>
          Bản quyền nguồn mở
        </Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnOut}>
          <Text style={styles.textBold}>Đăng xuất</Text>
        </TouchableOpacity>
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
