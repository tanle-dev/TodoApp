import { ScrollView, View } from "react-native";
import { Task } from "./Task/Task";
import { styles } from "./styles";


export function Tasks(props){
    const {tasks, onStatusChange, onDeleteClicked} = props
    return (
            <View style={styles.container}>
                    <ScrollView>
                        {
                            tasks.map((task, index) => (
                                <Task key={index} task={task} onStatusChange={onStatusChange} onDeleteClicked={onDeleteClicked}></Task>
                            ))
                        }
                    </ScrollView>
            </View>
    )
}