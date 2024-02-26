import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        padding: 10,
        margin: 6,
        paddingStart: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowOpacity: 0.8
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        color: '#00BFFF'
    },
    id:{
        color: '#333',
        marginVertical: 2
    }
})