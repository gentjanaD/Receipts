import React from "react";
import {View, Text, FlatList} from 'react-native';
import { useState, useEffect } from "react";
const Item = (item ) => {
return (
   <View >
    <Text>{item.title}</Text>
  </View>
  )
};

const SummaryComp = () => {
  const [data, setData] = useState([]);
  const fetchSumData = async () => {
    const res = await fetch('http://10.10.22.68:3000');
    const datas = await res.json();
    setData(datas);
  }
  
  useEffect(()=>{
    fetchSumData();
  },[]);
  // console.log('data', data)

  const renderCategory = ( {item} ) => {
    return (
      <Item title={item.category} />
    )
  }
  const renderTitle = ( {item} ) => {
    return (
      <Item title={item.title} />
    )
  }
  const renderDate = ( {item} ) => {
    return (
      <Item title={item.date} />
    )
  }
  const renderPerson = ( {item} ) => {
    return (
      <Item title={item.person} />
    )
  }
  const renderLocation = ( {item} ) => {
    return (
      <Item title={item.location} />
    )
  }
  const renderWhatHappened= ( {item} ) => {
    return (
      <Item title={item.whatHappened} />
    )
  }
  const renderHowYouFelt= ( {item} ) => {
    return (
      <Item title={item.howDidYouFeel} />
    )
  }
  const renderHappenedBefore= ( {item} ) => {
    return (
      <Item title={item.happenedBefore} />
    )
  }
  const renderDoDifferently= ( {item} ) => {
    return (
      <Item title={item.doDifferently} />
    )
  }
  const renderShare= ( {item} ) => {
    return (
      <Item title={item.share} />
    )
  }
  const renderLearned= ( {item} ) => {
    return (
      <Item title={item.learned} />
    )
  }
  const renderPlan= ( {item} ) => {
    return (
      <Item title={item.plan} />
    )
  }

  return (
    <View>
      <Text style = {{fontSize: 40}}>Input Summary</Text>

      <Text>CATEGORY</Text>
      <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderCategory}
        keyExtractor={item => item._id}
        />
      <Text>TITLE</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderTitle}
        keyExtractor={item => item._id}
        />
      <Text>DATE</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderDate}
        keyExtractor={item => item._id}
        />
      <Text>PERSON</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderPerson}
        keyExtractor={item => item._id}
        />
      <Text>LOCATION</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderLocation}
        keyExtractor={item => item._id}
        />
      <Text>WHAT HAPPENED</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderWhatHappened}
        keyExtractor={item => item._id}
        />
      <Text>HOW YOU FELT</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderHowYouFelt}
        keyExtractor={item => item._id}
        />
      <Text>IF IT HAPPENED BEFORE</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderHappenedBefore}
        keyExtractor={item => item._id}
        />
      <Text>DO DIFFERENTLY</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderDoDifferently}
        keyExtractor={item => item._id}
        />
      <Text>IF YOU'D LIKE TO SHARE WITH SOMEONE</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderShare}
        keyExtractor={item => item._id}
        />
      <Text>WHAT YOU HAVE LEARNED</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderLearned}
        keyExtractor={item => item._id}
        />
      <Text>THE PLAN MOVING FORWARD</Text>

        <FlatList
        data={data[data.length-1]? [data[data.length-1]] : []}
        renderItem={renderPlan}
        keyExtractor={item => item._id}
        />

    </View>
  )
}

export default SummaryComp;