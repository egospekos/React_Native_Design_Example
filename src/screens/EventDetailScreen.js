import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function likeEvent(){

}

function applyEvent(){

}

const event={};
event.name="Kahve içiyoruzzzz";
event.category="kahve";
event.description="arabicada kahve içcez adam lazım her zamanki gibi hadi çıkın çıkın gelin";
export default function EventDetailScreen({ route, navigation }){
  const { eventId} = route.params;
  
    return(
      <View style={eventStyles.container}>
        
        <View style={eventStyles.card}>
          <View style={eventStyles.cardHeader}>
            <Text style={eventStyles.cardName}>{event.name}</Text>
            <TouchableOpacity
            onPress={()=>{NavToEventDetails()}}
            >
              <View style={eventStyles.cardCategory}>
                <Text>{event.category}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={eventStyles.cardBody}>
            <Text style={eventStyles.cardDesc}>{event.description}</Text>
          </View>
          <View style={eventStyles.cardFooter}>
            <View>
              <Text style={eventStyles.comments}>Yorumlar(3)</Text>
            </View>
            <TouchableOpacity
            onPress={()=>{likeEvent(event.id)}}
            >
              <View style={eventStyles.favButton}>
                <Text style={eventStyles.favButtonText}>Beğen</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{applyEvent(event.id)}}
            >
              <View style={eventStyles.applyButton}>
                <Text style={eventStyles.applyButtonText}>Başvur</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }

  const eventStyles = StyleSheet.create({
    container:{
      backgroundColor:'#E5EFC1',
      flex:1,
    },

    card:{
      margin:5,
      backgroundColor:'#A2D5AB', // 205375
      borderRadius:10,
      // shadowColor: '#000000',
      // shadowOffset: {width:-10, height: 25},
      // shadowOpacity: 1,
      // shadowRadius: 15,
    },
    cardHeader:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      
    },
    cardName:{
      paddingLeft:10,
      paddingTop:5,
      flex:4,
      color:'#557B83',
    },
    cardCategory:{
      width:75,
      height:23,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#95c89e',
      borderRadius:10,
      marginRight:7,
      marginTop:5,
      alignItems:'center',
      justifyContent:'center',
    },
    cardBody:{
      padding:15,
    },
    cardDesc:{
      color:'#557B83',
    },
    cardFooter:{
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'row',
      margin:3,
    },
    favButton:{
      marginRight:5,
      marginBottom:3,
      // backgroundColor:'#CDC2AE',
      height:35,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    favButtonText:{
      color:'#557B83',
    },
    applyButton:{
      marginRight:5,
      marginBottom:3,
      // backgroundColor:'#CDC2AE',
      height:35,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    applyButtonText:{
      color:'#557B83',
    },
    comments:{
      position:'relative',
      right:'75%',
      fontStyle:'italic',
      color:'#557B83',
    },
    addEventBar:{
  
    },
  });