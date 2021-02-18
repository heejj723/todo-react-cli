import React, {useReducer, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TodoScreen from '../screens/todo';
import FavoriteScreen from '../screens/favorite';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {reducer} from '../reducer/reducer';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();

export const NavigationContext = React.createContext();

export default function Tabs({navigation}) {
  //state.data 를 조회
  // console.log('topNavigator: ', todos);

  return (
    <NavigationContext.Provider value={navigation}>
      <Tab.Navigator
        options={{headerShown: false}}
        style={styles.Tab}
        tabBarOptions={{
          labelStyle: {fontSize: 20, fontWeight: 'bold'},
        }}
      >
        <Tab.Screen name="Todo" children={() => <TodoScreen />} options={{tabBarLabel: '할일'}} />
        <Tab.Screen name="Favorite" children={() => <FavoriteScreen />} options={{tabBarLabel: '즐겨찾기'}} />
      </Tab.Navigator>
    </NavigationContext.Provider>
  );
}

const styles = StyleSheet.create({
  Tab: {
    paddingTop: 44,
    shadowColor: 'black',
  },
});
