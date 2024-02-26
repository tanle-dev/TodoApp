import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-uuid';
import { Form } from './src/components/Form/Form';
import { Header } from './src/components/Header/Header';
import { Tasks } from './src/components/Tasks/Tasks';
import { styles } from './src/styles/main';


export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Washing the Dog",
      status: true
    },
    {
      id: uuid(),
      title: "Doing Homework",
      status: false
    },
    {
      id: uuid(),
      title: "Feeding cats",
      status: false
    },
  ])

  const Tab = createBottomTabNavigator()

  const onAddBtnClicked = (newTask) => {
    setTasks([...tasks, {
      id: uuid(),
      title: newTask.title,
      status: newTask.status
    }])
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tasks">{props => <Tasks tasks={tasks}/>}</Tab.Screen>
          <Tab.Screen name="Add Task">{props => <Form onAddTask={onAddBtnClicked}/>}</Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
