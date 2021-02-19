import 'react-native-gesture-handler';
import React, {useReducer, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TopTabNavigator from './src/navigation/top_navigator';
import axios from 'axios';
import {reducer} from './src/reducer/reducer';
import TodoDetailScreen from './src/screens/todo_detail';
import TodoEditScreen from './src/screens/todo_edit';

const DetailStack = createStackNavigator();
const RootStack = createStackNavigator();

// context 를 생성함
export const TodoContext = React.createContext('');
export const DispatchContext = React.createContext();

//분리
// 할일 상세보기 - 수정하기 Stack
function InDetailStack() {
  return (
    <DetailStack.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 30, fontWeight: 'bold'},
      }}
    >
      <DetailStack.Screen
        name="DetailScreen" //screen 뺌
        component={TodoDetailScreen} //
        options={{title: '할일', headerTitleStyle: {fontSize: 20}}}
      />
      <DetailStack.Screen
        name="EditScreen"
        component={TodoEditScreen}
        options={{title: '수정', headerTitleStyle: {fontSize: 20}}}
      />
    </DetailStack.Navigator>
  );
}

// TabNavigation 과 IndetailStack 을 연결함
function InRootStack() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="TabNavigator" component={TopTabNavigator} options={{title: ' '}} />
      <RootStack.Screen name="DetailStack" component={InDetailStack} options={{title: ' '}} />
    </RootStack.Navigator>
  );
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/todolistservices/api',
    timeout: 1000,
  });
  const headers = {
    'Content-type': 'application/json',
  };

  const fetchTodos = async () => {
    try {
      const response = await axiosInstance.get('/todolists');
      // console.log('topNavigator: ', response.data);
      if (response.status === 200) {
        dispatch({type: 'SET_DATA', data: response.data});
      }
    } catch (error) {
      console.error({error});
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        <NavigationContainer>
          <InRootStack></InRootStack>
        </NavigationContainer>
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
