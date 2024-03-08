import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Modal, Pressable, Switch, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import * as database from "../../../database/index";
import { deleteTask, updateTaskStatus } from "../../../redux/tasksSlice";
import { styles } from "./styles";

export function Task(props){
    const {task} = props
    const dispatch = useDispatch()

    const [visualizeModal, setVisualizeModal] = useState(false)

    const onTaskClick = () => {
        setVisualizeModal(true)
    }

    const onCloseClicked = () => {
        setVisualizeModal(false)
    }

    const onDeleteClick = () => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!',
            [
            {
              text: 'Confirm',
              onPress: () => {
                dispatch(deleteTask(task.id))
                database.remove(task.id)
                19
                setVisualizeModal(false)
              }
            },
            {
              text: 'Cancel'
            }
            ]);
    }

    const onSwitchClicked = () => {
        dispatch(updateTaskStatus(task.id))
        database.update(task)
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
                        </Pressable>
                        <Text style={styles.modal_title}>{task.title}</Text>
                        <View style={styles.option}>
                            <Pressable>
                                <View style={styles.option_item}>
                                    <Switch onChange={onSwitchClicked} value={task.status}></Switch>
                                    <Text style={{color:"green", marginTop: 12}}>Completed</Text>
                                </View>
                            </Pressable>
                            <Pressable>
                                <View style={styles.option_item}>
                                    <AntDesign name='delete' style={{color:"red"}} size={32} onPress={onDeleteClick}></AntDesign>
                                    <Text style={{color:"red", marginTop: 12}}>Remove</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}