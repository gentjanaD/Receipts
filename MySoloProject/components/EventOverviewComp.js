import React from "react";
import {View, Text, SectionList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useState, useEffect, StatusBar} from 'react';
import { Directions } from "react-native-gesture-handler";

const Item = ({ positive,title, date, person }) => (
  <View style = {positive? {backgroundColor: '#ffd7b5', marginBottom: 40, marginTop: 10, opacity:0.7, paddingTop:9,paddingBottom:9, alignItems:'center'} : {backgroundColor: '#3b2747', marginBottom: 40, marginTop: 10, opacity:0.8, paddingTop:9,paddingBottom:9, alignItems:'center'}}>

    <Text style = { positive?{color: 'black', paddingLeft: 10, fontSize:19, fontWeight:'bold'}: {color: 'white', paddingLeft: 10, fontSize:19,fontWeight:'bold'}}>  {positive?'Positive Experience  🔼':'Negative Experience  🔽' }</Text>
    <Text style = { positive?{color: 'black', fontWeight:'bold',paddingLeft: 10, fontSize:19}: {color: 'white', paddingLeft: 10, fontSize:19,fontWeight:'bold'}}>  Title: {title} </Text>

    <Text style = { positive?{color: 'black', paddingLeft: 10, fontSize:19, fontWeight:'bold'}: {color: 'white', paddingLeft: 10, fontSize:19,fontWeight:'bold'}}>  Date: {date} </Text>

    <Text style = { positive?{color: 'black', paddingLeft: 10, fontSize:19, fontWeight:'bold'}: {color: 'white', paddingLeft: 10, fontSize:19,fontWeight:'bold'}}>  Person: {person}</Text>
  </View>
);

const EventOverviewComp = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
  const resp= await fetch('http://10.10.22.68:3000/');
  const data = await resp.json();
  const categoryNames = data.map((el)=> {
    return el.category;
  }); 
  let unique = categoryNames.filter((item, i, ar) => ar.indexOf(item) === i);
  setCategories(unique);
  let newData = unique.map((el)=>{
    return {
      'category': el,
      'data': data.filter((element)=> element.category === el ) }
   });
  setData(newData);
  setLoading(false);
  };
  useEffect(()=> {
    fetchData();
  }, []);

  // const renderItem = ({item}) => (
  //   <Item person = {item.title}/>
  // );
  // console.log('data', data)
  return (
    <View style = {{height: 750}}>
      {isLoading ? <Text>Loading...</Text>: 
      ( <ScrollView style = {styles.buttonStyleContainer}>
        <Text style = {{fontSize: 30, color: 'white',marginLeft: 113, marginBottom: 10}}> All Memories </Text>
        <SafeAreaView>
          <SectionList
            sections={data}
            keyExtractor={item => item._id}
            renderItem= {({item})=> <Item date = {item.date} title={item.title} person = {item.person} positive = {item.positive} /> }
            renderSectionHeader= {({section})=> (
              <Text style = {styles.header}>{section.category}</Text>
            )}
          />
    </SafeAreaView>
        
      </ScrollView>
      )}
    </View>
  )
}

export default EventOverviewComp;
const styles = StyleSheet.create({

  container: {
      flex: 1,
      // paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      // backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 3,
      // opacity: 0.3
    },
    header: {
      // justifyContent: 'center',
      // alignItems: 'center',
      fontSize: 32,
      backgroundColor: "#fff",
      opacity: 0.3,
      paddingLeft: 18,
      marginTop: 10,
      alignItems:'center'
    },
    title: {
      fontSize: 24
    },
    text: {
      color: 'white',
      fontSize: 19,
      marginRight: 15
    },
     row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 0.4,
  },

  column: {
    flexDirection: "column",
    // flexWrap: "no-wrap",
  },
})