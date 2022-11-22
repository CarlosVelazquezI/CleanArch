/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect, useMemo, type PropsWithChildren} from 'react';
 import  { userViewModel } from './userViewModel';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import { observer } from 'mobx-react';
import  {   container } from '../../../inversify.config';
import "reflect-metadata";



 const userScreen = () => {

  const view = container.get<userViewModel>('userViewModel');

 
   const fight = () => {
    view.setNombre("prueba");
    console.log(view.nombre)

   };


 
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   
 
   return (
    
     <SafeAreaView style={backgroundStyle}>
       <StatusBar
         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
         backgroundColor={backgroundStyle.backgroundColor}
       />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
           <View style={{ flex: 1, backgroundColor:'red'}}>
             <Text>
              
             </Text>
             <Button
              onPress={fight}
              title="Learn More"
              color="#fff"
              accessibilityLabel="Learn more about this purple button"
            />
           </View>
           <>
           
           </>
           
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default observer(userScreen);
 