import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import Config from "react-native-config";
import { useNavigation } from '@react-navigation/native';




// Components 
import Button from "../Button";

//Hooks 
import useFetch from "../../Hooks/useFetch";


const Categories = ({  }) => {


    const { error, loading, data } = useFetch(Config.API_URL);

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error...</Text>
    }

    const navigation = useNavigation();

    const onPressCategory = strCategory => {
        navigation.navigate('MealList', {strCategory})
    };





const renderItem = ({ item }) =>
    <Button
        title={item.strCategory}
        image={item.strCategoryThumb}
        onSelect={() => onPressCategory(item.strCategory)}



    />


return (
    <SafeAreaView>
        <View>
            <FlatList
                data={data.categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.idCategory}
            />
        </View>
    </SafeAreaView>
);
};


export default Categories;