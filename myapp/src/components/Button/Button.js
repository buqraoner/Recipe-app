import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";

import styles from "./Button.style";





const Button = ({ title, onSelect, image }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.image}
                        source={{ uri: image }}
                    />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}


export default Button;