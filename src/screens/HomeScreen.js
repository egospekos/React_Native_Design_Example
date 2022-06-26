import React,{ useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';



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

const HomeScreen = ({navigation}) => {
  
  const [Events,setEvents] = useState([]);
  const [Categories,setCategories] = useState([]);
  // fetchEventList();
  // fetchCategoryList();
  useEffect(() => {
    fetchEventList();
    fetchCategoryList();
  }, []);
  const fetchEventList = () =>{
    axios.get(`http://10.0.2.2:8080/events`).then((response) => setEvents(response.data));
  }
  const fetchCategoryList = () =>{
    axios.get(`http://10.0.2.2:8080/categories`).then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }
  

  const NavToEventCreate=()=>{
    navigation.navigate('CreateEvent');
  }

  const NavToEventDetails=(event_id)=>{
    console.log(event_id+" no'lu EVENT");
    navigation.navigate('EventDetails',{eventId: event_id});
  }

  

  const [categories,setcategories] = useState([
    {id:15,name:'Kahve masasında kadın eksik',startDate:'16-16-2016',endDate:'7-7-2017',description:'Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.',userid:2,active:true,category:'kahve'},
  ])


  return (
    <View style={homeStyles.container}>
      <View >
      

        {/* <View style={homeStyles.topBar}>
          <Text stlye={homeStyles.appName}>project b</Text>
        </View> */}

        {/* <View style={homeStyles.topBar}>
        
          <Text stlye={homeStyles.appName}>project b</Text>
        </View>
        <View style={homeStyles.filterBar}>
          <View style={homeStyles.searchBar}>
            <TextInput></TextInput>
          </View>
          
          <Text stlye={homeStyles.appName}>search box / filtering</Text>
        </View> */}
        <ScrollView horizontal={true}>
          {
            Categories.map((category)=>{
              return(
                <TouchableOpacity
                onPress={()=>{selectCategory(category.id)}}
                >

                  <View key={category.id}>
                    <View style={categoryStyles.card}>
                      <FontAwesome name="tag" size={30} color="#95c89e" />
                      <Text style={categoryStyles.tagsText}>{category.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <View style={eventStyles.addEventBar}>
          <TouchableOpacity
            onPress={()=>{NavToEventCreate()}}
            >
              <View style={homeStyles.createEventButton}>
                <FontAwesome name="plus-circle" size={30} color="#95c89e" />
              </View>
              
              {/* <Text stlye={homeStyles.appName}>Event ekle</Text> */}
          </TouchableOpacity>
        </View>
        
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
                        <Text style={eventStyles.cardName}>{event.title}</Text>
                        <TouchableOpacity
                        onPress={()=>{NavToEventDetails()}}
                        >
                          <View style={eventStyles.cardCategory}>
                            <Text style={eventStyles.categoryText}>{event.categoryName}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={eventStyles.cardBody}>
                        <Text style={eventStyles.cardDesc}>{event.text}</Text>
                      </View>
                      <View style={eventStyles.cardFooter}>
                        <View style={eventStyles.footerCommentBox}>
                          <FontAwesome name="comments" size={30} color="#95c89e" />
                          <Text style={eventStyles.comments}>(3)</Text>
                          <Text style={eventStyles.tarihText}>{event.baslangicTarihi}</Text>
                        </View>
                        <View style={eventStyles.footerButtonBox}>
                          <TouchableOpacity
                          onPress={()=>{likeEvent(event.id)}}
                          >
                            <View style={eventStyles.favButton}>
                              {/* <Text style={eventStyles.favButtonText}>Beğen</Text> */}
                              <FontAwesome name="heart" size={30} color="#95c89e" />
                            </View>
                            
                          </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity
                        onPress={()=>{applyEvent(event.id)}}
                        >
                          <View style={eventStyles.applyButton}>
                          <FontAwesome name="send" size={30} color="#95c89e" />
                            {/* <Text style={eventStyles.applyButtonText}>Başvur</Text> */}
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      
    </View>
  );
};

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
  tarihText:{
    fontSize:15,
    paddingLeft:8,
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
    fontWeight:'600',
  },
  categoryText:{
    color:'#557B83',
    fontSize:17,
    fontWeight:'600',
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
    fontSize:16,
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
    paddingLeft:4,
    fontStyle:'italic',
    color:'#557B83',
    fontSize:17,
    fontWeight:'600',
  },
  addEventBar:{

  },
});
const homeStyles = StyleSheet.create({
  container:{
    backgroundColor:'#E5EFC1',
    flex:1,
  },
  topBar:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'aqua',
    height:35,
  },
  appName:{
    color:'#ffffff',
  },
  filterBar:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'aquamarine',
    flexDirection:'row',
    height:35,
  },
  searchBar:{
    backgroundColor:'white',
    borderColor:'red',
    borderWidth:2,
    borderRadius:9,
    padding:5,
    width:130,
  },
  createEventButton:{
    alignItems:'center',
    justifyContent:'flex-end',
    flexDirection:'row',
    paddingRight:10,
  },
});
const categoryStyles = StyleSheet.create({
  card:{
    flexDirection:'row',
    height:30,
    width:100,
    backgroundColor:'#A2D5AB',
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  tagsText:{
    color:'#557B83',
    fontSize:17,
    fontWeight:'600',
  }
});

export default HomeScreen;
