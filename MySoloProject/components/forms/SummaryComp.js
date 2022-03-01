import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
const Item = (item) => {
  return (
    <View>
      <Text style={[styles.inputText, styles.text]}>{item.title}</Text>
    </View>
  );
};

const SummaryComp = () => {
  const [data, setData] = useState([]);
  const fetchSumData = async () => {
    const res = await fetch("http://192.168.0.41:3000");
    const datas = await res.json();
    setData(datas);
  };

  useEffect(() => {
    fetchSumData();
  }, []);
  // console.log('data', data)

  const renderCategory = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
          <Item title={item.category} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderTitle = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.title} />
      </TouchableOpacity>
    );
  };
  const renderDate = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.date} />
      </TouchableOpacity>
    );
  };
  const renderPerson = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.person} />
      </TouchableOpacity>
    );
  };
  const renderLocation = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.location} />
      </TouchableOpacity>
    );
  };
  const renderWhatHappened = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.whatHappened} />
      </TouchableOpacity>
    );
  };
  const renderHowYouFelt = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.howDidYouFeel} />
      </TouchableOpacity>
    );
  };
  const renderHappenedBefore = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.happenedBefore} />
      </TouchableOpacity>
    );
  };
  const renderDoDifferently = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.doDifferently} />
      </TouchableOpacity>
    );
  };
  const renderShare = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.share} />
      </TouchableOpacity>
    );
  };
  const renderLearned = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.learned} />
      </TouchableOpacity>
    );
  };
  const renderPlan = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.renderBackground, styles.inputText]}>
        <Item title={item.plan} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ height: 750 }}>
      {/* <ScrollView style = {{overflow: 'hidden'}}> */}
      <Text style={[styles.mainHeading]}>Input Summary</Text>

      <Text style={[styles.text, styles.mainText]}>Category:</Text>
      <FlatList
        style={styles.text}
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderCategory}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Title:</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderTitle}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Date</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderDate}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Person</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderPerson}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Location</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderLocation}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>What happened</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderWhatHappened}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>How you felt</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderHowYouFelt}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Has it happened before</Text>

      <FlatList
        style={styles.text}
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderHappenedBefore}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>Do differently</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderDoDifferently}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>
        Would you like to share this with someone
      </Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderShare}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>What did you learn</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderLearned}
        keyExtractor={(item) => item._id}
      />
      <Text style={[styles.mainText]}>What is the plan moving forward</Text>

      <FlatList
        data={data[data.length - 1] ? [data[data.length - 1]] : []}
        renderItem={renderPlan}
        keyExtractor={(item) => item._id}
      />

      {/* </ScrollView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainHeading: {
    color: "white",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    marginBottom: 20,
  },
  renderBackground: {
    borderWidth: 3,
    padding: 10,
    borderColor: "#ded8c9",
    borderRadius: 10,
    marginBottom: 25,
  },
  text: {
    color: "white",
  },
  inputText: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainText: {
    fontSize: 18,
    color: "#dbdddb",
    marginBottom: 5,
  },
});

export default SummaryComp;
