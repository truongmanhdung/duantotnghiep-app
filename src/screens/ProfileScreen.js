import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import IconView from '../common/IconView';
import Avatar from '../components/avatarComponent/Avatar';
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textUser: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textWhite: {
    color: 'white',
  },
  borderUser: {
    backgroundColor: '#834e83',
    borderRadius: 10,
    padding: 15,
  },
  ScrollView: {
    padding: 10,
  },
});
const data = {
  id: 1,
  uri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=argtI6X9Nf8AX-R81hS&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_AgsceQ5tOGx0q4TDXAPBdf1gIckfRoJNVNxYQuRh_tg&oe=61F80196',
  name: 'Trương Mạnh Dũng',
  email: 'truongmanhdung04@gmail.com',
};
function ProfileScreen(props) {
  const navigation = useNavigation();
  const [user, setUser] = useState(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cá Nhân</Text>
        <TouchableOpacity onPress={() => navigation.navigate('setting')}>
          <IconView
            component="AntDesign"
            name="setting"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.borderUser}>
          <View style={[styles.flexDirection, {marginBottom: 10}]}>
            <Avatar width={60} height={60} uri={user.uri} />
            <View style={{marginLeft: 10}}>
              <Text style={styles.textUser}>{user.name}</Text>
              <Text style={styles.textWhite}>
                Có mặt 2 ngày liên tục (Tổng 9 ngày)
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.flexDirection,
              {
                backgroundColor: '#ad81ad',
                padding: 10,
                borderRadius: 8,
                justifyContent: 'space-between',
                marginBottom: 10,
              },
            ]}>
            <Text style={{color: 'white'}}>Số sao sở hữu</Text>
            <View style={[styles.flexDirection]}>
              <IconView
                component="AntDesign"
                name="star"
                size={20}
                color="#ebbf73"
              />
              <Text style={{color: 'white', marginLeft: 5, marginRight: 5}}>
                57
              </Text>
              <IconView
                component="AntDesign"
                name="right"
                size={20}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.flexDirection,
              {
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 8,
                justifyContent: 'center',
              },
            ]}>
            <Image
              source={{uri: 'https://i.ibb.co/9tsGjDd/logo2.png'}}
              style={{width: 40, height: 18}}
            />
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 5}}>Bắt đầu học cùng BeeHi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

ProfileScreen.propTypes = {};

export default ProfileScreen;
