import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet,View} from 'react-native';

// function Screen({children}) {
//     return (
//         <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
//     );
// }
function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: "yellow",
        flex: 1,
    }
})
export default Screen;