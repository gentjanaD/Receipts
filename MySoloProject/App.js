import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import PositiveFormScreen from "./screens/PositiveFormScreen";
import NegativeFormScreen from "./screens/NegativeFormScreen";

import Summary from "./screens/Summary";
import EventOverview from "./screens/EventOverview";
import Category from "./screens/Category";
import Memories from "./screens/Memories";
import People from "./screens/People";
import Locations from "./screens/Locations";
import Lessons from "./screens/Lessons";

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="PositiveFormScreen"
          component={PositiveFormScreen}
          // options ={{headerShown: false}}
        />
        <RootStack.Screen
          name="NegativeFormScreen"
          component={NegativeFormScreen}
          // options ={{headerShown: false}}
        />
        <RootStack.Screen name="Summary" component={Summary} />
        {/* options={{headerShown: false}} */}
        <RootStack.Screen
          name="EventOverview"
          component={EventOverview}
          options={{ headerShown: false }}
        />
        {/* <RootStack.Screen name = "Category" component = {Category} /> */}
        {/* <RootStack.Screen name = "Memories" component = {Memories} options ={{headerShown: false}}/> */}
        <RootStack.Screen name="People" component={People} />
        <RootStack.Screen name="Locations" component={Locations} />
        <RootStack.Screen name="Lessons" component={Lessons} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
