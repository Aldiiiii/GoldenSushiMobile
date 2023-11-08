import { View, Text, StyleSheet, Image, Dimensions } from "react-native"

export default function Detail({item}){
    return (
        <>
            <View style={style.container}>
                <Image 
                    style={style.img}
                    source={{uri: "https://img.freepik.com/premium-vector/cartoon-drawing-sushi-wooden-tray_410516-82612.jpg"}}
                />
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}>Judul Makanannya</Text>
                <Text style={{
                    padding: 18,
                    textAlign: "center",
                    width: 300,
                    fontWeight: 500
                }}>Ini description makanan, misalnya: Nasi + Tuna + Onigiri + Tamago</Text>
            </View>
        </>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({    
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
    },
    img: {
        width: 350,
        margin: 15,
        height: windowHeight * 1/3       
    }
})