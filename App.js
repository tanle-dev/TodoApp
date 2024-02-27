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

  const onStatusChange = (id) => {
    const updateTasks = tasks.map((task) => {
        if(id == task.id){
          task.status = !task.status
        }
        return task
    })
    setTasks(updateTasks)
  }

  const onDeleteClicked = (id) => {
    const updateTasks = tasks.filter(task => task.id != id)
    setTasks(updateTasks)
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Tasks"
            options={{
              title: 'Task Board',
              headerStyle: {
              backgroundColor: '#fff',
              },
              headerTintColor: '#00B0F0',
              headerTitleStyle: {
                fontWeight: 'bold',
                padding: 10,
                fontSize: 22,
              }
              }}
            >
              {props => <Tasks 
              tasks={tasks} 
              onStatusChange={onStatusChange} 
              onDeleteClicked={onDeleteClicked}/>
            }</Tab.Screen>
          <Tab.Screen 
            name="Add Task"
            options={{
              title: 'Add Task',
              headerStyle: {
              backgroundColor: '#fff',
              },
              headerTintColor: '#00B0F0',
              headerTitleStyle: {
                fontWeight: 'bold',
                padding: 10,
                fontSize: 22,
              }
              }}
          >{props => <Form onAddTask={onAddBtnClicked} />}</Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
