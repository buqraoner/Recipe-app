import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Components
import Categories from "../components/Categories";



const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Categories />
        </View>
    );
};


export default HomeScreen;
