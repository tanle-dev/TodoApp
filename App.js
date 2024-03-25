import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native';
import { Provider } from "react-redux";
import AppLoader from "./src/components/AppLoader";
import { Form } from './src/components/Form/Form';
import { Header } from './src/components/Header/Header';
import { Setting } from "./src/components/Setting/Setting";
import { Tasks } from './src/components/Tasks/Tasks';
import { store } from "./src/redux/store";
import { styles } from './src/styles/main';


export default function App() {
  
  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Header/>
      <Provider store={store}>
        <AppLoader/>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Tasks"
              component={Tasks}
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
            </Tab.Screen>
            <Tab.Screen
              name="Add Task"
              component={Form}
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
            ></Tab.Screen>
            <Tab.Screen
              name="Settings"
              component={Setting}
              options={{
                title: 'Settings',
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
                ? 'settings'
                : 'settings-outline';
                return (
                <Ionicons
                name={iconName}
                color={color}
                size={size}
                />
                )}
                }}
              >
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
