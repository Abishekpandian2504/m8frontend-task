import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

  const HomeScreen = ({ navigation }) => {
  // console.log(props);
 // console.log(props.navigation);
 // console.log(props.navigation.navigate('List'))

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      
      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to AccountScreen Demo"
        onPress={() => navigation.navigate('Account')}
        
      />
        
       <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to CounterScreen Demo"
        onPress={() => navigation.navigate('Counter')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to ColorScreen Demo"
        onPress={() => navigation.navigate('Color')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to SquareScreen Demo"
        onPress={() => navigation.navigate('Square')}
        
      />

      

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to BoxScreen Demo"
        onPress={() => navigation.navigate('Box')}
        
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
 
});

export default HomeScreen;
