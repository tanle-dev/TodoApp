import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "stretch",
        paddingHorizontal: 20,
        backgroundColor: '#00BFFF',
        paddingVertical: 5,
        marginTop: 40
    },
    logoContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    logoText:{
        paddingStart: 5,
        fontSize: 24,
        fontWeight: "600",
        color: "#fff"
    },
    authorName:{
        fontSize: 20,
        color: "#fff"
    }
})
