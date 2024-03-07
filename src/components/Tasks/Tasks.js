import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { Task } from "./Task/Task";
import { styles } from "./styles";


export function Tasks(props){
    const tasks = useSelector(state => state.task.tasks)
    return (
            <View style={styles.container}>
                    <ScrollView>
                        {
                            tasks.map((task, index) => (
                                <Task key={index} task={task}></Task>
                            ))
                        }
                    </ScrollView>
            </View>
    )
}