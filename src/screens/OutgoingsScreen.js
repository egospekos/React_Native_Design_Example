import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function OutgoingsScreen(){
    return(
      <View>
        <Text style={styles.text}>
        OutgoingsScreen'e hoşgeldiniz
        </Text>
        <Text >
        başvurulan/like atılan eventleri çekcez. kabul edilenler'in bc'sini yeşil vb yapcaz
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  text:{
    color:'red',
  }
});