import React,{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';



const App = () => {
  const [Events,setEvents] = useState([
    {id:1,name:'Kahve masasında kadın eksik',startDate:'16-16-2016',endDate:'7-7-2017',description:'Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.',userid:2,active:true,category:'kahve'},

    {id:2,name:'bişi',startDate:'16-16-2016',endDate:'7-7-2017',description:'11-11 halısaha yapcaz 21 kişi eksik',userid:2,active:true,category:'halısaha'},

    {id:3,name:'bişi2',startDate:'16-16-2016',endDate:'7-7-2017',description:'fuckbadi arıyom',userid:2,active:true,category:'sex'},

    {id:4,name:'bişi3',startDate:'16-16-2016',endDate:'7-7-2017',description:'kpss çalışcam 1 hafta eşlik edecek badi arıyorum',userid:2,active:true,category:'ders'},
  ])

  const [categories,setcategories] = useState([
    {id:1,name:'Kahve masasında kadın eksik',startDate:'16-16-2016',endDate:'7-7-2017',description:'Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.',userid:2,active:true,category:'kahve'},
  ])

  return (
    <View>
      <View style={homeStyles.container}>
        <View style={homeStyles.topBar}>
          <Text stlye={homeStyles.appName}>project b</Text>
        </View>
        <View style={homeStyles.filterBar}>
          <Text stlye={homeStyles.appName}>serach box / filtering</Text>
        </View>
        <ScrollView>
          {
            Events.map((event)=>{
              return(
                <View key={event.id}>
                  <View style={eventStyles.card}>
                    <View style={eventStyles.cardHeader}>
                      <Text style={eventStyles.cardName}>{event.name}</Text>
                      <View style={eventStyles.cardCategory}>
                        <Text>{event.category}</Text>
                      </View>
                    </View>
                    <View style={eventStyles.cardBody}>
                      <Text style={eventStyles.cardDesc}>{event.description}</Text>
                    </View>
                    <View style={eventStyles.cardFooter}>
                      <View>
                        <Text style={eventStyles.comments}>Yorumlar(3)</Text>
                      </View>
                      <View style={eventStyles.favButton}>
                        <Button title='♥'></Button>
                      </View>
                      <View style={eventStyles.applyButton}>
                        <Button title='Başvur'></Button>
                      </View>
                    </View>
                  </View>
                </View>
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
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:10,
    marginRight:7,
    marginTop:3,
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
    marginRight:3,
  },
  applyButton:{
    marginRight:5,
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
  },
  appName:{
    color:'#ffffff',
  },
  filterBar:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'aquamarine',
  },
});

export default App;
