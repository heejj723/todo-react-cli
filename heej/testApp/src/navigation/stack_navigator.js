import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../screens/todo';
import TodoDetailScreen from '../screens/todo_detail';
import TodoEditScreen from '../screens/todo_edit';

import {createAppContainer} from 'react-navigation';

const StackNavigator = createStackNavigator(
  {
    Details: TodoDetailScreen,
    Edit: TodoEditScreen,
  },
  {
    initialRouteName: 'Todo',
  },
);

export default StackNavigator;
