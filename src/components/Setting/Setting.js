import { Switch, Text, View } from "react-native";
import { styles } from "./styles";

export function Setting(props){

    let handleValueChange = () => {}

    return (
        <View style={styles.container}>
            <Text style={styles.desc_tag}>Notification:</Text>
            <Text>Remind me to keep my tasks up-to-date:</Text>
            <View style={styles.status}>
                <Switch value={true} onValueChange={handleValueChange}></Switch>
                <Text>Set Daily Reminder</Text>
            </View>
        </View>
    )
}