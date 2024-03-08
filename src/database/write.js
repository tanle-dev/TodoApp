import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function save(task){
    try {
        const dbCollection = collection(db, 'tasks')
        const docRef = await addDoc(dbCollection, task);
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
        return null
    }
}

export async function update(task){
    try {
        const taskRef = doc(db, 'tasks', task.id)
        await updateDoc(taskRef, {
        status: task.status
    })}
    catch(error){
        console.log(error.message)
    }
}

export async function remove(id){
    try {
        const taskRef = doc(db, 'tasks', id)
        await deleteDoc(taskRef);
    } catch (error) {
        console.log(error.message)
    }
}