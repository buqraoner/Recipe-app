import React, { useEffect, useState } from "react";
import { Text, View, Linking, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native"




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
        <ScrollView style={styles.container}>
            <View style={styles.image_container} >
                <Image source={{ uri: detail.meals[0].strMealThumb }} style={styles.image} />
            </View>
            <View style={styles.body_container}>
                <Text style={styles.title}>{detail.meals[0].strMeal}</Text>
                <Text style={styles.area}>{detail.meals[0].strArea}</Text>
                <View style={{ borderColor: "#eeeeee80", borderWidth: 1 }}></View>
                <Text style={styles.instructions}>{detail.meals[0].strInstructions}</Text>
                <TouchableOpacity style={styles.youtube} onPress={() => Linking.openURL(detail.meals[0].strYoutube)}>
                    <Text style={styles.youtube_text}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

/*
*/

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
