import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function EventDetailScreen({ route, navigation }){
  const { eventId} = route.params;
  
    return(
      <View>
        <Text>Event Details {eventId} no lu eventten geldin</Text>
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