
import axios from "axios";
import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet } from "react-native";
import Config from "react-native-config";


//Hooks 
//import useFetch from "./../Hooks/useFetch";

//Components
import MealsCard from "../components/MealsCard";


//console.log(Config.URL_MEALS + strCategory);
// const { loading, error, data } = useFetch(Config.URL_MEALS + strCategory);


const MealList = ({ route, navigation }) => {
    const { strCategory } = route.params;
    const [mealList, setMealList] = useState([]);


    const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


    async function fetchData() {

        await axios
            .get(API + strCategory)
            .then(response => {
                setMealList(response.data.meals);

            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    console.log(mealList);
    // console.log("asfsa");





    const handleFoodSelect = strMeal => {
        navigation.navigate('MealDetail', { strMeal });
    };






    const RenderCard = ({ item }) =>
        <MealsCard
            title={item.strMeal}
            image={item.strMealThumb}
            onSelect={() => handleFoodSelect(item.strMeal)}
        />







    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList data={mealList}
                    renderItem={RenderCard}

                />
            </View>
        </SafeAreaView>
    )
}

export default MealList;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFE264",
    },
});




