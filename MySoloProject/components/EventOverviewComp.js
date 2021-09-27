import React from "react";
import {View, Text, SectionList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useState, useEffect, StatusBar} from 'react';
import { Directions } from "react-native-gesture-handler";

const Item = ({ title, date, person }) => (
  <View style = {[styles.item, styles.row]}>
    <Text style = {[styles.title, styles.text, styles.column]}>Title: {title}</Text>
    <Text style = {styles.text}>When {date} </Text>
    <Text style = {styles.text}>Who {person}</Text>
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

  const renderItem = ({item}) => (
    <Item person = {item.title}/>
  );
  
  return (
    <View>
      {isLoading ? <Text>Loading...</Text>: 
      ( <ScrollView style = {styles.buttonStyleContainer}>
        <Text> ALL EVENTS </Text>
        <SafeAreaView>
          <SectionList
            sections={data}
            keyExtractor={item => item._id}
            renderItem= {({item})=> <Item date = {item.date} title={item.title} person = {item.person} /> }
            renderSectionHeader= {({section})=> (
              <Text style = {[styles.header]}>{section.category}</Text>
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
      paddingLeft: 18
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