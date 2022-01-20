/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistor, { store } from './src/app/store';
import NavBottom from './src/container/navBottom';
import CourseScreen from './src/screens/CourseScreen';
import LoginScreen from './src/screens/LoginScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';
import MessScreen from "./src/screens/MessScreen";
import NotificationScreen from './src/screens/NotificationScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingScreen from './src/screens/SettingScreen';
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 const Stack = createNativeStackNavigator();
 const App = () => {
   const HomeScreen = () => {
     return <NavBottom />
   };
   return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <View style={styles.container}>
           <NavigationContainer>
             <Stack.Navigator>
               <Stack.Screen
                 name="Home"
                 component={HomeScreen}
                 options={{headerShown: false}}
               />
               <Stack.Screen
                 name="Search"
                 component={SearchScreen}
                 options={{headerShown: false}}
               />
               <Stack.Screen
                 options={{
                   headerTitle: 'Thông báo',
                 }}
                 name="Notification"
                 component={NotificationScreen}
               />
               <Stack.Screen name="Login" component={LoginScreen} /> 
               <Stack.Screen
                 options={{
                   headerTitle: 'Khóa học',
                 }}
                 name="Khóa học"
                 component={CourseScreen}
               />
               <Stack.Screen
                 options={{headerShown: false}}
                 name="Message"
                 component={MessScreen}
               />
               <Stack.Screen
                 options={{headerShown: false}}
                 name="MessageDetail"
                 component={MessageDetailScreen}
               />
               <Stack.Screen
                 options={{headerShown: false}}
                 name="setting"
                 component={SettingScreen}
               />
             </Stack.Navigator>
           </NavigationContainer>
         </View>
       </PersistGate>
     </Provider>
   );
 };
 
 export default App;
 
 