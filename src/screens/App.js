import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MyProfileScreen from './MyProfileScreen';
import IncomingsScreen from './IncomingsScreen';
import OutgoingsScreen from './OutgoingsScreen';
import CreateEventScreen from './CreateEventScreen';
import EventDetailsScreen from './EventDetailScreen';
import UsersDetailScreen from './UsersDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab  = createBottomTabNavigator();
const Stack  = createStackNavigator();


function EventNavigatorHandler() {
  return (
    <Stack.Navigator
    //  screenOptions={{
    //    header:()=>null
    //  }}  //her screen için
     >
       <Stack.Screen
       name = 'EventBase'
       component={HomeScreen}
       options={{
         header:()=>null
       }}
       />
       <Stack.Screen
       name = 'CreateEvent'
       component={CreateEventScreen}
       />
       <Stack.Screen
       name = 'EventDetails'
       component={EventDetailsScreen}
       />
     </Stack.Navigator>
  );
}

function IncomingsNavigatorHandler() {
  return (
    <Stack.Navigator
     >
       <Stack.Screen
       name = 'IncomingsBase'
       component={IncomingsScreen}
       options={{
         header:()=>null
       }}
       />
       <Stack.Screen
       name = 'UsersDetails'
       component={UsersDetailScreen}
       />
       <Stack.Screen
       name = 'EventDetails'
       component={EventDetailsScreen}
       />
     </Stack.Navigator>
  );
}

function OutgoingsNavigatorHandler() {
  return (
    <Stack.Navigator
     >
       <Stack.Screen
       name = 'OutgoingsBase'
       component={OutgoingsScreen}
       options={{
         header:()=>null
       }}
       />
       <Stack.Screen
       name = 'EventDetails'
       component={EventDetailsScreen}
       />
     </Stack.Navigator>
  );
}

function App (){
  
  return (
   <NavigationContainer>
     <Tab.Navigator
      screenOptions={({route})=>({
        // https://fontawesome.com/  iconlar için
        tabBarIcon:({focused,size,color})=>{
          let iconName;
          if(route.name==='Event'){
            iconName='person-booth'; //person-booth
            size = focused ? 32 : 25 ;
            color = focused ? '#557B83' :'#89bb92';
          }else if(route.name==='Profile'){
            iconName='baby';
            size = focused ? 32 : 25 ;
            color = focused ? '#557B83' :'#89bb92';
          }else if (route.name==='Incomings'){
            iconName='baby';
            size = focused ? 32 : 25 ;
            color = focused ? '#557B83' :'#89bb92';
          }else if(route.name==='Outgoings'){
            iconName='baby';
            size = focused ? 32 : 25 ;
            color = focused ? '#557B83' :'#89bb92';
          }
          return(
            <FontAwesome5
             name={iconName}
             size = {size}
             color = {color}
            />
          )
        }
        
      })}
      // tabBarOptions={{
      //   activeTintColor:'#034efc',
      //   inactiveTintColor:'#fcba03',
      //   activeBackgroundColor:'#fff',
      //   inactiveBackgroundColor:'#999',
      //   showLabel:true,
      //   labelStyle:{fontSize:14},
      // }}
     >
       <Tab.Screen
       name = 'Event'
       component={EventNavigatorHandler}
       options={{
        header:()=>null,
       }}
       />
       <Tab.Screen
       name = 'Incomings'
       component={IncomingsNavigatorHandler}
       options={{
        tabBarBadge:3,
        header:()=>null,
       }}
       />
       <Tab.Screen
       name = 'Outgoings'
       component={OutgoingsNavigatorHandler}
       options={{
        tabBarBadge:1,
        header:()=>null,
       }}
       />
       <Tab.Screen
       name = 'Profile'
       component={MyProfileScreen}
       />
       
     </Tab.Navigator>
   </NavigationContainer>
      
  );
};


export default App;
