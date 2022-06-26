import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    navigation.navigate('EventDetails',{eventId: event_id});
  }

  const [Events,setEvents] = useState([
    {id:1,name:'Arkadaşlarımızla kahve içiyoruz',startDate:'16-16-2016',endDate:'7-7-2017',insanbir:'Oğuz Türk',insaniki:'Egemen Aydın',userid:2,active:true,category:'kahve'},
  
  ])
    return(
      <View style={screenStyles.container}>
        <View style={screenStyles.positiveBox}>
          <View style={screenStyles.headerRow}>
            <FontAwesome name="check-circle" size={35} color="#557B83" />
          </View>
          <TouchableOpacity
          onPress={()=>{NavToEventDetails(1)}}
          >
          <View key={1}>
            <View style={eventStyles.card}>
              <View style={eventStyles.cardHeader}>
                <Text style={eventStyles.cardName}>Kahve içiyoruz</Text>
                <TouchableOpacity
                onPress={()=>{NavToEventDetails()}}
                >
                <View style={eventStyles.cardCategory}>
                  <Text style={eventStyles.categoryText}>Kahve</Text>
                </View>
                </TouchableOpacity>
              </View>
            <View style={eventStyles.cardBody}>
              <Text style={eventStyles.cardDesc}>Kahve içeceğiz gelmek isteyen var mı?</Text>
            </View>
            <View style={eventStyles.cardFooter}>
              <View style={eventStyles.footerCommentBox}>
                <FontAwesome name="comments" size={30} color="#95c89e" />
                <Text style={eventStyles.comments}>(3)</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
        <View style={screenStyles.negativeBox}>
          <View style={screenStyles.headerRow}>
            <FontAwesome name="times-circle" size={35} color="#557B83" />
          </View>
          <TouchableOpacity
          onPress={()=>{NavToEventDetails(1)}}
          >
            <View key={1}>
              <View style={eventStyles.card}>
                <View style={eventStyles.cardHeader}>
                  <Text style={eventStyles.cardName}>Halısaha</Text>
                  <TouchableOpacity
                  onPress={()=>{NavToEventDetails()}}
                  >
                  <View style={eventStyles.cardCategory}>
                    <Text style={eventStyles.categoryText}>Spor</Text>
                  </View>
                  </TouchableOpacity>
                </View>
                <View style={eventStyles.cardBody}>
                <Text style={eventStyles.cardDesc}>Kalecimiz eksik</Text>
                </View>
                <View style={eventStyles.cardFooter}>
                  <View style={eventStyles.footerCommentBox}>
                    <FontAwesome name="comments" size={30} color="#95c89e" />
                    <Text style={eventStyles.comments}>(3)</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={screenStyles.draftBox}>
        <View style={screenStyles.headerRow}>
            <FontAwesome name="mouse-pointer" size={35} color="#557B83" />
          </View>
        </View>
        {/* <ScrollView>
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
        </ScrollView> */}
      </View>
    );
  }

  const screenStyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#E5EFC1',
      flexDirection:'column',
    },
    positiveBox:{
      flexDirection:'column'
    },
    negativeBox:{

    },
    headerRow:{
      justifyContent:'center',
      alignItems:'center',
      padding:3,
    }
  });

  const eventStyles = StyleSheet.create({
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
      fontSize:18,
      fontWeight:'500',
    },
    categoryText:{
      fontSize:18,
      fontWeight:'500',
      color: '#557B83',
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
      fontSize:17,
      fontWeight:'500',
    },
    cardFooter:{
      flexDirection:'row',
      margin:3,
    },
    footerButtonBox:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'row',
    },
    footerCommentBox:{
      flex:1,
      paddingLeft:10,
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'row',
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
      color:'#557B83', //89bb92 koyusu
    },
    comments:{
      fontStyle:'italic',
      color:'#557B83',
      fontSize:17,
      fontWeight:'500',
      paddingLeft:3,
    },
    addEventBar:{
  
    },
  });
  