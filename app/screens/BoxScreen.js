import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyleone}>child1</Text>
      <Text style={styles.textStyletwo}>child2</Text>
      <Text style={styles.textStylethree}>child3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200, 
      alignItems: 'center',
      // flexDirection: 'row',
      // justifyContent: 'flex-start',
    },
    textStyleone: {
      borderWidth: 3,
      borderColor: 'red',
      //flex: 4,
    },
    textStyletwo: {
      borderWidth: 3,
      borderColor: 'red',
      // alignSelf: 'center',
      // alignSelf: 'flex-start',
      alignSelf: 'flex-end',
      alignSelf: 'stretch',
      textAlign: 'right',
      // flex: 4,
      margin:10,
    },
    textStylethree: {
      borderWidth: 3,
      borderColor: 'red',
      // flex: 2,
    },
  });
  export default BoxScreen;
  

