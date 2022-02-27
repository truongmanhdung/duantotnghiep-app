import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Avatar from '../components/avatarComponent/Avatar';
import IconView from '../common/IconView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dataCourse = [
  {
    id: 1,
    uri: 'https://ketnoitrithuc.vn/wp-content/uploads/2021/07/0ec617bf538cf23cb50da13ac65da0a1-1.jpg',
    name: 'Tiếng anh giao tiếp cơ bản',
  },
  //   {
  //     id: 2,
  //     uri: 'https://yola.vn/wp-content/uploads/2019/05/tieng-anh-lop-9-3-1024x696.jpg',
  //     name: 'Ngữ pháp tiếng anh',
  //   },
];

const dataKH = [
  {
    id: 1,
    items: [
      {
        uri: 'https://i.ytimg.com/vi/oBRxncLrRQU/maxresdefault.jpg',
        title: '"Bạn nói có lý" tiếng Anh là?',
        desc: 'BeeHi: Đại lộ Danh vọng',
      },
      {
        uri: 'https://mshoagiaotiep.com/uploads/images/userfiles/2020/09/lo_trinh_hoc_tieng_anh_giao_tiep_tai_ms_hoa_giao_tiep.jpg',
        title: 'Day 69. Đừng mắc mưu',
        desc: 'Mẫu câu tiếng Anh cho người mới bắt đầu',
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        uri: 'https://jaxtina.com/wp-content/uploads/2016/05/KHOA-HOC-TIENG-ANH-CHO-NGUOI-MAT-GOC.jpg',
        title: 'Do you have someone in mind?',
        desc: 'Tiếng Anh trong đời sống - Đời sống thường ngày của chúng ta.',
      },
      {
        uri: 'https://benative.vn/wp-content/uploads/2019/03/khoa-hoc-tieng-anh-giao-tiep-nang-cao-homestay-english.jpg',
        title: '"Put on" có nghĩa là?',
        desc: 'Học cụm từ theo ví dụ ( P.4 ).',
      },
    ],
  },
  {
    id: 4,
    items: [
      {
        uri: 'https://www.aland.edu.vn/uploads/images/userfiles/2020/01/07/khoa-hoc-tieng-anh-lop-6-lop-7-aland-english.jpg',
        title: '"Bạn nói có lý" tiếng Anh là?',
        desc: 'BeeHi sẽ dạy bạn',
      },
      {
        uri: 'https://english4u.com.vn/Uploads/files/hoc-tieng-anh-online-english4u.png',
        title: 'Day 124: knock, result, seem',
        desc: 'Học từ vựng theo ví dụ ( P.5 ).',
      },
    ],
  },
];

const dataKh2 = [
  {
    id: 1,
    uri: 'https://hanka.edu.vn/wp-content/uploads/2021/05/thumbnail-khoa-hoc-tieng-anh.jpg',
    title: 'Các mẫu câu nghi vấn',
    lever: 'Sơ cấp',
    amount: 16,
  },
  {
    id: 2,
    uri: 'https://newocean.edu.vn/wp-content/uploads/2020/05/online-2.jpg',
    title: 'Tin vắn bằng tiếng Anh',
    lever: 'Nhập môn',
    amount: 98,
  },
  {
    id: 3,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXxV8IDkup0drCh-S3ajnDxm9_16-voe_hw&usqp=CAU',
    title: 'Học từ vựng theo ví dụ',
    lever: 'Nhập môn',
    amount: 30,
  },
  {
    id: 4,
    uri: 'https://www.anhngumshoa.com/uploads/images/userfiles/Intermediate.jpg',
    title: 'Học cụm từ theo ví dụ',
    lever: 'Nhập môn',
    amount: 30,
  },
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginLeft: 15,
  },
  imageCourse: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  viewCourse: {
    width: 100,
    marginRight: 10,
  },
  textCourse: {
    marginTop: 5,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  courseScroll: {
    position: 'relative',
    paddingBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageLogo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    top: 105,
    zIndex: 100,
  },
  contentView: {
    marginRight: 30,
  },
  flexContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    // width: windowWidth - 80
  },
  viewRight: {
    marginLeft: 20,
    // width: "100%"
  },
  viewRightText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  textDesc: {
    // width: "60%"
    width: windowWidth - 130,
  },
  viewListEn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    flexWrap: 'wrap',
    paddingBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 8,
  },
  viewListItem: {
    width: '50%',
    padding: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  viewListItemImage: {
    width: '100%',
    height: 130,
    borderRadius: 8,
  },
});

function SpeakScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={styles.textHeader}>Khóa đang học</Text>
        <ScrollView
          horizontal
          style={styles.courseScroll}
          showsHorizontalScrollIndicator={false}>
          {dataCourse.map(item => (
            <View style={styles.viewCourse} key={item.id}>
              <Image style={styles.imageCourse} source={{uri: item.uri}} />
              <Text style={styles.textCourse}>{item.name}</Text>
            </View>
          ))}
          <View
            style={[
              styles.viewCourse,
              {
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
                borderStyle: 'dotted',
                borderRadius: 8,
                padding: 10,
                justifyContent: 'space-around',
                textAlign: 'center',
              },
            ]}>
            <Text style={styles.textCourse}>
              Hãy học thêm thật nhiều khóa học nhé !
            </Text>
          </View>
        </ScrollView>
        <Image
          style={styles.imageLogo}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/12/22/13/45/bee-1925504_960_720.png',
          }}
        />
        <Text style={[styles.textHeader, {marginTop: 15}]}>
          Bài học cho bạn
        </Text>

        <ScrollView
          horizontal
          style={styles.courseScroll}
          showsHorizontalScrollIndicator={false}>
          {dataKH.map(course => (
            <View style={styles.contentView} key={course.id}>
              {course.items.map(item => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.flexContent}
                  key={item}>
                  <Avatar uri={item.uri} width={80} height={80} />
                  <View style={styles.viewRight}>
                    <Text style={styles.viewRightText}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.textDesc}>
                      {item.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
        <Text style={[styles.textHeader, {marginTop: 15, textAlign: 'center'}]}>
          Tiếng Anh vui nhộn & dễ dàng
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          Dành cho người mới bắt đầu
        </Text>
        <View style={styles.viewListEn}>
          {dataKh2.map(item => (
            <TouchableOpacity key={item.id} style={styles.viewListItem}>
              <Image
                style={styles.viewListItemImage}
                source={{
                  uri: item.uri,
                }}
              />
              <View style={{marginTop: 10}}>
                <Text style={styles.viewRightText}>{item.title}</Text>
                <Text style={styles.textDesc}>
                  {item.lever} <IconView name="dot-single" component="Entypo" />{' '}
                  {item.amount} khóa học
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

SpeakScreen.propTypes = {};

export default SpeakScreen;
