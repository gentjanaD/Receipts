import React from "react";
import {View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native';
import {useState, useEffect, StatusBar} from 'react';


const Item = ({ title }) => (
  <View style = {{marginLeft: 13, marginBottom: 10, marginTop: 4}}>
    <Text style = {{fontSize: 17, maxWidth: 330, fontWeight: 'bold'}}>{title}</Text>
  </View>
);

const LessonsComp = () => {
  // const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 

  const fetchData = async () => {
  const resp= await fetch('http://10.10.22.68:3000/');
  const newData = await resp.json();
  
  setData(newData);
  
  };
  useEffect(()=> {
    fetchData();
  }, []);


const renderItem = ({ item }) => (
    <Item title={item.learned} />
  );
console.log(data)
  return (
    <View>
      {/* {isLoading ? <Text>Loading...</Text>: */}
        <SafeAreaView>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor= {item=>item._id}
            />
        </SafeAreaView>
      
     </View>
  )
}

export default LessonsComp;