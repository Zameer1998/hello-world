import React from 'react';
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs';
import cartoon from '../Screen/Cartoon';
import DoctorHome from '../Screen/DoctorHome';
import Search from '../Screen/Search';
import Camera from '../Screen/Camera';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform, Image, TouchableOpacity, Alert } from 'react-native';

var menu= require('../assets/Menu.png');
const Tab=createBottomTabNavigator();

const Tabs=() => {
    return(
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle: 
        { position: 'absolute',
          bottom:10,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'white',
          borderRadius:10,
          height:70,
        },
      }}
    >
    <Tab.Screen name='DoctorHome' component={DoctorHome}/>
    <Tab.Screen name='Camera' component={Camera}/>
    <Tab.Screen name='Search' component={Search}/>
    <Tab.Screen name='Cartoon' component={cartoon}/>
    </Tab.Navigator>
    );
}


export default Tabs;