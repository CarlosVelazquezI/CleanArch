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

import registrerScreen from './src/ui/navigation';
import "reflect-metadata";

registrerScreen();


 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            }
          }
        ]
      }
    }
  });
});
