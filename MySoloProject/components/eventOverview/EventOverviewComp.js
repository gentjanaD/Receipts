import React from "react";
import { View, Text, SectionList } from "react-native";
import { useState, useEffect } from "react";
import styles from "./EventOverview.component.styles.js";

const Item = ({ positive, title, date, person }) => (
  <View style={positive ? styles.positiveExp : styles.negativeExp}>
    <Text style={positive ? styles.positiveText : styles.negativeText}>
      {positive ? "Positive Experience  🔼" : "Negative Experience  🔽"}
    </Text>
    <Text style={positive ? styles.positiveText : styles.negativeText}>
      Title: {title}
    </Text>
    <Text style={positive ? styles.positiveText : styles.negativeText}>
      Date: {date}
    </Text>
    <Text style={positive ? styles.positiveText : styles.negativeText}>
      Person: {person}
    </Text>
  </View>
);

const EventOverviewComp = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("http://192.168.0.41:3000");
    const data = await resp.json();
    const categoryNames = data.map((el) => {
      return el.category;
    });
    let unique = categoryNames.filter((item, i, ar) => ar.indexOf(item) === i);
    setCategories(unique);
    let newData = unique.map((el) => {
      return {
        category: el,
        data: data.filter((element) => element.category === el),
      };
    });
    setData(newData);
    setLoading(false);
  };
  // console.log("categories", categories);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ height: 750 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.buttonStyleContainer}>
          <Text style={styles.headingText}> All Memories </Text>
          <View>
            <SectionList
              sections={data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Item
                  date={item.date}
                  title={item.title}
                  person={item.person}
                  positive={item.positive}
                />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.header}>{section.category}</Text>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default EventOverviewComp;
