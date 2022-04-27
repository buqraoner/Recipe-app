import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import Config from "react-native-config";
import axios from "axios";



// Components 
import Button from "../Button";

//Hooks 
import useFetch from "../../Hooks/useFetch";


const Categories = ({ navigation }) => {
    /*
       const [categories, setCategories] = useState([]);
       const [loading, setLoading] = useState(true);
   
       const fetchData = async () => {
           axios.get(Config.API_URL)
               .then(res => {
                   console.log(res);
                   console.log(res.data.categories);
                   setCategories(res.data.categories);
                   setLoading(false);
               })
               .catch(err => {
                   console.log(err);
               });
       }
       useEffect(() => {
           fetchData();
   
       }, []);
   
       */


    const { error, loading, data } = useFetch(Config.API_URL);

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error...</Text>
    }



    const renderItem = ({ item }) => <
        Button mealName={item.strCategory}
        image={{ uri: item.strCategoryThumb }}

    />





    return (
        <SafeAreaView>
            <View>
                <FlatList data={data.categories} renderItem={renderItem} />
            </View>
        </SafeAreaView>
    );
};


export default Categories;