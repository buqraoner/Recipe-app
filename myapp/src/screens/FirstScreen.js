import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
 import Config from "react-native-config";

//Screens







const FirstScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.screen}>
                <Text
                    
                    style={styles.text}>
                    Tarifka App
                    
                </Text>
                
                <Button
                    title="Log In"
                    onPress={() => navigation.navigate("Home")}
                />

            </View>
        </SafeAreaView>
    );
}



export default FirstScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
        marginBottom: 100,
    },
});



