import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import TodoListItem from './todoListItem.js';
import {TodoContext} from '../../App';

// 할일 탭에서 반환됨
export const TodoList = () => {
  const todos = useContext(TodoContext);
  // console.log('todolist; todos: ', todos);

  return (
    // 1. FlatList
    //      2가지 필수속성
    //      1)data -FlatList가 보여줄 대량의 데이터 */}
    //      2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
    //      3)keyExtractor={item=>item.name} - 오류는 아니지만 경고뜸 -> name 이 unique 한 값이 아닐 수 있기 때문.

    <FlatList
      style={{
        marginTop: 36,
        height: '100%',
      }}
      data={todos}
      keyExtractor={({dsc}, index) => dsc}
      renderItem={({item}) => (
        <TodoListItem id={item.id} dsc={item.dsc} checked={item.checked} detail={item.detail}></TodoListItem>
      )}
    ></FlatList>
  );
};

// 즐겨찾기 탭에서 반환 됨
export const Favorlist = () => {
  const todos = useContext(TodoContext);
  const favors = todos.filter((todo) => todo.checked === true);
  // console.log('Favorlist: ', favors);

  return (
    <FlatList
      style={{
        marginTop: 36,
        height: '100%',
      }}
      data={favors}
      keyExtractor={({dsc}, index) => dsc}
      renderItem={({item}) => (
        <TodoListItem id={item.id} dsc={item.dsc} checked={item.checked} detail={item.detail}></TodoListItem>
      )}
    ></FlatList>
  );
};
