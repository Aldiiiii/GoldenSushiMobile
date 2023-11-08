import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../pages/About';
import MainStack from './MainStack';
import { Octicons } from '@expo/vector-icons';

export default function MainTab(){
    const Tab = createBottomTabNavigator()
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="HomeScreen" component={MainStack} options={{
                    headerShown: false,
                    title: "Home",
                        tabBarIcon: ({color, size}) => {
                           return <Octicons name="home" size={size} color={color} />
                        }
                    }}/>
                <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({color, size}) => {
                        return <Octicons name="info" size={size} color={color} />
                    }
                }}/>
            </Tab.Navigator>
        </>
    )
}