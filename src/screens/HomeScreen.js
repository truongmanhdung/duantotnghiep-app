import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CourseComponent from '../components/courseComponent/CourseComponent';
import ImageGau from '../public/image/icondep.png';
import {useNavigation} from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  header: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    color: 'red',
    fontSize: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  course: {
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  viewCourse: {
    marginRight: 10,
  },
  viewContent: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  viewPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    position: 'relative',
    flex: 1,
    height: 220,
    padding: 10,
    borderRadius: 10,
  },
});
const dataSource = [
  {
    id: 1,
    title: 'Bạn phải đến lúc 10 giờ sáng',
    uri: 'https://i.ytimg.com/vi/bLlPYnz_Rt4/maxresdefault.jpg',
    content: 'You must come at 10 a.m',
    contentHide: 'sharp',
  },
  {
    id: 2,
    title: 'Bây giờ là 3 giờ sáng',
    uri: 'https://i.ytimg.com/vi/07M-gotZCuA/maxresdefault.jpg',
    content: 'It is three in the',
    contentHide: 'morning',
  },
  {
    id: 3,
    title: 'Đã quá nửa đêm',
    uri: 'https://i.ytimg.com/vi/GNUrxi1h9Jc/maxresdefault.jpg',
    content: "It's part midnight ",
    contentHide: 'morning',
  },
];
function HomeScreen(props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      {loading && <ActivityIndicator size="large" />}
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 80}}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Ionicons name="ios-rocket" style={styles.iconHeader} />
              <Text style={{color: '#0066FF', fontWeight: 'bold'}}>
                Hãy đăng ký để học cùng{' '}
                <Text style={{color: 'red'}}>BeeHi</Text> nào !!!
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.headerContent}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.headerText}>Đăng ký/Đăng nhập ngay</Text>
              <MaterialIcons name="navigate-next" size={28} />
            </TouchableOpacity>
          </View>

          <View style={styles.course}>
            <TouchableOpacity activeOpacity={0.8} style={styles.headerContent}>
              <Text style={[styles.headerText, {marginBottom: 10}]}>
                Từ nối, liên từ
              </Text>
              <MaterialIcons name="navigate-next" size={28} />
            </TouchableOpacity>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {dataSource.map(course => (
                <View key={course.id} style={styles.viewCourse}>
                  <CourseComponent course={course} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.viewContent}>
            <Text style={[styles.headerText, {marginBottom: 10}]}>
              Học một mình hơi khó?
            </Text>
            <View style={styles.viewPosition}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Khóa học')}
                style={[
                  styles.content,
                  {backgroundColor: '#EE5959', marginRight: 5},
                ]}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Khóa học miễn phí
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'white',
                    marginBottom: 20,
                    marginTop: 5,
                  }}>
                  Nói chuyện phiếm
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://i.ibb.co/SP9hDMf/png2.png'}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Xem khóa học
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Message')}
                style={[
                  styles.content,
                  {backgroundColor: '#9933FF', marginLeft: 5},
                ]}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Chat with BeeHi
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'white',
                    marginBottom: 20,
                    marginTop: 5,
                  }}>
                  Nói với BeeHi về bạn
                </Text>
                <View style={{alignItems: 'center', width: '100%'}}>
                  <Image
                    style={{width: 100, height: 100, alignItems: 'center'}}
                    source={ImageGau}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Chat với BeeHi
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
