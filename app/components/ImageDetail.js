// import React from 'react';
// import { Text, StyleSheet } from 'react-native';

// const ImageDetail = () => {
//   return (
//     <Text>Image Detail</Text>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageDetail;

import React from 'react';
import { Text, Image, StyleSheet , View } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
  return (
      <View>
          <Image source={props.imageSource}/>
    <Text>{props.title}</Text>
    <Text>Image Score {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

