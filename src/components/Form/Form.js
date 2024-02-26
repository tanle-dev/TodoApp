import { useState } from "react";
import { Pressable, Switch, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Form(){

    const [taskDescription, setTaskDescription] = useState("")
    const [statusValue, setStatusValue] = useState(false)

    const handleDescriptionChange = (value) => {
        setTaskDescription(value)
    }

    const handleStatusChanged = (value) => {
        setStatusValue(value)
    }

    return (
        <View style={styles.container}>
            {/* <Text>Add Task</Text> */}

            {
                taskDescription == '' && (
                    <View style = {styles.attention}>
                        <Text>Attention:</Text>
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

            <Pressable style={styles.add_btn}>
                <Text style={styles.title_btn}>ADD</Text>
            </Pressable>

        </View>
    )
}