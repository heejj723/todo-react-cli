import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../screens/todo';
import TodoDetailScreen from '../screens/todo_detail';
import TodoEditScreen from '../screens/todo_edit';

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
