import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Card() {
    const navigation = useNavigation()
  return (
    <>
    <Pressable onPress={() => navigation.navigate('Detail')}>
      <View style={style.card}>
        <View style={style.cardContent}>
          <Image
            style={style.cardImage}
            source={{
              uri: "https://img.freepik.com/premium-vector/cartoon-drawing-sushi-wooden-tray_410516-82612.jpg",
            }}
          />
          <View style={style.cardText}>
              <Text style={{fontWeight: "500"}}>Sushi</Text>
              <Text style={{fontWeight: "500", color: "red"}}>Rp.123.000</Text>
          </View>
        </View>
      </View>
      </Pressable>
    </>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 3,
    height: 175,
    width: 180,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardContent: {
    justifyContent: "center",
    // alignItems: "center",
    margin: 8,
  },
  cardImage: {
    width: 150,
    height: 100,
    margin: 8,
  },
  cardText: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
});
