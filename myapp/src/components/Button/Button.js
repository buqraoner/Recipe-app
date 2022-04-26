import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Button.style";





const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}


export default Button;