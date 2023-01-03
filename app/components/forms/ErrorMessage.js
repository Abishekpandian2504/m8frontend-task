import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

// function ErrorMessage({error}) {
//     if(!error) return null;
function ErrorMessage({error, visible}) {
    if(!visible || !error) return null;

    
    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}
const styles = StyleSheet.create({
    error: { color: "red" },
});

export default ErrorMessage;
