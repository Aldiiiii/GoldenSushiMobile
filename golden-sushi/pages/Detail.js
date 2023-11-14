import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";

export default function Detail() {
  const route = useRoute();

  const GET_ITEM_DETAIL = gql`
    query Query($detailItemId: ID!) {
      detailItem(id: $detailItemId) {
        name
        price
        imgUrl
        description
        User {
          username
          email
          address
        }
        Ingredients {
          name
        }
        Category {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEM_DETAIL, {
    variables: {
      detailItemId: route.params.id,
    },
  });

  if (loading) {
    return (
      <View style={style.loadOrErr}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={style.loadOrErr}>
        <Text>Oops error...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={style.container}>
        <Image
          style={style.img}
          source={{
            uri: data.detailItem.imgUrl,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textDecorationLine:"underline"
          }}
        >
          {data.detailItem.name}
        </Text>
        <Text>{data.detailItem.Category.name}</Text>
        <Text
          style={{
            padding: 18,
            textAlign: "center",
            width: 300,
            fontWeight: 500,
          }}
        >
          {data.detailItem.description}
        </Text>
        <Text>Price: </Text>
        <Text>Rp.{data.detailItem.price}</Text>

        <Text style={{ marginTop: 20 }}>Ingredients:</Text>
        {data.detailItem?.Ingredients?.map((el) => <Text>{el.name}</Text>) ||
          ""}
        <Text style={{ marginTop: 20 }}>Created By:</Text>
        <Text>{data.detailItem.User.email}</Text>
      </View>
    </>
  );
}

const windowHeight = Dimensions.get("window").height;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: 350,
    margin: 15,
    height: (windowHeight * 1) / 3,
  },
  loadOrErr: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});
