import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconView from '../common/IconView';
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
});
function ProfileScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cá Nhân</Text>
        <TouchableOpacity onPress={() => navigation.navigate('setting')}>
          <IconView component='AntDesign' name="setting" size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

ProfileScreen.propTypes = {};

export default ProfileScreen;
