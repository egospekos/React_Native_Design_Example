import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MyProfileScreen(){
    return(
      <View style={screenStyles.container}>
        <View style={screenStyles.row}>
          <FontAwesome name="vcard" size={55} color="#A2D5AB" />
        </View> 
        <View style={screenStyles.infoRow}>
          <View style={screenStyles.rowFront}>
            <Text style={screenStyles.infoText}>ID</Text>
          </View>
          <View style={screenStyles.rowMid}>
            <FontAwesome name="info-circle" size={30} color="#A2D5AB" />
          </View>
          <View style={screenStyles.rowBack}>
            <Text style={screenStyles.infoText}>21412412</Text>
          </View>
        </View>
        <View style={screenStyles.infoRow}>
          <View style={screenStyles.rowFront}>
            <Text style={screenStyles.infoText}>Name</Text>
          </View>
          <View style={screenStyles.rowMid}>
            <FontAwesome name="info-circle" size={30} color="#A2D5AB" />
          </View>
          <View style={screenStyles.rowBack}>
            <Text style={screenStyles.infoText}>Levent</Text>
          </View>
        </View>
        <View style={screenStyles.infoRow}>
          <View style={screenStyles.rowFront}>
            <Text style={screenStyles.infoText}>Email</Text>
          </View>
          <View style={screenStyles.rowMid}>
            <FontAwesome name="info-circle" size={30} color="#A2D5AB" />
          </View>
          <View style={screenStyles.rowBack}>
            <Text style={screenStyles.infoText}>mail@mail.com</Text>
          </View>
        </View>
        <View style={screenStyles.row}>
          <FontAwesome name="edit" size={45} color="#A2D5AB" />
        </View> 
      </View>
    );
  }
  const screenStyles = StyleSheet.create({
    container:{
      padding:2,
      flex:1,
      backgroundColor:'#E5EFC1',
      flexDirection:'column',
    },
    row:{
      marginTop:5,
      marginBottom:10,
      justifyContent:'center',
      alignItems:'center',
    },
    infoRow:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20,
    },
    rowFront:{
      flex:2,
      justifyContent:'flex-start',
      paddingLeft:4,
      backgroundColor:'#A2D5AB',
      padding:8,
    },
    rowMid:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    rowBack:{
      flex:2,
      flexDirection:'row',
      justifyContent:'flex-end',
      paddingRight:4,
      backgroundColor:'#A2D5AB',
      padding:8,
    },
    infoText:{
      color:'#557B83',
      fontSize:15,
      fontWeight:'800',
      letterSpacing:1,
    },
  });