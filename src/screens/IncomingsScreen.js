import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function MyProfileScreen(){
    return(
      <View>
        <Text style={styles.text}>
        MyProfileScreen'e hoşgeldiniz
        </Text>
        <Text >
        adım soyadım koycaz
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  text:{
    color:'red',
  }
});