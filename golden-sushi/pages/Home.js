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
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
      name: "Beef Yakiniku Bowl",
      description: "This is Beef Yakiniku Bowl",
      price: 123000,
      imgUrl: "https://media.timeout.com/images/105980851/750/422/image.jpg",
      authorId: 1,
      categoryId: 6,
      createdAt: "date",
      updatedAt: "date",
    },{
      id: 13,
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
      id: 14,
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
      id: 16,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
        <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
          <FlatList 
            data={DATA}
            renderItem={({item}) => <Card item={item}/>}
            keyExtractor={item => item.id}
            numColumns={2}
            style={{margin: 8, backgroundColor: "white" }}
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
    rowGap: 14
  },
});
