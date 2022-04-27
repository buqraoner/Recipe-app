import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Components
import Categories from "../components/Categories";



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Categories />
        </View>
    );
};


export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",

    },
});



