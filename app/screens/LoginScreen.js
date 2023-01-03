import React, {useState} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/forms/ErrorMessage';

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

function LoginScreen(props) {
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
         <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")}/> 
        {/* <Formik */}
        <AppForm
            initialValues={{email: '', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
        
                <AppFormField
                    autoCapitalize="none" // First letter will not be capitalized
                    autoCorrect={false} // we dont want corrent spelling
                    icon="email"
                    keyboardType="email-address"
                    
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
                /> 
               
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
        
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
     
        <SubmitButton title="Login" />
      
        </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },   
});
export default LoginScreen;
        
