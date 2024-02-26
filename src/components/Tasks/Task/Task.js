import { Text, View } from "react-native";
import { styles } from "./styles";

export function Task(props){
    const {task} = props
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.id}>Id: {task.id}</Text>
            <Text style={styles.id}>Status: {task.status ? (<Text style={{color:"green"}}>Completed</Text>): (<Text style={{color:"red"}}>Opening</Text>)}</Text>
        </View>
    )
}