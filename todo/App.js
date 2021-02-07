import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  TextInput,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.titlebox}>
        <Text style={styles.title}>Todo App</Text>
      </View>
    );
  }
}

const TodoInput = (props) => {
  return (
    <TextInput
    maxLength={40}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    },
  
  titlebox: {
    height: 30,
    width: 335,
    marginHorizontal: 20,
    marginTop: 24,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
  },

  inputField: {
    width: 225,
    height: 20,
    marginTop: 21,
    marginLeft: 20, 
    marginRight: 12,
  }
})