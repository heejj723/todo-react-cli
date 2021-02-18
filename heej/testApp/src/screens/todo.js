import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground, Alert, FlatList, TouchableOpacity} from 'react-native';
import TodoInsert from '../components/todoInsert.js';
import {TodoList} from '../components/todoList.js';
import axios from 'axios';

export default function Todo() {
  return (
    <View style={styles.mainView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>To Do List</Text>
      </View>

      <TodoInsert></TodoInsert>

      <TodoList></TodoList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
  },
  titleView: {
    marginTop: 24,
    width: 335,
    height: 30,
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
