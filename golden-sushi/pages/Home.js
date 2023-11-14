import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import Constant from "expo-constants";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Card from "../components/Card";
import { gql, useQuery } from "@apollo/client";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const GET_ITEMS = gql`
    query Query {
      items {
        name
        imgUrl
        id
        price
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEMS);
  if(loading){
    return <View style={style.loadOrErr}><Text>Loading...</Text></View>
  }
  if(error){
    return <View style={style.loadOrErr}><Text>Oops error...</Text></View>
  }
  // const navigation = useNavigation();
  return (
    <>
      <View
        style={style.loadOrErr}
      >
        <FlatList
          data={data?.items || []}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ margin: 8, backgroundColor: "white" }}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    columnGap: 10,
    rowGap: 14,
  },
  loadOrErr: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1
  }
});
