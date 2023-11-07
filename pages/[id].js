import React from 'react'

//getting doc from id
import { getDoc, doc} from "firebase/firestore"
import { db } from "../Firebase"

//run on the server
export async function getServerSideProps (context){
    const id = context.query.id
    const docSnap = await getDoc(doc(db, "todos", id))
    const data = docSnap.data()
    return{
        props:{
            todo:{
                title: data.title,
                detail: data.detail
            }
        }
    }
}

function Todo({todo}) {
  return (
    <div className='container'>
        <h1>Todo: Title: {todo.title}</h1>
        <h3>Detail: {todo.detail} </h3>
    </div>
  )
}

export default Todo;