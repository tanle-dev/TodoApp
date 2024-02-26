import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header(){
    return (
        <View style = {styles.container}>
            <View style = {styles.logoContainer}>
                <FontAwesome name="gitlab" size={36} color={'#FFF'}/>
                <Text style={styles.logoText}>TODO LIST</Text>
            </View>
            <Text style={styles.authorName}>by Tan Le</Text>
        </View>
    )
}