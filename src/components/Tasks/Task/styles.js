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
    },
    modal_container:{
        flex: 1,
        marginTop: 35,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        // transform: 'translateY(20)'
    },
    modal_content:{
        backgroundColor: '#fff',
        width: '80%',
        padding: '10%',
        borderRadius: 30
    },
    close:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginEnd: -25,
        marginTop: -20,
    },
    modal_title:{
        fontSize: 28,
        fontWeight: '600',
        marginTop: -20,
        marginBottom: 30,
        color: '#00BFFF',
    },
    option:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    option_item:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})