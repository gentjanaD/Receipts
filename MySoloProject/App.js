import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import PositiveFormScreen from "./screens/PositiveFormScreen";
import NegativeFormScreen from "./screens/NegativeFormScreen";

import Summary from "./screens/Summary";
import EventOverview from "./screens/EventOverview";
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
        />
        <RootStack.Screen
          name="NegativeFormScreen"
          component={NegativeFormScreen}
          // options ={{headerShown: false}}
        />
        <RootStack.Screen name="Summary" component={Summary} />
        <RootStack.Screen
          name="EventOverview"
          component={EventOverview}
          options={{ headerShown: false }}
        />
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
