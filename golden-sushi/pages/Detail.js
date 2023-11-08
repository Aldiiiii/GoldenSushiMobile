import { View, Text, StyleSheet } from "react-native"

export default function Detail(){
    return (
        <>
            <View style={style.container}>
                <Text>Detail</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})