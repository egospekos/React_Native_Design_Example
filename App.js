import React,{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>Kahve masasında kadın eksik</Text>
          <Text style={styles.cardCategory}>Kahve</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardDesc}>Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    margin:5,
    backgroundColor:'#000000',
    borderRadius:10,
  },
  cardHeader:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  cardName:{
    paddingLeft:10,
    paddingTop:5,
    color: '#ffffff',
    flex:4,
  },
  cardCategory:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:10,
    marginRight:7,
    marginTop:3,
  },
  cardBody:{
    padding:15,
  },
  cardDesc:{
    color:'white',
  }
});

export default App;
