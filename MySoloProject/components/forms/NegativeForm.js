import React, {useState, useCallback,useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ScrollView,Alert, SectionList} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SummaryComp from './SummaryComp';
const NegativeForm = () => {
  // const [input, setInput]= useState('');
  const [category, setCategory] = useState({
    positive: false,
    category: '',
    title: '',
    date: '',
    person: '',
    location: '',
    whatHappened: '',
    howDidYouFeel: '',
    happenedBefore: '',
    doDifferently: '',
    share: '',
    learned: '',
    plan: '',
  });

  //post
  const fetchPostData = async (allInputs) => {
    // console.log(JSON.stringify(allInputs))
    const loadingData = await fetch('http://10.10.22.68:3000', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    body: JSON.stringify(allInputs)
  })
    const json = await loadingData.json();
    // console.log(json);
    // return await loadingData.json();
    return json;
  }
  const postNewData = async (event) => {
    // event.preventDefault();
    await fetchPostData(category)
  }
    // console.log(postNewData);

// console.log(category)
  return (
  <View style = {styles.container}>
     <ScrollView>
    <View>
      <Text style={[styles.text, styles.buttonText]}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={((text)=> setCategory({...category, category: text}))}
        keyboardType="default"
        placeholder='Choose category'
        placeholderTextColor={'#181818'}
      />
      <Text style = {styles.text}>{category.category}</Text>

      <Text style={[styles.text, styles.buttonText]}>Title</Text>
       <TextInput
        style={styles.input}
        value={category}
        onChangeText={(text)=> {setCategory({...category, title: text})}}
        keyboardType="default"
        placeholder='Title'
        placeholderTextColor={'#181818'}
      />

      <Text style={[styles.text, styles.buttonText]}>Date</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, date: text})}}
        placeholder={'Date'}
        placeholderTextColor={'#181818'}

        />
      <Text style={[styles.text, styles.buttonText]}>Person</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, person: text})}}
        placeholder={'Person'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>Location</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, location: text})}}
        placeholder={'Location'}
        placeholderTextColor={'#181818'}/>
      
      <Text style={[styles.text, styles.buttonText]}>What happened?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, whatHappened: text})}}
        placeholder={'What happened...'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>How did you feel?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, howDidYouFeel: text})}}
        placeholder={'How did you feel?'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>Has this happened before?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, happenedBefore: text})}}
        placeholder={'Has this happened before?'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>Would you do anything differently?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, doDifferently: text})}}
        placeholder={'Would you do anything differently?'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>Would you like to share this with someone?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, share: text})}}
        placeholder={'Would you like to share this with someone?'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>What have you learned from this experience?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, learned: text})}}
        placeholder={'What have you learned from this experience?'}
        placeholderTextColor={'#181818'}/>

      <Text style={[styles.text, styles.buttonText]}>What is the plan moving forward?</Text>
        <TextInput
        style={styles.input}
        value={category}
        keyboardType="default"
        onChangeText={(text)=> {setCategory({...category, plan: text})}}
        placeholder={'What is the plan moving forward?'}
        placeholderTextColor={'#181818'}/>

      

        <TouchableOpacity 
        style={styles.button}
        onPress = {postNewData}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
      </View>

      </ScrollView>
    </View>
  )
}
export default NegativeForm;

const styles = StyleSheet.create({
  text: {
    paddingLeft:17,
    fontSize: 16,
    color:'black',
    fontWeight:'bold',
    paddingBottom: 10
  },
  button:{
    height: 40,
    width: 370,
    backgroundColor: '#463D7B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    marginBottom: 130
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderColor:'#707070',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#E6E4E4',
    opacity:0.4,
    marginBottom: 12,
  },
  container: {
    padding: 10,
  },
});