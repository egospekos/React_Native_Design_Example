import React,{ useState } from 'react';
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
  const NavToEventCreate=()=>{
    navigation.navigate('CreateEvent');
  }

  const NavToEventDetails=(event_id)=>{
    console.log(event_id+" no'lu EVENT");
    navigation.navigate('EventDetails',{eventId: event_id});
  }

  const [Events,setEvents] = useState([
    {id:1,name:'Arkadaşlarımızla kahve içiyoruz',startDate:'16-16-2016',endDate:'7-7-2017',description:'Akşam kahvecide toplanıyoruz. Katılmak isteyenler gelebilir.',userid:2,active:true,category:'kahve'},

    {id:2,name:'Futbol maçı',startDate:'16-16-2016',endDate:'7-7-2017',description:'11-11 halısaha yapacağız kalecimiz eksik',userid:3,active:true,category:'halısaha'},

    {id:3,name:'Ders çalışma',startDate:'16-16-2016',endDate:'7-7-2017',description:'kpss çalışcam 1 hafta kütüphanede eşlik edecek badi arıyorum',userid:4,active:true,category:'ders'},

    {id:4,name:'Ders çalışma',startDate:'16-16-2016',endDate:'7-7-2017',description:'kpss çalışcam 1 hafta kütüphanede eşlik edecek badi arıyorum',userid:5,active:true,category:'ders'},

    {id:5,name:'Ders çalışma',startDate:'16-16-2016',endDate:'7-7-2017',description:'kpss çalışcam 1 hafta kütüphanede eşlik edecek badi arıyorum',userid:6,active:true,category:'ders'},

    
  ])

  const [categories,setcategories] = useState([
    {id:15,name:'Kahve masasında kadın eksik',startDate:'16-16-2016',endDate:'7-7-2017',description:'Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.',userid:2,active:true,category:'kahve'},
  ])


  return (
    <View>
      <View style={homeStyles.container}>
      

        <View style={homeStyles.topBar}>
          <Text stlye={homeStyles.appName}>project b</Text>
          <TouchableOpacity
          onPress={()=>{NavToEventCreate()}}
          >

            <Text stlye={homeStyles.appName}>Event ekle</Text>
          </TouchableOpacity>
        </View>
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
            Events.map((event)=>{
              return(
                <TouchableOpacity
                onPress={()=>{selectCategory(event.id)}}
                >

                  <View key={event.id}>
                    <View style={categoryStyles.card}>
                      <Text>{event.category}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
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
    color:'red',
  },
  cardCategory:{
    width:75,
    height:23,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
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
    color:'white',
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
    backgroundColor:'red',
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
});
const homeStyles = StyleSheet.create({
  container:{
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
});
const categoryStyles = StyleSheet.create({
  card:{
    height:100,
    width:100,
    backgroundColor:'darkgoldenrod',
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  }
});

export default HomeScreen;
