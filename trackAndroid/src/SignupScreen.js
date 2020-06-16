import React, {useContext} from 'react'
import {View, KeyboardAvoidingView,   StyleSheet,Button} from 'react-native'
import {Context as AuthContext} from "./context/authContext";
import AuthForm from "./components/AuthForm";
import NavLink from "./components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = ({navigation})=>{
    const {state, signup, clearErrorMessage} = useContext(AuthContext);


    return (
        <KeyboardAvoidingView style={styles.container}>
          <NavigationEvents onWillBlur={clearErrorMessage}/>
          <AuthForm headerText="Sign up for Tracker"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    onSubmit={signup}
          />
          <NavLink routName="Signin" text="Already have account sign in instead"/>
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () =>{
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

});

export default SignupScreen;
