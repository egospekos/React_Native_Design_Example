import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function MyProfileScreen(){
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>İsim</Text>
          </View>
          <View style={styles.value}>
            <Text>Oğuz Türk</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Cinsiyet</Text>
          </View>
          <View style={styles.value}>
            <Text>Erkek</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Yaş</Text>
          </View>
          <View style={styles.value}>
            <Text>23</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Şehir</Text>
          </View>
          <View style={styles.value}>
            <Text>İzmir</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Okul</Text>
          </View>
          <View style={styles.value}>
            <Text>Ege Üniversitesi</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Badi sayısı</Text>
          </View>
          <View style={styles.value}>
            <Text>8</Text>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  text:{
    color:'red',
  },
  row:{
    flexDirection:'row',
  },
  label:{
    backgroundColor:'gray',
    width:100,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  value:{
    borderRadius:3,
    borderWidth:2,
    width:100,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
});