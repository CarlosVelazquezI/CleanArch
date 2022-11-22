/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import App2 from './App2';
import registrerScreen from './src/ui/navigation';
import "reflect-metadata";
import  login  from './src/ui/screens/login/login';

registrerScreen();

const loginJson = new login();
loginJson.setLogin();

 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'homeScreen',
               passProps:{
                loginJson: loginJson.loginJson,
               }
              
            }
          }
        ]
      }
    }
  });
});
