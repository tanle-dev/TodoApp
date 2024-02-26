import { Pressable, Switch, Text, TextInput, View } from "react-native";

export function Form(){
    return (
        <View>
            <Text>Add Task</Text>

            <>
                <Text>Attention:</Text>
                <Text>The Description is required!</Text>
            </>

            <Text>Description:</Text>
            <TextInput>

            </TextInput>

            <>
                <Switch></Switch>
                <Text>Completed</Text>
            </>

            <Pressable>
                <Text>ADD</Text>
            </Pressable>

        </View>
    )
}