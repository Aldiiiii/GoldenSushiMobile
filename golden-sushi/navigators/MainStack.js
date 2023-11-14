import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Golden Sushi"
          component={Home}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </>
  );
}
