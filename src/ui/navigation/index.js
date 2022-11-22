import { Navigation } from 'react-native-navigation';
import userScreen from '../screens/user/userScreen';
import homeScreen from '../screens/index'


export default function registrerScreen(){
    Navigation.registerComponent('userScreen', () => userScreen);
    Navigation.registerComponent('homeScreen',() => homeScreen);
}