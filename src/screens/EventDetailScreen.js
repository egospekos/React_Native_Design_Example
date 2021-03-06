import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
function likeEvent(){

}

function applyEvent(){

}

const event={};
event.name="Arkadaşlarımızla kahve içiyoruz";
event.category="kahve";
event.description="Akşam kahvecide toplanıyoruz. Katılmak isteyenler gelebilir.";
export default function EventDetailScreen({ route, navigation }){
  const [Event,setEvent] = useState('');
  const { eventId} = route.params;
  useEffect(() => {
    fetchEventList();
  }, []);
  const fetchEventList = () =>{
    axios.get(`http://10.0.2.2:8080/events/`+eventId).then((response) => {
      
    setEvent(response.data);
    });
  }

  
  const NavToUsersDetails=(user_id)=>{
    navigation.navigate('UsersDetails',{userId: user_id});
  }
    return(
      <View style={screenStyle.container}>
        
          {
            
            
                <View style={eventStyles.card}>
                  <View style={eventStyles.cardHeader}>
                    <Text style={eventStyles.cardName}>{Event.title}</Text>
                    <TouchableOpacity
                    onPress={()=>{NavToEventDetails(1)}}
                    >
                      <View style={eventStyles.cardCategory}>
                        <Text style={eventStyles.categoryText}>{Event.categoryName}</Text>
                      </View>
                      
                    </TouchableOpacity>
                  </View>
                  <View style={eventStyles.cardBody}>
                    <Text style={eventStyles.cardDesc}>{Event.text}</Text>
                  </View>
                  <View style={eventStyles.cardFooter}>
                    <Text style={eventStyles.tarihText}>{Event.baslangicTarihi}</Text>
                  </View>
                </View>
              
          }
        
        
        <View style={commentStyle.commentsContainer}>
          <View style={commentStyle.Header}>
            <FontAwesome name="comments" size={30} color="#95c89e" />
            <Text style={commentStyle.HeaderText}>COMMENTS</Text>
            
          </View>
          {/* burdan sonra loop */}
          <View style={commentStyle.commentCard}>
            <TouchableOpacity
            onPress={()=>{NavToUsersDetails()}}
            >
              <View style={commentStyle.userRow}>
                <FontAwesome name="user-circle-o" size={30} color="#95c89e" />
                <Text style={commentStyle.userName}>Vecdi</Text>
              </View>
            </TouchableOpacity>
            <View style={commentStyle.body}>
              <Text style={commentStyle.text}>Gelmek istiyorum ama orada pumpkin smoothie satılıyor mu?</Text>
            </View>
          </View>
          {/* buraya kadar */}
          <View style={commentStyle.commentCard}>
            <TouchableOpacity
            onPress={()=>{NavToUsersDetails()}}
            >
              <View style={commentStyle.userRow}>
                <FontAwesome name="user-circle-o" size={30} color="#95c89e" />
                <Text style={commentStyle.userName}>Osman</Text>
              </View>
            </TouchableOpacity>
            <View style={commentStyle.body}>
              <Text style={commentStyle.text}>Tez yazmıyor olsam kesin gelirdim.</Text>
            </View>
          </View>
        </View>
        
      </View>
    );
  }

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
      fontSize:15,
      //color:'#A2D5AB',
      color:'#557B83',
      fontSize:17,
      fontWeight:'500',
    },
  });
  const screenStyle = StyleSheet.create({
    container:{
      backgroundColor:'#E5EFC1',
      flex:1,
      flexDirection:'column',
    },
  });
  const eventStyles = StyleSheet.create({
    

    card:{
      flex:1,
      margin:5,
      backgroundColor:'#A2D5AB', // 205375
      borderRadius:10,
      // shadowColor: '#000000',
      // shadowOffset: {width:-10, height: 25},
      // shadowOpacity: 1,
      // shadowRadius: 15,
    },
    tarihText:{
    fontSize:15,
    paddingLeft:8,
    paddingTop:50,
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
      color:'#557B83',
      fontSize:19,
      fontWeight:'700',
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
      fontSize:18,
      fontWeight:'500',
    },
    cardFooter:{
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'column',
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
    categoryText:{
      fontSize:19,
      fontWeight:'500',
      color:'#557B83',
    },
  });