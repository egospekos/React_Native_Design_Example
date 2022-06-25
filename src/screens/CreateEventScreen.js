import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function CreateEventScreen(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  function SubmitEvent(){
    let event={};
    event.Name=name;
    event.Description=description;
    event.Category=category;
    event.Date=date;
    console.log(event);
  }
  
    return(
      <View style={inputStyles.container}>
        <View style={inputStyles.row}>
          <FontAwesome name="hashtag" size={35} color="#557B83" />
          <View style={inputStyles.eventNameRow}>
            <TextInput
            style={inputStyles.nameInput}
            onChangeText={newText => setName(newText)}
            //value={number}
            placeholder="Event Name"
            //keyboardType="numeric"
            />
          </View>
        </View>
        <View style={inputStyles.row}>
          <View style={inputStyles.eventDescRow}>
              <TextInput
              style={inputStyles.descInput}
              onChangeText={newText => setDescription(newText)}
              //value={number}
              multiline
              placeholder="Description"
              //keyboardType="numeric"
              />
          </View>
          <FontAwesome name="quote-right" size={35} color="#557B83" />
        </View>
        <View style={inputStyles.row}>
          <FontAwesome name="list-ul" size={35} color="#557B83" />
          <View style={inputStyles.eventCategoryRow}>
            <TextInput
            style={inputStyles.categoryInput}
            onChangeText={newText => setCategory(newText)}
            //value={number}
            placeholder="Category"
            //keyboardType="numeric"
            />
          </View>
        </View>
        <View style={inputStyles.row}>
          <View style={inputStyles.eventDateRow}>
            <TouchableOpacity title="Open" onPress={() => setOpen(true)}>
              <View style={inputStyles.dateInput}>
                <Text>{(date!=null) ? 'Click to Schedule' :{date}}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <FontAwesome name="calendar" size={35} color="#557B83" />  
        </View>
        <View style={inputStyles.footerRow}>
          
          <TouchableOpacity onPress={() => SubmitEvent()}>
              <View style={inputStyles.submitButton}>
                <Text style={inputStyles.submitText}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
        </View>
        {/* <View style={inputStyles.row}>
          <View style={inputStyles.eventDateValueRow}>
            <View style={inputStyles.dateText}>
              <Text>{date}</Text>
            </View>
            
          </View>
        </View> */}
        {/* bu modal nerde durduğu fark etmiyor */}
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </View>
      
    );
  }

  const inputStyles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'#E5EFC1',
      padding:3,
    },
    row:{
      marginTop:8,
      flexDirection:'row',
      alignItems:'center',
    },
    eventNameRow:{
      marginLeft:3,
      flex:1,
      backgroundColor:'#A2D5AB',
      borderRadius:10,
      padding:5,
      //flexDirection:'row',
    },
    eventCategoryRow:{
      marginLeft:3,
      flex:1,
      backgroundColor:'#A2D5AB',
      borderRadius:10,
      padding:5,
    },
    eventDateRow:{
      marginLeft:3,
      flex:1,
      backgroundColor:'#A2D5AB',
      borderRadius:10,
      padding:5,
    },
    eventDateValueRow:{
      marginLeft:3,
      flex:1,
      backgroundColor:'#A2D5AB',
      borderRadius:10,
      padding:5,
    },
    footerRow:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end',
      padding:15,
    },
    submitButton:{
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
      backgroundColor:'#557B83',
    },
    submitText:{
      fontSize:20,
      color:'#A2D5AB',
      fontWeight:'bold',
      letterSpacing:2,
    },
    card:{
      margin:5,
      backgroundColor:'red',
      borderRadius:10,
    },
    nameInput:{
      paddingLeft:20,
      borderWidth: 3,
      borderColor:'#E5EFC1',
      borderRadius:10,
    },
    categoryInput:{
      paddingLeft:20,
      borderWidth: 3,
      borderColor:'#E5EFC1',
      borderRadius:10,
    },
    dateInput:{
      paddingLeft:20,
      borderWidth: 3,
      borderColor:'#E5EFC1',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
    },
    eventDescRow:{
      marginLeft:3,
      flex:1,
      backgroundColor:'#A2D5AB',
      borderRadius:10,
      padding:5,
    },
    descInput:{
      paddingLeft:20,
      borderWidth: 3,
      borderColor:'#E5EFC1',
      borderRadius:10,
      height:200,
    },
  });