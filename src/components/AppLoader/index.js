import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as database from '../../database/index';
import { setTasks } from '../../redux/tasksSlice';

export default function AppLoader() {

    const dispatch = useDispatch()

    useEffect(() => {
        (async() => {
            const taskList = await database.load();
            dispatch(setTasks(taskList))
            SplashScreen.hideAsync()
        })()
    })
}