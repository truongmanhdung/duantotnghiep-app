import React, {
    memo, useCallback, useEffect, useState,
  } from 'react';
  import {
    Dimensions, Image, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
  } from 'react-native';
  import CameraRoll from '@react-native-community/cameraroll';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { launchCamera } from 'react-native-image-picker';
  import PropTypes from 'prop-types';
  import { useNavigation } from '@react-navigation/native';
import CameraStack from '../cameraStack/cameraStack';
import VideoItem from '../videoItem/VideoItem';
  
  
  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 111,
      elevation: 111,
    },
    imageBorder: {
      width: width / 3 - 2,
      height: width / 3 - 2,
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 1,
      borderColor: 'rgba(0,0,0,0.1)',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    camera: {
      width: width / 3 - 2,
      height: width / 3 - 2,
      textAlign: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 1,
      borderColor: 'rgba(0,0,0,0.1)',
    },
    viewFocus: {
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },
    iconCamera: {
      textAlign: 'center',
      lineHeight: width / 3 - 5,
    },
    scrollView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    textFocus: {
      borderRadius: 100,
      width: 50,
      height: 50,
      textAlign: 'center',
      lineHeight: 50,
      color: 'white',
      backgroundColor: '#3F51B5',
      zIndex: 10,
    },
    viewSave: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: '10%',
      left: 0,
      paddingLeft: 40,
      paddingRight: 40,
      right: 0,
    },
    btnRemove: {
      backgroundColor: '#fff',
      width: 100,
      height: 40,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    btnSave: {
      backgroundColor: '#3F51B5',
      width: 100,
      height: 40,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    textBtn: {
      textAlign: 'center',
      lineHeight: 40,
      color: 'white',
    },
    textBtnRemove: {
      textAlign: 'center',
      lineHeight: 40,
      color: 'black',
    },
    viewBack: {
      position: 'absolute',
      bottom: '10%',
      left: 0,
      paddingRight: 30,
      paddingLeft: 30,
      right: 0,
  
    },
    btnBack: {
      backgroundColor: 'white',
      width: '100%',
      height: 40,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  });
  
  function KeyboardMedia(props) {
    const {
      addMedia, updateCustomKeyboardHeight, onShowCustomKeyboardView, onCloseKeyboard, keyboardHeight,
    } = props;
    const [images, setImages] = useState([]);
    const [imageFocus, setImageFocus] = useState([]);
    const [isShowCamera, setIsShowCamera] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
      getPhotos();
    }, [getPhotos]);
    const requestExternalStoreAgeRead = useCallback(async() => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );
  
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        // Handle this error
        return false;
      }
    }, []);
    const getPhotos = useCallback(async() => {
      if (await requestExternalStoreAgeRead()) {
        CameraRoll.getPhotos({
          first: 50,
          assetType: 'All',
        }).then((r) => {
          setImages(r.edges);
        });
      }
    }, [requestExternalStoreAgeRead]);
    const onCloseCamera = useCallback(() => {
      setIsShowCamera(false);
    }, []);
  
  
    const requestExternalCamera = useCallback(async() => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
  
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        // Handle this error
        return false;
      }
    }, []);
  
    const showCamera = useCallback(async() => {
      if (await requestExternalCamera()) {
        setIsShowCamera(true);
      }
    }, [requestExternalCamera]);
  
    const onAddImageCamera = useCallback(async() => {
      await getPhotos();
    }, [getPhotos]);
  
    const onFocus = useCallback((uri, mime) => {
      setImageFocus((prevState) => {
        const newImageFocus = [...prevState];
        const image = {
          url: uri,
          index: newImageFocus.length + 1,
          mime,
        };
        newImageFocus.push(image);
        return newImageFocus;
      });
    }, []);
  
    const onRemoveFocus = useCallback((uri) => {
      setImageFocus((prevState) => {
        let newImageFocus = [...prevState];
        newImageFocus = newImageFocus.filter((item) => item.url !== uri);
        const ImageNew = [];
        for (let i = 0; i < newImageFocus.length; i += 1) {
          const image = {
            url: newImageFocus[i].url,
            index: i + 1,
            mime: newImageFocus[i].mime,
          };
          ImageNew.push(image);
        }
        return ImageNew;
      });
    }, []);
    const scrollView = (image) => {
      if (imageFocus.length > 0) {
        for (let i = 0; i < imageFocus.length; i += 1) {
          if (imageFocus[i].url === image.node.image.uri) {
            return (
                          <TouchableOpacity
                              onPress={() => onRemoveFocus(image.node.image.uri)} style={styles.imageBorder}
                              key={image.node.image.uri}
                          >
                              {image.node.type.includes('video/mp4') ? (
                                      <VideoItem
                                          styleVideo={{ width: width / 3 - 2.5, height: width / 3 - 2.5 }}
                                          url={image.node.image.uri}
                                          pausedVideo
                                          navigation={navigation}
                                      />
  
                              )
                                : <Image style={[styles.image, { opacity: 0.5 }]} source={{ uri: image.node.image.uri }}/>}
                              <View style={styles.viewFocus}><Text
                                  style={styles.textFocus}
                              >{imageFocus[i].index}</Text></View>
                          </TouchableOpacity>
            );
          }
        }
      }
      return (
              <TouchableOpacity
                  onPress={() => onFocus(image.node.image.uri, image.node.type)} style={styles.imageBorder}
                  key={image.node.image.uri}
              >
                  {image.node.type.includes('video/mp4') ? (
                          <View style={styles.viewVideo}>
                              <VideoItem
                                  styleVideo={{ width: width / 3 - 2.5, height: width / 3 - 3 }}
                                  url={image.node.image.uri}
                                  pausedVideo
                                  navigation={navigation}
                              />
                          </View>
                  )
                    : <Image style={styles.image} source={{ uri: image.node.image.uri }}/>}
              </TouchableOpacity>
      );
    };
  
    const onRemoveImage = () => {
      setImageFocus([]);
    };
  
    const onSaveImage = useCallback(() => {
      addMedia(imageFocus);
      setImageFocus([]);
      onShowCustomKeyboardView(null);
      onCloseKeyboard();
    }, [addMedia, imageFocus, onCloseKeyboard, onShowCustomKeyboardView]);
    const onBack = useCallback(() => {
      onShowCustomKeyboardView(null);
      onCloseKeyboard();
    }, [onCloseKeyboard, onShowCustomKeyboardView]);
  
    // const setHeightChange = (event) => {
    //   const { height } = event.nativeEvent.layout;
    //   updateCustomKeyboardHeight(height);
    // };
  
    return (
          <View style={styles.container}>
              {isShowCamera && (
                      <CameraStack
                          isVisible={isShowCamera}
                          onCloseModal={onCloseCamera}
                          returnData={onAddImageCamera}
                      />
              )}
              <ScrollView style={{ height: keyboardHeight }} keyboardShouldPersistTaps="always">
                  <View style={styles.scrollView}>
                      <TouchableOpacity onPress={showCamera} style={styles.camera} activeOpacity={0.2}>
                          <Ionicons
                              style={styles.iconCamera}
                              name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
                              size={30}
                          />
                      </TouchableOpacity>
                      {images.map((item) => scrollView(item))}
                  </View>
              </ScrollView>
              {imageFocus.length > 0 ? (
                  <View style={styles.viewSave}>
                      <TouchableOpacity style={styles.btnRemove} onPress={onRemoveImage}>
                          <Text style={styles.textBtnRemove}>Hủy</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnSave} onPress={onSaveImage}>
                          <Text style={styles.textBtn}>Đăng {imageFocus.length > 1 ? imageFocus.length : null}</Text>
                      </TouchableOpacity>
                  </View>
              ) : (
                  <View style={styles.viewBack}>
                      <TouchableOpacity style={styles.btnBack} onPress={onBack} activeOpacity={0.8}>
                          <Text style={styles.textBtnRemove}>Hủy</Text>
                      </TouchableOpacity>
                  </View>
              )}
          </View>
    );
  }
  
  KeyboardMedia.propTypes = {
    addMedia: PropTypes.func,
    updateCustomKeyboardHeight: PropTypes.func,
    onShowCustomKeyboardView: PropTypes.func,
  };
  
  export default memo(KeyboardMedia);