import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import uuid from 'react-uuid';
import { Form } from './src/components/Form/Form';
import { Header } from './src/components/Header/Header';
import { Tasks } from './src/components/Tasks/Tasks';
import { store } from "./src/redux/store";
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
      <Provider store={store}>
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
                  fontSize: 20,
                },
                headerShown: false,
                tabBarActiveTintColor: '#00BFFF',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                const iconName = focused
                ? 'home'
                : 'home-outline';
                return (
                <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
                />
                )}
              }}
              >
                {props => <Tasks
                tasks={tasks}
                onStatusChange={onStatusChange}
                onDeleteClicked={onDeleteClicked}
                />
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
                },
                tabBarActiveTintColor: '#00BFFF',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                const iconName = focused
                ? 'notebook-plus'
                : 'notebook-plus-outline';
                return (
                <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
                />
                )}
                }}
            >{props => <Form {...props} onAddTask={onAddBtnClicked}/>}</Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
