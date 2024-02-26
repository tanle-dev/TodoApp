import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Modal, Pressable, Switch, Text, View } from "react-native";
import { styles } from "./styles";

export function Task(props){
    const {task} = props
    return(
        <Pressable>
            <View style={styles.container}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.id}>Id: {task.id}</Text>
                <Text style={styles.id}>Status: {task.status ? (<Text style={{color:"green"}}>Completed</Text>): (<Text style={{color:"red"}}>Opening</Text>)}</Text>
            </View>
            <Modal>
                <View>
                    <View>
                        <FontAwesome name='close'></FontAwesome>
                        <Text>Close</Text>
                    </View>
                    <Text style={styles.title}>{task.title}</Text>
                    <View>
                        <View>
                            <Switch></Switch>
                            <Text style={{color:"green"}}>Completed</Text>
                        </View>
                        <View>
                            <AntDesign name='delete' style={{color:"red"}} size={40}></AntDesign>
                            <Text style={{color:"red"}}>Remove</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </Pressable>
    )
}