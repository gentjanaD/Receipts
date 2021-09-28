import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import NegativeForm from '../components/forms/NegativeForm';
// import { NavigationContainer } from "@react-navigation/native";


const NegativeFormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground source = {require('../assets/form.png')} style={styles.image}> 
        <View style = {styles.buttonStyleContainer}>
          <TouchableOpacity style = {styles.buttonRight}  onPress = {()=>{
            navigation.navigate('Home') //if submitting
            //otherwise navigate back to home if press cancel
          }}>
            <Text style = {styles.buttonText}>Go Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.buttonLeft} onPress={()=>{
            navigation.navigate('Summary')
          }}>
            <Text style = {styles.buttonText}>Summary</Text>
          </TouchableOpacity>
          
        </View>
            <NegativeForm/>
       </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    alignItems: 'center',
    // justifyContent:'center'
  },
   buttonStyleContainer: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 20
  },
  buttonRight: {
  height: 40,
    width: 120,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 23,
    // marginBottom: 2,
    opacity: 0.9,
},
buttonLeft: {
  height: 40,
    width: 110,
    backgroundColor: '#301934',
    borderColor: '#e3d5e3',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 122,
    marginBottom: 10,
    opacity: 0.9,
    marginRight: 20
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 1
  },
  

})
export default NegativeFormScreen; 