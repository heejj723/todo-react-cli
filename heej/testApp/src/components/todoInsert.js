import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import {TodoContext, DispatchContext} from '../../App';
import axiosInstance from '../apiRequests/axiosInstance';

const insertTodoItemApi = async (todoText, dispatch) => {
  newTodoItem = {
    id: null,
    dsc: todoText,
    checked: false,
    detail: null,
  };

  try {
    const response = await axiosInstance.post('/todolist/', newTodoItem);

    dispatch({type: 'ADD_DATA', id: response.data.id, dsc: todoText, checked: false, detail: null});
  } catch (error) {
    console.log({error});
  }
};

const TodoInsert = () => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todos = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);

  const addTodoHandler = () => {
    if (newTodoItem === '') {
      Alert.alert('할일을 입력해 주세요', '새로운 할일을 입력해 보세요', [
        {
          text: '확인',
        },
      ]);
    } else if (todos.find((item) => item.dsc === newTodoItem) !== undefined) {
      Alert.alert('중복된 할일입니다', '새로운 할일을 입력해 보세요', [
        {
          text: '확인',
        },
      ]);
    } else {
      //네트워크 리퀘스트 날리는곳
      insertTodoItemApi(newTodoItem, dispatch);
      setNewTodoItem('');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 16,
        height: 45,
      }}
    >
      <View
        style={{
          marginRight: 12,
          flex: 5,
        }}
      >
        <TextInput
          style={styles.inputField}
          placeholder={'새로운 할일을 입력하세요'}
          onChangeText={(input) => {
            setNewTodoItem(input);
          }}
          value={newTodoItem}
        ></TextInput>
        <View
          style={{
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          }}
        />
      </View>

      {/* /**할일 추가 버튼 */}
      <TouchableOpacity style={styles.button} title={'추가'} onPress={addTodoHandler}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {' '}
          추가{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    width: 225,
    height: 20,
    marginVertical: 5,
    justifyContent: 'center',
    fontSize: 20,
  },

  button: {
    flex: 2,
    backgroundColor: 'black',

    width: 68,
    height: '100%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatListContainer: {
    flex: 1,
    color: 'black',
    marginTop: 36,
    width: '100%',
  },

  flatListItemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 4,
    borderColor: 'black',
    color: 'blue',
    borderWidth: 1,
    alignItems: 'center',
  },

  favButton: {
    margin: 12,
    width: 24,
    height: 24,
  },
});
export default TodoInsert;
