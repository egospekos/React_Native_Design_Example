import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function UsersDetailScreen({ route, navigation }){
  const { userId} = route.params;
  
    return(
      <View>
        <Text>Users Details { userId} nolu user</Text>
      </View>
    );
  }

  const eventStyles = StyleSheet.create({
    card:{
      margin:5,
      backgroundColor:'red',
      borderRadius:10,
    },
  });