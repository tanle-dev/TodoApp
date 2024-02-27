import { useState } from "react";
import { Keyboard, Pressable, Switch, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Form(props){

    const {onAddTask} = props

    const [taskDescription, setTaskDescription] = useState("")
    const [statusValue, setStatusValue] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleDescriptionChange = (value) => {
        setErrorMessage(false)
        setTaskDescription(value)
    }

    const handleStatusChanged = (value) => {
        setStatusValue(value)
    }

    const handleAddBtnClicked = () => {
        if(taskDescription != ""){
            const newTask = {
                title: taskDescription,
                status: statusValue
            }

            onAddTask(newTask)
            setStatusValue(false)
            setTaskDescription("")

            Keyboard.dismiss()
        }else{
            setErrorMessage(true)
        }
    }

    return (
        <View style={styles.container}>
            {/* <Text>Add Task</Text> */}

            {
                errorMessage && (
                    <View style = {styles.attention}>
                        <Text style={{color:'red'}}>Attention:</Text>
                        <Text>The Description is required!</Text>
                    </View>
                )
            }

            <Text style={styles.desc_tag}>Description:</Text>
            <TextInput
                placeholder="Enter a task description"
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
                style={styles.desc}
            >

            </TextInput>

            <View style={styles.status}>
                <Text style={{color:'red'}}>Open</Text>
                <Switch value={statusValue} onValueChange={handleStatusChanged}></Switch>
                <Text style={{color:'green'}}>Completed</Text>
            </View>

            <Pressable
            style={styles.add_btn}
            onPress={handleAddBtnClicked}
            >
                <Text style={styles.title_btn}>ADD</Text>
            </Pressable>

        </View>
    )
}