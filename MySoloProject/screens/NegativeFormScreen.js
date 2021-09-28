import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import NegativeForm from '../components/forms/PositiveForm';
// import { NavigationContainer } from "@react-navigation/native";


const FormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground source = {require('../assets/form.png')} style={styles.image}> 
        <View>
          <TouchableOpacity style = {{marginTop: 20, marginLeft: 280, backgroundColor: 'white', justifyContent: 'right', marginHorizontal: 23, paddingTop: 6, paddingBottom: 6, paddingLeft: 20, paddingRight: 5, borderRadius: 5}} onPress = {()=>{
            navigation.navigate('Summary') //if submitting
            //otherwise navigate back to home if press cancel
          }}>
            <Text>Negative SUMMARY</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{marginTop: 20, marginLeft: 280, backgroundColor: 'white', justifyContent: 'right', marginHorizontal: 23, paddingTop: 6, paddingBottom: 6, paddingLeft: 24, paddingRight: 5, borderRadius: 5}}  onPress={()=>{
            navigation.navigate('Home')
          }}>
            <Text>GO BACK</Text>
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
    // justifyContent:'center'
  },
})
export default FormScreen; 