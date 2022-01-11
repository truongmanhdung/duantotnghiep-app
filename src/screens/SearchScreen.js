import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import noSearch from '../public/image/nosearch.png';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchComponent from '../components/searchComponent/searchComponent';
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    width: '92%',
    borderRadius: 20,
    padding: 5,
  },
  input: {
    width: '86%',
    paddingVertical: 0,
  },
  searchFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBack: {
    backgroundColor: '#CCCCCC',
    padding: 5,
    borderRadius: 50,
  },
  content: {
    flex: 1,
  },
  viewImage: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: 100,
  },
  image: {
    width: 200,
    height: 100,
    // backgroundColor: 'red',
  },
});
function SearchScreen(props) {
  const navigation = useNavigation();
  const [keySearch, setKeySearch] = useState('');
  const changeInput = text => {
    setKeySearch(text);
  };
  const removeKeySearch = () => {
    setKeySearch('');
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
        <View>
          <SearchComponent />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={noSearch} />
          <Text>Không có kết quả nào trùng khớp.</Text>
        </View>
      </View>
    </View>
  );
}

SearchScreen.propTypes = {};

export default SearchScreen;
