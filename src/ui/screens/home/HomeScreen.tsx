import React, { useEffect, useState, useMemo } from 'react';

import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import "reflect-metadata";
import { container } from '../../../inversify.config';
import { HomeViewModel } from './HomeViewModel';

const HomeScreen = () => {
  // const view = useMemo(
  //   () => container.get<HomeViewModel>('HomeViewModel'),
  //   []
  // ) 

  const view = container.get<HomeViewModel>('HomeViewModel');
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View>
          {
            view.data.map((item) => (
              <View key={item.id} style={{ flexDirection: 'column', borderWidth: .2, marginVertical: 10, borderRadius: 10, }}>
                {
                  item.data.map((item2, index) => (
                    <View key={index} style={{ padding: 20, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: item2.cabecera == true ? "#ccc" : "transparent" }}>
                      <View style={{ flexDirection: item2.cabecera == true ? "row" : "column", justifyContent:'space-around', borderBottomWidth: item2.cabecera == true ? 0 : .2 }}>
                        <Text style={{ paddingVertical: 5, fontWeight: '700', }}>{item2.title}</Text>
                        <Text style={{ paddingVertical: 5, }}>{item2.description}</Text>
                      </View>
                    </View>
                  ))
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default observer(HomeScreen);
