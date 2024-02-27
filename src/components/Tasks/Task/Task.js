import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, Switch, Text, View } from "react-native";
import { styles } from "./styles";

export function Task(props){
    const {task} = props

    const [visualizeModal, setVisualizeModal] = useState(false)

    const onTaskClick = () => {
        setVisualizeModal(true)
    }

    const onCloseClicked = () => {
        setVisualizeModal(false)
    }

    const onStatusChanged = () => {
        
    }

    const onDeleteClicked = () => {}

    const onSwitchClicked = () => {

    }

    return(
        <View>
            <Pressable onPress={onTaskClick}>
                <View style={styles.container}>
                    <Text style={styles.title}>{task.title}</Text>
                    <Text style={styles.id}>Id: {task.id}</Text>
                    <Text style={styles.id}>Status: {task.status ? (<Text style={{color:"green"}}>Completed</Text>): (<Text style={{color:"red"}}>Opening</Text>)}</Text>
                </View>
            </Pressable>
            <Modal
                transparent={true}
                visible = {visualizeModal}
                >
                <View style={styles.modal_container}>
                    <View style={styles.modal_content}>
                        <Pressable style={styles.close} >
                            <FontAwesome name='close' color={'red'} size={32} onPress={onCloseClicked}></FontAwesome>
                            {/* <Text style={{color:"red"}}>Close</Text> */}
                        </Pressable>
                        <Text style={styles.modal_title}>{task.title}</Text>
                        <View style={styles.option}>
                            <Pressable onPress={onStatusChanged}>
                                <View style={styles.option_item}>
                                    <Switch onChange={onSwitchClicked} value={true}></Switch>
                                    <Text style={{color:"green"}}>Completed</Text>
                                </View>
                            </Pressable>
                            <Pressable>
                                <View style={styles.option_item}>
                                    <AntDesign name='delete' style={{color:"red", margin:8}} size={32} onPress={onDeleteClicked}></AntDesign>
                                    <Text style={{color:"red"}}>Remove</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}