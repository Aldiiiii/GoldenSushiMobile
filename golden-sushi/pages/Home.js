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

export default function Home() {
  const [todos, setTodos] = useState([]);
  const DATA = [
    {
      id: 1,
      name: "Aburi Gyuniku",
      description: "This is Aburi Gyuniku",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 5,
      createdAt: "date",
      updatedAt: "date",
    },
    {
      id: 2,
      name: "Baby Octopus",
      description: "This is Baby Octopus",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 1,
      createdAt: "date",
      updatedAt: "date",
    },
    {
      id: 3,
      name: "Egg Sashimi",
      description: "This is Egg Sashimi",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 2,
      createdAt: "date",
      updatedAt: "date",
    },
    {
      id: 4,
      name: "Baby Octopus Gunkan",
      description: "This is Baby Octopus Gunkan",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 3,
      createdAt: "date",
      updatedAt: "date",
    },
    {
      id: 5,
      name: "Beef Cheese Roll",
      description: "This is Beef Cheese Roll",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 4,
      createdAt: "date",
      updatedAt: "date",
    },
    {
      id: 6,
      name: "Beef Yakiniku Bowl",
      description: "This is Beef Yakiniku Bowl",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 6,
      createdAt: "date",
      updatedAt: "date",
    },
  ];

  const navigation = useNavigation();
  useEffect(() => {
    // const data = JSON.parse(DATA)
    // console.log(DATA)
  }, []);

  return (
    <>
      <View>
        <Button
          onPress={() => navigation.navigate("Detail")}
          title="Go to detail"
        />

        <ScrollView>
          <View style={style.container}>
            
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
