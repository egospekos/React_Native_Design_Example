import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MyProfileScreen from './MyProfileScreen';
import IncomingsScreen from './IncomingsScreen';
import OutgoingsScreen from './OutgoingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab  = createBottomTabNavigator();


function App (){
  
  return (
   <NavigationContainer>
     <Tab.Navigator
      screenOptions={({route})=>({
        // https://fontawesome.com/  iconlar için
        tabBarIcon:({focused,size,color})=>{
          let iconName;
          if(route.name==='Home'){
            iconName='baby';
            size = focused ? 25 : 20 ;
            color = focused ? '#034efc' :'#fcba03';
          }else if(route.name==='Profile'){
            iconName='baby';
            size = focused ? 25 : 20 ;
            color = focused ? '#034efc' :'#fcba03';
          }else if (route.name==='Incomings'){
            iconName='baby';
            size = focused ? 25 : 20 ;
            color = focused ? '#034efc' :'#fcba03';
          }else if(route.name==='Outgoings'){
            iconName='baby';
            size = focused ? 25 : 20 ;
            color = focused ? '#034efc' :'#fcba03';
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
       name = 'Home'
       component={HomeScreen}
       options={{
        header:()=>null,
       }}
       />
       <Tab.Screen
       name = 'Incomings'
       component={IncomingsScreen}
       options={{
        tabBarBadge:3,
       }}
       />
       <Tab.Screen
       name = 'Outgoings'
       component={OutgoingsScreen}
       options={{
        tabBarBadge:1,
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
