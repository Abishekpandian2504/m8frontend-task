// // import React from 'react';
// // import { Text , StyleSheet, Platform } from 'react-native';

// // function AppText({children, style}) {
// //     return (
// //         <Text style={[styles.text, style]}>{children}</Text>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     text: {
// //         color: "tomato",
// //         ...Platform.select({
// //             ios: {
// //                 fontSize: 20,
// //                 fontFamily: "Avenir"
// //             },
// //             android: {
// //                 fontSize: 18,
// //                 fontFamily: "Roboto"
// //             },
// //         }),
// //     },  
// // });
// // export default AppText; 

// import React from 'react';
// import { Text , StyleSheet, Platform } from 'react-native';

// import defaultStyles from '../config/styles';

// function AppText({children, style, ...otherProps }) {
//     return (
//         // <Text style={[styles.text, style]}>{children}</Text>
//         <Text style={[defaultStyles.text, style]}>{children}</Text>
//     );
// }
// export default AppText; 


// import React from 'react';
// import { Text , StyleSheet, Platform } from 'react-native';

// import defaultStyles from '../config/styles';

// function AppText({children, style}) {
//     return (
//         // <Text style={[styles.text, style]}>{children}</Text>
//         <Text style={[defaultStyles.text, style]}>{children}</Text>
//     );
// }

// // const styles = StyleSheet.create({
// //     text: {
// //         color: "tomato",
// //         ...Platform.select({
// //             ios: {
// //                 fontSize: 20,
// //                 fontFamily: "Avenir"
// //             },
// //             android: {
// //                 fontSize: 18,
// //                 fontFamily: "Roboto"
// //             },
// //         }),
// //     },  
// // });

// // const styles = StyleSheet.create({
// //     text: {
// //         fontSize: 18,
// //         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
// //     },  
// // });

// export default AppText; 

// 2nd
import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
