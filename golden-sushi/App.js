import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MainTab from "./navigators/MainTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <MainTab/>
      
    </NavigationContainer>
  );
}
