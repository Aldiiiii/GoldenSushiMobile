import { View, Text, StyleSheet } from "react-native"

export default function About(){
    return (
        <>
            <View style={style.container}>
                <Text>This Is App Restaurant Using React Native</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})