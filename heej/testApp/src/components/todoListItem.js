import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground, Alert, FlatList, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import {useState} from 'react';
import starImage_off from '../images/rectangle.png';
import starImage_on from '../images/rectangle_true.png';
import {useEffect} from 'react';
import axios from 'axios';
import {TodoContext, DispatchContext} from '../../App';
import {useContext} from 'react';
import {NavigationContext} from '../navigation/top_navigator';

function TodoListItem({id, dsc, checked, detail}) {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/todolistservices/api',
    timeout: 1000,
  });

  const dispatch = useContext(DispatchContext);
  const todos = useContext(TodoContext);

  console.log('todolist item:', id);

  // Api에 즐겨찾기 추가/삭제 요청을 보냄
  const setFavorApi = async () => {
    try {
      const response = await axiosInstance.put('/todolist/edit/' + id);
      dispatch({type: 'EDIT_FAVOR', id: id, dsc: dsc, checked: !checked, detail: detail});
      console.log('item: ', todos);
    } catch (error) {
      console.log({error});
    }
  };

  // 별 버튼을 클릭했을 때 실행 됨

  // NavigationContext 사용
  const navigation = useContext(NavigationContext);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('DetailStack', {
          screen: 'DetailScreen',
          // 매개로 id 만 넘긴다
          params: {id: id, dsc: dsc, checked: checked, detail: detail},
        })
      }
    >
      <TouchableOpacity style={styles.favButton} onPress={setFavorApi}>
        <ImageBackground
          source={checked ? starImage_on : starImage_off}
          style={{
            width: 24,
            height: 24,
          }}
        ></ImageBackground>
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'normal',
        }}
      >
        {' '}
        {dsc}{' '}
      </Text>
      <Text> {id}</Text>
    </TouchableOpacity>
  );
}

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    marginTop: 36,
    backgroundColor: 'blue',
    height: 500,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'black',
  },

  item: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 4,
    borderColor: 'black',
    color: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 16,
  },

  favButton: {
    margin: 12,
    width: 24,
    height: 24,
  },
});
