import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//Screens
import HomeScreen from "./screens/HomeScreen";
import FirstScreen from "./screens/FirstScreen";
import MealList from "./screens/MealList";


const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstScreen"
                    component={FirstScreen}
                    options=
                    {{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options=
                    {{
                        title: "Categories",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="MealList"
                    component={MealList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;