import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container: {
        backgroundColor: "#FFE264",
        borderColor: "#FFE264",
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
    },
    image: {
        // width:Dimensions.get("screen").width,
        minHeight: 130,
        // resizeMode:"contain",
        backgroundColor: "white",
        borderRadius: 10,
    },
    cardText: {
        flex: 1,
        position: "absolute",
        backgroundColor: "#00000099",
        justifyContent: "flex-end",
        alignItems: "center",

        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        bottom: 0,
        right: 0,
        padding: 5,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff"
    },

})