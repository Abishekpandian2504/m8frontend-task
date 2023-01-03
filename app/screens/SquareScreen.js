//1st
// import React from "react";
// import { Text, StyleSheet } from "react-native";

// const SquareScreen = () => {
//   return (
//    <Text>Square Screen</Text>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

//2nd
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const SquareScreen = () => {
//   return (
//     <View>
//       <ColorCounter />
//       <ColorCounter />
//       <ColorCounter />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

 //3rd
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const SquareScreen = () => {
//   return (
//     <View>
//       <ColorCounter color="Red" />
//       <ColorCounter color="Blue" />
//       <ColorCounter color="Green" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

//3rd
// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   console.log(red);

//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setRed(red + 1)}
//         onDecrease={() => setRed(red - 1)}
//         color="Red"
//       />
//       <ColorCounter color="Blue" />
//       <ColorCounter color="Green" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;


// 4th
// passing parent state variable through call back function to child
// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

// //   console.log(red);

//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setRed(red + COLOR_INCREMENT )}
//         onDecrease={() => setRed(red - COLOR_INCREMENT)}
//         color="Red"
//       />
//       <ColorCounter 
//          onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
//          onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
//          color="Blue" 
//       />
//       <ColorCounter
//          onIncrease={() => setGreen(green + COLOR_INCREMENT)}
//          onDecrease={() => setGreen(green - COLOR_INCREMENT)}
//          color="Green" 
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

//5th
// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

// //   console.log(red);

// const setColor = (color, change) => {
//     // color === 'red', 'green', 'blue'
//     // change === +15, -15
  
//     if (color === 'red') {
//       if (red + change > 255 || red + change < 0) {
//         return;
//       }
//       else {
//         setRed(red + change);
//       }
//     }
//   };
  
//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setColor(red + COLOR_INCREMENT )}
//         onDecrease={() => setColor(red - COLOR_INCREMENT)}
//         color="Red"
//       />
//       <ColorCounter 
//          onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
//          onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
//          color="Blue" 
//       />
//       <ColorCounter
//          onIncrease={() => setGreen(green + COLOR_INCREMENT)}
//          onDecrease={() => setGreen(green - COLOR_INCREMENT)}
//          color="Green" 
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

//6th
// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

// // const setColor = (color, change) => {
// //   // color === 'red', 'green', 'blue'
// //   // change === +15, -15

// //   switch (color ) { 
// //     case 'red': 
// //       if (red + change > 255 || red + change < 0) {
// //         return;
// //       }
// //       else {
// //         setRed(red + change);
// //       }
// //       return;
// //   }

// // };

// const setColor = (color, change) => {
//   // color === 'red', 'green', 'blue'
//   // change === +15, -15

//   switch (color ) { 
//     case 'red': 
//       red + change > 255 || red + change < 0 ?   null : setRed(red + change);
//       return;
//     case 'green': 
//       green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//       return;
//     case 'blue': 
//       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//       return;
//     default:
//       return;
//   }
// };

//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setColor('red', COLOR_INCREMENT)}
//         onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//         color="Red"
//       />
//       <ColorCounter
//         onIncrease={() => setColor('blue',  COLOR_INCREMENT)}
//         onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
//         color="Blue"
//       />
//       <ColorCounter
//         onIncrease={() => setColor('green',  COLOR_INCREMENT)}
//         onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
//         color="Green"
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;


//7th rough sumaaa
// import React, { useReducer } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

// const reducer = (state) => {
    
//   };
 

// const SquareScreen = () => {

//   const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  

//     const reducer = {state} => {

//     };



//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => }
//         onDecrease={() => }
//         color="Red"
//       />
//       <ColorCounter
//         onIncrease={() => }
//         onDecrease={() => }
//         color="Blue"
//       />
//       <ColorCounter
//         onIncrease={() => }
//         onDecrease={() => }
//         color="Green"
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

// // 10th
// // Implementing Reducer
// import React, { useReducer } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ColorCounter from '../components/ColorCounter';

// const COLOR_INCREMENT = 15;

// const reducer = (state, action) => {
//   switch(action.colorToChange) {
//     case 'red':
//       return { ...state, red: state.red + action.amount };
//     case 'green':
//       return { ...state, green: state.green + action.amount };
//     case 'blue':
//       return { ...state, blue: state.blue + action.amount };
//     default:
//       return state;
//   }
// };
// const SquareScreen = () => {
//   const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
//   // any time time state object changes, SquareScreen function will be called, dispatch function will do that. we can give any name to dispatch function.

//     // Destructuing
//     const { red, green, blue } = state;
//     return (
//       <View>
//         <ColorCounter
//           onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}    
//           color="Red"
//         />
//         <ColorCounter
//           onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}       
//           color="Blue"
//         />
//         <ColorCounter
//           color="Green"
//           onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}    
//         />
//         <View
//           style={{
//             height: 150,
//             width: 150,
//             backgroundColor: `rgb(${red},${green},${blue})`
//           }}
//         />
//       </View>
//     );
//   };

// const styles = StyleSheet.create({});

// export default SquareScreen;


// 11th (validation)
// we have not yet validated the colors
// modifying Reducer
// import React, { useReducer } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ColorCounter from '../components/ColorCounter';

// const COLOR_INCREMENT = 15;

// const reducer = (state, action) => {
//   switch(action.colorToChange) {
//     case 'red':
//       // it gives error, as per rule , the state argument should return object not empty.
//       // to avoid this, instead of sending simple return; return state.
//       // if (state.red + action.amount > 255 ||
//       //   state.red + action.amount < 0) {
//       //     //return ;
//       //     return state;
//       //   }
//       // return { ...state, red: state.red + action.amount };
//       return state.red + action.amount > 255 || state.red + action.amount < 0
//       ? state
//       : { ...state, red: state.red + action.amount };
//   case 'green':
//     return state.green + action.amount > 255 || state.green + action.amount < 0
//     ? state
//     : 
//     { ...state, green: state.green + action.amount };
//   case 'blue':
//     return state.blue + action.amount > 255 || state.blue + action.amount < 0
//     ? state
//     : { ...state, blue: state.blue + action.amount };
//   default:
//     return state;
// }
// };
// const SquareScreen = () => {
//   const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
//   // any time time state object changes, SquareScreen function will be called, dispatch function will do that. we can give any name to dispatch function.

//     // Destructuing
//     const { red, green, blue } = state;
//     return (
//       <View>
//         <ColorCounter
//           onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}    
//           color="Red"
//         />
//         <ColorCounter
//           onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}       
//           color="Blue"
//         />
//         <ColorCounter
//           color="Green"
//           onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}  
//           onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}    
//         />
//         <View
//           style={{
//             height: 150,
//             width: 150,
//             backgroundColor: `rgb(${red},${green},${blue})`
//           }}
//         />
//       </View>
//     );
//   };

// const styles = StyleSheet.create({});

// export default SquareScreen;

//final
import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({});

export default SquareScreen;







