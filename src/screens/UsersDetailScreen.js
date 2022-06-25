import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function UsersDetailScreen({ route, navigation }){
  const { userId} = route.params;
  const NavToUsersDetails=(user_id)=>{
    navigation.navigate('UsersDetails',{userId: user_id});
  }
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
        {/* <View style={screenStyles.infoRow}>
          <View style={screenStyles.rowFront}>
            <Text style={screenStyles.infoText}>Email</Text>
          </View>
          <View style={screenStyles.rowMid}>
            <FontAwesome name="info-circle" size={30} color="#A2D5AB" />
          </View>
          <View style={screenStyles.rowBack}>
            <Text style={screenStyles.infoText}>mail@mail.com</Text>
          </View>
        </View> */}
        <View style={commentStyle.commentsContainer}>
        <View style={commentStyle.Header}>
          <FontAwesome name="comments" size={30} color="#95c89e" />
          <Text style={commentStyle.HeaderText}>LAST CONTACTS</Text>
          
        </View>
        <View style={commentStyle.commentCard}>
          <TouchableOpacity
          onPress={()=>{NavToUsersDetails(1)}}
          >
            <View style={commentStyle.userRow}>
              <FontAwesome name="user-circle-o" size={30} color="#95c89e" />
              <Text style={commentStyle.userName}>Aybars</Text>
            </View>
          </TouchableOpacity>
          <View style={commentStyle.body}>
            <Text style={commentStyle.text}>Muhabbeti sardı ama yapay zekadan çok anlamıyor gibi.</Text>
          </View>
        </View>
        <View style={commentStyle.commentCard}>
          <TouchableOpacity
          onPress={()=>{NavToUsersDetails(1)}}
          >
            <View style={commentStyle.userRow}>
              <FontAwesome name="user-circle-o" size={30} color="#95c89e" />
              <Text style={commentStyle.userName}>Birol</Text>
            </View>
          </TouchableOpacity>
          <View style={commentStyle.body}>
            <Text style={commentStyle.text}>Bir kere takılmak yetti.</Text>
          </View>
        </View>
        </View>   
        <View style={screenStyles.row}>
          <FontAwesome name="wechat" size={55} color="#A2D5AB" />
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
  const eventStyles = StyleSheet.create({
    card:{
      margin:5,
      backgroundColor:'red',
      borderRadius:10,
    },
  });
  const commentStyle = StyleSheet.create({
    commentsContainer:{
      flex:1,
      flexDirection:'column',
      margin:5,
    },
    Header:{
      //flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    HeaderText:{
      color:'#A2D5AB',
      fontSize:20,
      paddingLeft:7,
      fontWeight:'600',
    },
    commentCard:{
      //flex:1,
      marginTop:5,
      flexDirection:'column',
      borderRadius:10,
      borderWidth:3,
      borderColor:'#A2D5AB',
    },
    userRow:{
      marginTop:3,
      paddingLeft:5,
      flexDirection:'row',
      justifyContent:'flex-start',
    },
    userName:{
      paddingTop:3,
      paddingLeft:5,
      color:'#557B83',
      fontSize:19,
      fontWeight:'600',
    },
    body:{
      padding:5,
    },
    text:{
      //color:'#A2D5AB',
      color:'#557B83',
      fontSize:17,
      fontWeight:'500',
    },
  });