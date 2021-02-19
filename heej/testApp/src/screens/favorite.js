import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Favorlist} from '../components/todoList.js';

export default function Favorite() {
  // const [favors, setFavors] = useState([]);

  // const headers = {
  //   'Content-type': 'application/json',
  // };

  // const getFavorsFromApi = async () => {
  //   axiosInstance
  //     .get('/favorlists/1', {headers})
  //     .then(function (response) {
  //       setFavors(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .then(function () {});
  // };

  // useEffect(() => {
  //   // console.log('???');
  //   getFavorsFromApi();
  // }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>즐겨찾기</Text>
      </View>

      <Favorlist></Favorlist>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
  },
  titleView: {
    marginTop: 26,
    width: 335,
    height: 30,
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
