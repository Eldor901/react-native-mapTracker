import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Context as AuthContext} from "./context/authContext";

const ResolveAuth = () => {
    const {tryLocalSignIn} = useContext(AuthContext);


    useEffect(()=>{
        tryLocalSignIn();
    }, []);


    return null;
};

const styles = StyleSheet.create({

});

export default ResolveAuth;
