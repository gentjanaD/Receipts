import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
import SummaryComp from '../components/forms/SummaryComp';
const Summary = ({navigation}) => {
  return (
    <View style = {styles.container }>
      <ImageBackground source = {require('../assets/summary.png')} style= {styles.image}>
      <View style = {styles.subContainer}>
        <SummaryComp/>
      <TouchableOpacity style = {styles.button} onPress = {() =>{
        navigation.navigate('EventOverview')
      }} >
      <Text style = {styles.buttonText}>See Event Overview</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('FormScreen');
      }}>
        {/* <Text>REVISE</Text> */}
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 1
  },
button:{
    height: 40,
    width: 170,
    backgroundColor: '#594F90',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    // marginLeft: ,
    // marginBottom: 2,
    opacity: 0.9,
  },
  input: {
    // color: 'white',
    borderColor:'#707070',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E6E4E4',
    opacity:0.4,
    marginBottom: 12,
    marginLeft: 10
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 70
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Summary; 


//post all saved data from positive form to summary in a flatlist 