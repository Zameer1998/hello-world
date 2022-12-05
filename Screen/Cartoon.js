import React from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform, Image, TouchableOpacity, Alert } from 'react-native';


var backgroundimage=require('../assets/Group17.png');
var menu= require('../assets/Menu.png');
var logomini=require('../assets/logoMini.png');
var home=require('../assets/home.png');
var camera=require('../assets/camera.png');
var cart=require('../assets/cart.png');
var search=require('../assets/search.png');
var doc=require('../assets/doc.png');

function Cartoon() {    

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={backgroundimage} resizeMode='stretch' style={{flex:1,}}>
          <View style={styles.heder}>
          <TouchableOpacity onPress={()=> Alert.alert('Navigation Page will pop-up.')}>
          <Image source={menu} style={styles.menu}/>
          </TouchableOpacity>
          <Text style={styles.head} >Ayurveda Medi App </Text>
          <Image source={logomini} style={styles.logomini}/>
          </View>
          <View style={styles.bg1}>
          <Image source={doc} style={styles.doc}/>
          <Text style={{marginTop:-396, marginRight:140, fontSize:20}}>Dr.vithanage</Text>
          </View>
          

        </ImageBackground>        
        </SafeAreaView>
        
    );
} 



const styles = StyleSheet.create({
    container: {
      flex: 1,
        
    },
  
    heder: {
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    flexDirection:'row',
    marginTop: 30,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-between',
    },
    menu: {
    height:20, 
    width:20, 
    resizeMode:'contain',
    marginLeft:10,
    },
    head:{
      textAlign:'center',
      fontSize:20,
      // fontFamily:'Arial',
    },
    logomini:{  
    height:50, 
    width:50, 
    resizeMode:'contain',
    marginRight:10,
    },
    bg1:{
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    flexDirection:'row',
    marginTop: 30,
    height: 500,
    width: '100%',
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-between',
    },
    doc:{
      height:25, 
      width:25,
      marginTop:-395, 
      marginLeft:56,
      resizeMode:'contain',
      marginRight:10,
    },
    bg2:{
      paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
      flexDirection:'row',
      marginTop: 35,
      height: 70,
      width: '100%',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'space-between',
      },

  });
  
export default Cartoon;