import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
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
});
function SearchComponent(props) {
  const [keySearch, setKeySearch] = useState('');
  const changeInput = text => {
    setKeySearch(text);
  };
  const removeKeySearch = () => {
    setKeySearch('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons name="search" size={20} />
        <View style={styles.searchFlex}>
          <TextInput
            style={styles.input}
            value={keySearch}
            onChangeText={changeInput}
            placeholder="Tìm kiếm"
          />
          {keySearch !== '' && (
            <TouchableOpacity onPress={removeKeySearch} style={styles.iconBack}>
              <AntDesign name="close" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

SearchComponent.propTypes = {};

export default SearchComponent;
