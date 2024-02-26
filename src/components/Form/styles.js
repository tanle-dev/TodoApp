import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    attention:{
        padding: 10,
        borderColor: 'red',
        borderWidth: 2,
        borderLeftWidth: 8,
        backgroundColor: '#fff',
    },
    desc_tag:{
        marginTop: 20
    },
    desc:{
        marginVertical: 10,
        height: '15%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    status:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10%',
        justifyContent: 'space-around'
    },
    add_btn:{
        marginTop: 20,
        width: '80%',
        marginStart: '10%',
        padding: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 20,
        alignItems: 'center'
    },
    title_btn:{
        color: '#fff',
        fontWeight: '600',
        fontSize: 18
    }
})