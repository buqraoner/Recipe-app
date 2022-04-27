import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";

import styles from "./Button.style";





const Button = (props) => {
    return (
        <View>
            <TouchableWithoutFeedback style={styles.container}
                onPress={props.onPress}
            >
                <View style={styles.card}>
                    <Image style={styles.image}
                        source={props.image}
                    />
                    <Text style={styles.text}>{props.mealName}</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>

    )
}


export default Button;