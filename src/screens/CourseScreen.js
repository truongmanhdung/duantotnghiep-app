import React from 'react';
import PropTypes from 'prop-types';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CourseListItem from '../components/courseComponent/CourseListItem';
const styles = StyleSheet.create({
  container: {

  },
  facebookgroup: {
    padding: 15
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 15
  },
  groupFb: {
    backgroundColor: '#3599fa',
    borderRadius: 10,
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewImage: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  textH3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    
  },
  contentFb: {
    paddingTop: 15,
    width: '70%',
    marginLeft: 10,
  },
  textcontent: {
    color: '#e0e6eb'
  }
})
function CourseScreen(props) {
  return (
      <ScrollView style={styles.container}>
        <View style={styles.facebookgroup}>
          <Text style={styles.textHeader}>Group Facebook của BeeHi</Text>
          <TouchableOpacity style={styles.groupFb}>
            <View style={styles.viewImage}>
              <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2016/12/22/13/45/bee-1925504_960_720.png'}} />
            </View>
            <View style={styles.contentFb}>
              <Text style={styles.textH3}>Tạo thói quen học tiếng Anh!</Text>
              <Text style={styles.textcontent}>
                Tham gia group FB của BeeHi để tìm hiểu thêm về tiếng Anh!
              </Text>
            </View>
            <AntDesign name="right" size={24} style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
        <CourseListItem />
      </ScrollView>
  );
}

CourseScreen.propTypes = {};

export default CourseScreen;
