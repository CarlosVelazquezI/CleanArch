import { Navigation } from 'react-native-navigation';

import HomeScreen from '../screens/home/HomeScreen';

export default function registrerScreen(){
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
}