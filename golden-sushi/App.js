import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MainTab from "./navigators/MainTab";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://bb00-103-165-209-194.ngrok-free.app",
  uri: "http://13.229.87.65:3000/",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </ApolloProvider>
  );
}
