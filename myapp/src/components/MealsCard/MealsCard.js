import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'


import styles from "./Meals.style"


const FoodCard = ({ image, onSelect, title }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onSelect}>
            <View
                style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image }} />
                <View
                    style={styles.cardText}>
                    <Text style={styles.cardTitle}>{title}</Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default FoodCard