// import React from "react";
// import { Text, StyleSheet } from "react-native";

// const ColorCounter = ( ) => {
//   return (
//       <Text>Square Screen</Text>
//   );
// };

// const styles = StyleSheet.create({});

// export default ColorCounter;

// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const ColorCounter = ( ) => {
//   return (
//       <View>
//         <Text>Red</Text>
//         <Button title={`Increase Red`} />
//         <Button title={`Decrease Red`} />
//       </View>
//   );
// };

// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const ColorCounter = ({ color }) => {
//   return (
//       // please check, we are using backtick char
//     <View>
//       <Text>{color}</Text>
//       <Button title={`Increase ${color}`} />
//       <Button title={`Decrease ${color}`} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ColorCounter;


// 4th
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;


