import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
} from "react-native";
import Constant from "expo-constants";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch(console.log);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Fetch data todos</Text>
      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Button
        title="Tap me senpai!"
      />
      <FlatList
        data={todos}
        renderItem={({ item: todo }) => <Text>{todo.title}</Text>}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constant.statusBarHeight,
  },
});
