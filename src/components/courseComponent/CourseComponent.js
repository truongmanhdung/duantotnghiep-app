import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
const styles = StyleSheet.create({
  content: {},
  image: {
    width: 300,
    height: 170,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: 'black',
  },
  textContent: {
    paddingLeft: 2,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  textHide: {
    width: 50,
    paddingLeft: 2,
    marginLeft: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
function CourseComponent(props) {
  const {course} = props;
  const [isShow, setIsShow] = useState(false);
  const showCourse = () => {
    setIsShow(true);
  };
  return (
    <TouchableOpacity
      style={styles.content}
      activeOpacity={0.8}
      onPress={showCourse}>
      <Image style={styles.image} source={{uri: course.uri}} />
      <Text style={styles.text}>{course.title}.</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>{course.content}</Text>
        {isShow ? (
          <Text style={styles.textContent}>{course.contentHide}.</Text>
        ) : (
          <Text style={styles.textHide}></Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

CourseComponent.propTypes = {
  source: PropTypes.object,
};

export default CourseComponent;
