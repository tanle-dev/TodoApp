import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";



const dbCollection = collection(db, 'tasks')
export async function load(){

    const taskList = []

    const querySnapshot = await getDocs(dbCollection)
    querySnapshot.forEach(doc => {
        const newTask = {
            ...doc.data(),
            id: doc.id
        }
        // console.log(newTask)
        taskList.push(newTask)
    })

    return taskList
}