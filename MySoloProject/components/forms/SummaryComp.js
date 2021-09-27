import React from "react";
import {View, Text} from 'react-native';
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";




const SummaryComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://10.10.22.68:3000/');
    const datas = await res.json();
    setData(datas);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  // const renderItem = ({item})=> {
  //   <Item input = {item.category, item.title, item.date, item.person}/>
  // }

  return (
    <View>
      <Text>sum comp</Text>
      <FlatList>
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      </FlatList>
    </View>
  )
}

export default SummaryComp;