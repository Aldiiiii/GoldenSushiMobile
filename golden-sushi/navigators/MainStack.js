import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Detail from "../pages/Detail";


export default function MainStack(){
    const Stack = createNativeStackNavigator()
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </>
    )
}