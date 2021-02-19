import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Alert,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import starImage_on from '../images/rectangle_true.png';
import starImage_off from '../images/rectangle.png';
import axios from 'axios';
import {TodoContext, DispatchContext} from '../../App';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/todolistservices/api',
  timeout: 1000,
});

const editDetailApi = async (editedItem, dispatch) => {
  console.log('inEditDataApi: ', editedItem);

  try {
    const response = await axiosInstance.put('/todolist/edit/', editedItem);
    console.log(response.status);
    console.log(response.data);
    dispatch({
      type: 'EDIT_DATA',
      id: editedItem.id,
      dsc: editedItem.dsc,
      checked: editedItem.checked,
      detail: editedItem.detail,
    });
  } catch (error) {
    console.log({error});
  }
};

function TodoEdit({navigation, route}) {
  const {id} = route.params;
  console.log('id in TodoEdit id: ', id);

  const todos = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);
  //   console.log('todos in Todo Edit: ', todos);
  const {idx, dsc, checked, detail} = todos.find((item) => item.id === id);

  const [newDetail, setNewDetail] = useState(detail);

  const detailInputHandler = (newTodo) => {
    console.log(newTodo);
    setNewDetail(newTodo);
  };

  const submitButtonHandler = () => {
    console.log('submitButtonHandler');
    editedItem = {
      id: id,
      dsc: dsc,
      checked: checked,
      detail: newDetail,
    };
    console.log('editedItem: ', editedItem);
    editDetailApi(editedItem, dispatch);
    // // 이전 화면으로 돌아가기
    // navigation.pop();
    navigation.navigate('DetailScreen', editedItem);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}> {dsc} </Text>
          </View>
        </View>
        <View style={styles.detailView}>
          <TextInput
            style={styles.editTextInput}
            multiline={true}
            // onContentSizeChange={(event) => {
            //   this.setState({height: event.nativeEvent.contentSize.height});
            // }}
            onChangeText={detailInputHandler}
            placeholder={'텍스트를 입력하세요'}
            value={newDetail}
          >
            {/* {detail} */}
          </TextInput>
        </View>
        <TouchableOpacity
          //   style={newDetail === detail ? styles.submitButton_grey : styles.submitButton_black}
          style={styles.submitButton_black}
          onPress={submitButtonHandler}
        >
          <Text style={styles.buttonText}> 확인 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default TodoEdit;

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
  },

  editTextInput: {
    width: '100%',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  submitButton_grey: {
    width: '100%',
    height: 60,
    backgroundColor: '#b2b2b2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButton_black: {
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
