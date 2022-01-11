import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import SpeakScreen from '../screens/SpeakScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfigHeader from './configHeader';
import MessScreen from '../screens/MessScreen';
import ConfigMessage from './ConfigMessage';

const styles = StyleSheet.create({
  nav: {
    padding: 10,
  },
  
});
function NavBottom(props) {
  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Khóa học') {
              iconName = 'book-outline';
            } else if (route.name === 'Speak') {
              iconName = 'mic';
            } else if (route.name === 'Message') {
              iconName = 'chatbox-ellipses-outline';
            } else {
              iconName = 'ios-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff849c',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          options={{headerTitle: props => <ConfigHeader {...props} />}}
          component={HomeScreen}
        />
        <Tab.Screen name="Khóa học" component={CourseScreen} />
        <Tab.Screen name="Speak" component={SpeakScreen} />
        <Tab.Screen name="Message" options={{headerShown: false}} component={MessScreen} />
        <Tab.Screen name="Cá nhân" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

NavBottom.propTypes = {};

export default NavBottom;
