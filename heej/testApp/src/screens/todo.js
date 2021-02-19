import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground, Alert, FlatList, TouchableOpacity} from 'react-native';
import TodoInsert from '../components/todoInsert.js';
import {TodoList} from '../components/todoList.js';

export default function Todo() {
  console.log('Rendered; Todo screen!! ');
  return (
    <View style={styles.mainView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>To Do List</Text>
      </View>
      <TodoInsert />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
