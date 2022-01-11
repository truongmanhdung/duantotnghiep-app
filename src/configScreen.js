import CourseScreen from './screens/CourseScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MessScreen from './screens/MessScreen';
import ProfileScreen from './screens/ProfileScreen';
import SpeakScreen from './screens/SpeakScreen';
const screens = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Search',
    component: ProfileScreen,
  },
];

export const bottomScreen = [
  {
    name: 'Home',
    component: HomeScreen,
    IconName: 'home',
  },
  {
    name: 'Khóa học',
    component: CourseScreen,
    IconName: 'book-outline',
  },
  {
    name: 'Speak',
    component: SpeakScreen,
    IconName: 'mic',
  },
  {
    name: 'Message',
    component: MessScreen,
    IconName: 'grid',
  },
  {
    name: 'Khóa học',
    component: ProfileScreen,
    IconName: 'ios-person-outline',
  },
];

export default screens;
