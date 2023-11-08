import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <>
            <View style={style.card}>
                <Text>Ini Card</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "grey",
        height: 200,
        width: 150,
        margin: 20
    }
})


