/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { Component, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

 import { SafeAreaView, View } from 'react-native';
 import { observer } from 'mobx-react';
 import "reflect-metadata";
 import  CoreScreen  from '../coreUI/core';

 
 class homeScreen extends Component{
   constructor(props: {} | Readonly<{}>){
     super(props);
     this.state = {
        loginJson: this.props.loginJson,
       core:[]
     }
 
   }
 
   render(){
     const { core } = this.state;
 
     return(
       <SafeAreaView style={{ flex: 1 }}>
       <View style={{ paddingHorizontal: 20 }}>
         { core }
       </View>
     </SafeAreaView>
     );
   }
 
   setJsonInput = () =>{

     const core = <CoreScreen jsonInput={ this.state.loginJson } />
 
     this.setState({
       core: core
 
     });
   }
 
 
   componentDidMount = () =>{
     this.setJsonInput();
 
   }
 }
 
 
 export default observer(homeScreen);
 