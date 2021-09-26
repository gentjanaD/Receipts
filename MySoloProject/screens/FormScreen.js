import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import PositiveForm from '../components/forms/PositiveForm';
// import { NavigationContainer } from "@react-navigation/native";


const FormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground source = {require('../assets/form.png')} style={styles.image}> 
        <View>
          <TouchableOpacity onPress = {()=>{
            navigation.navigate('Summary') //if submitting
            //otherwise navigate back to home if press cancel
          }}>
            <Text>SUBMIT FORM </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
          }}>
            <Text>CANCEL</Text>
          </TouchableOpacity>
          
        </View>
            <PositiveForm/>
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
    // justifyContent:'center'
  },
})
export default FormScreen; 