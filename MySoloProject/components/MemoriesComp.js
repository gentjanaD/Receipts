import React from "react";
import Moment from "moment";
import { useEffect, useState } from 'react';
import { render } from "react-dom";
import {View, Text, SectionList, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ title, date, person }) => (
  <View>
    <Text style = {styles.title}>Event Title: {title}</Text>
    <Text style = {styles.date}>Date: {date}</Text>
    <Text style = {styles.people}>People: {person}</Text>
  </View>
);

export default MemoriesComp = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
  <View >
    {isLoading ? <Text>Loading...</Text> : 
    ( <View >
      <Text style = {styles.page}>All My Memories:</Text>
       <SectionList
        sections= {data}
        keyExtractor={item => item._id}
        renderItem={({item}) => <Item date = {item.date} title={item.title} person = {item.person} />}
        renderSectionHeader={({section}) => (
        <Text style = {styles.categoryText} >Category: {section.category }</Text>
        )}
      />
      </View>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  page: {
    color: '#c4c4c4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryText: {
    color: '#c4c4c4',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  people: {
    color: '#acacac',
    fontSize: 18,
    marginBottom: 10,
  },

  title: {
    color: '#acacac',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "500",
  },
  date: {
    color: '#acacac',
    fontSize: 18,
    marginBottom: 10,
  },
   
})