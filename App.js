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

  const DATA=[
    {
      title:'bişi 1',
      data:['item1-1','item1-2','item1-3','item1-4']
    },
    {
      title:'bişi 2',
      data:['item2-1','item2-2','item2-3','item2-4']
    },
    {
      title:'bişi 3',
      data:['item3-1','item3-2','item3-3','item3-4']
    },
    {
      title:'bişi 4',
      data:['item4-1','item4-2','item4-3','item4-4']
    },
  ]

  return (
    <View>

      <ScrollView style={styles.body}>
        {
          Events.map((event)=>{
            return(
              <View key={event.id}>
                <View style={styles.card}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardName}>{event.name}</Text>
                    <View style={styles.cardCategory}>
                      <Text>{event.category}</Text>
                    </View>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardDesc}>{event.description}</Text>
                  </View>
                  <View style={styles.cardFooter}>
                    <View>
                      <Text style={styles.comments}>Yorumlar(3)</Text>
                    </View>
                    <View style={styles.favButton}>
                      <Button title='♥'></Button>
                    </View>
                    <View style={styles.applyButton}>
                      <Button title='Başvur'></Button>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>

      {/* <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>Kahve masasında kadın eksik</Text>
          <View style={styles.cardCategory}>
            <Text>Kahve</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardDesc}>Akşam arabicada toplanıyoruz arkadaşlar. Ama full erkeğiz bi tane karı lazım gelmek isteyen başvuru atsın herkesi kabul ediyoruz.</Text>
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.comments}>Yorumlar(3)</Text>
          </View>
          <View style={styles.favButton}>
            <Button title='♥'></Button>
          </View>
          <View style={styles.applyButton}>
            <Button title='Başvur'></Button>
          </View>
        </View>
      </View> */}
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

export default App;
