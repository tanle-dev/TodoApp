import { addDoc, collection } from "firebase/firestore";
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

export function update(){
    console.log('update')
}

export function remove(){
    console.log('remove')
}