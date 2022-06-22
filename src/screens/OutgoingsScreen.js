import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const selectEvent = (event_id) => {
  console.log(event_id+" no'lu EVENT");
}

const selectCategory = (event_id) => {
  console.log(event_id+" no'lu CATEGORY");
}

const applyEvent = (event_id) => {
  console.log(event_id+" no'lu event'e BAŞVURULDU");
}

const likeEvent = (event_id) => {
  console.log(event_id+" no'lu event BEĞENİLDİ");
}

export default function OutgoingsScreen({navigation}){
  const NavToEventDetails=(event_id)=>{
    console.log(event_id+" no'lu EVENT");
    navigation.navigate('EventDetails');
  }

  const [Events,setEvents] = useState([
    {id:1,name:'Arkadaşlarımızla kahve içiyoruz',startDate:'16-16-2016',endDate:'7-7-2017',insanbir:'Oğuz Türk',insaniki:'Egemen Aydın',userid:2,active:true,category:'kahve'},
  
  ])
    return(
      <View>
        <ScrollView>
          {
            Events.map((event)=>{
              return(
                <TouchableOpacity
                onPress={()=>{NavToEventDetails(event.id)}}
                >

                  <View key={event.id}>
                    <View style={eventStyles.card}>
                      <View style={eventStyles.cardHeader}>
                        <Text style={eventStyles.cardName}>{event.name}</Text>
                        <TouchableOpacity
                        onPress={()=>{selectCategory(event.id)}}
                        >
                          <View style={eventStyles.cardCategory}>
                            <Text>{event.category}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={eventStyles.cardBody}>
                        <View style={eventStyles.cardBodyRow}>
                          <Text style={eventStyles.cardDesc}>Reddedildi.</Text> 
                        </View>
                        
                      </View>
                      
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }

  const eventStyles = StyleSheet.create({
    card:{
      margin:5,
      backgroundColor:'red',
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
      color:'white',
    },
    cardCategory:{
      width:75,
      height:23,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'orange',
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
      color:'black',
      flex:1,
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
      backgroundColor:'red',
      height:35,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    favButtonText:{
      color:'#ffffff',
    },
    applyButton:{
      marginRight:5,
      marginBottom:3,
      backgroundColor:'green',
      height:35,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    applyButtonText:{
      color:'#ffffff',
    },
    comments:{
      position:'relative',
      right:'75%',
      fontStyle:'italic',
      color:'white',
    },
    cardBodyRow:{
      flex:1,
      flexDirection:'row',
    },
  });