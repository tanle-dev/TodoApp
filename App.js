import { useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-uuid';
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

  return (
    <View style={styles.container}>
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
