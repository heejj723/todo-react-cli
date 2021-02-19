import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import starImage_off from '../images/rectangle.png';
import starImage_on from '../images/rectangle_true.png';
import {TodoContext, DispatchContext} from '../../App';
import axiosInstance from '../apiRequests/axiosInstance';

const deleteItemApi = async (id, dispatch) => {
  console.log('in delete: ', id);
  try {
    const response = await axiosInstance.put('/todolist/delete/' + id);
    dispatch({
      type: 'DELETE_DATA',
      id: id,
    });
  } catch (error) {
    console.log({error});
  }
};

function TodoDetail({navigation, route}) {
  const {id, dsc, checked, detail} = route.params;

  console.log('in TodoDetail, params(id): ', id);
  const dispatch = useContext(DispatchContext);
  const todos = useContext(TodoContext);

  const deleteHandler = () => {
    Alert.alert('삭제', '할일을 삭제하시겠습니까?', [
      {
        text: '취소',
      },
      {
        text: '확인',
        onPress: () => {
          deleteItemApi(id, dispatch);
          navigation.navigate('TabNavigator', {
            screen: 'Todo',
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          {/* 별 그림 */}
          <ImageBackground
            source={checked ? starImage_on : starImage_off}
            style={{
              width: 24,
              height: 24,
              margin: 8,
            }}
          ></ImageBackground>
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>{dsc}</Text>
          </View>
        </View>
        {/* 상세 내용 보여주는 곳 */}
        <View style={styles.detailView}>
          <Text style={{fontSize: 14}}> {detail}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          {/* 수정하기 버튼 */}
          <TouchableOpacity style={styles.editButton}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('EditScreen', {id: id});
              }}
            >
              {' '}
              수정{' '}
            </Text>
          </TouchableOpacity>
          {/* 삭제하기 버튼 */}
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText} onPress={deleteHandler}>
              {' '}
              삭제{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TodoDetail;

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  titleView: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  titleTextView: {
    marginRight: 75,
    width: 248,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailView: {
    width: '100%',
    height: 600,
    backgroundColor: '#f7f7f9',
    paddingHorizontal: 16,
    paddingTop: 18,
    marginVertical: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  editButton: {
    backgroundColor: 'black',

    width: 75,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteButton: {
    backgroundColor: '#e75f3d',
    width: 75,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
