import React, { useEffect, useState } from "react";
import { Text, View, Linking, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"




const MealDetail = ({ route }) => {
    const { strMeal } = route.params;
    const [detail, setDetail] = useState([]);

    const API = "https://www.themealdb.com/api/json/v1/1/search.php?s="


    async function fetchData() {

        await axios
            .get(API + strMeal)
            .then(response => {
                setDetail(response);
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            }
            );
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(detail);
    console.log(detail);




    return (
        <View>
            <Text>{strMeal}</Text>
        </View>
    )


}



export default MealDetail;

const styles = StyleSheet.create({
    container: {

    },
    body_container: {

    },
    image_container: {},
    image: {


    },
    title: {

    },
    area: {

    },
    instructions: {

    },
    youtube: {

    },


});
