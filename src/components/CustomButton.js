import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

const TestButton = (props)=>{
    return(
        <TouchableOpacity
        style={createPage.button}
        onPress={props.onPressHandler}
        >
            <Text style={createPage.inputText}>
            {props.title}
            </Text>
      </TouchableOpacity>
    )
}


const createPage = StyleSheet.create({
    
    inputText:{
      fontSize:18,
    },
    button:{
      width:150,
      backgroundColor:'#00ff00',
      alignItems:'center',
      justifyContent:'center',
      height:50,
    },
  });

export default TestButton;