import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from "firebase/firestore"
import { db } from '@/Firebase'
import Link from 'next/link'


function ToDoList() {

  const [todos, setTodos] = useState([])

  useEffect(() =>{
    const unsubscribe = onSnapshot(collection(db, "todos"), (snap) => {
    console.log(snap);
      //this is an array so you can map over
      setTodos(snap.docs.map(doc=>{
        return{
          id: doc.id,
          title: doc.data().title,
          detail: doc.data().detail

        }
      }))
    })
    //reruns function everytime we add a todo, stops listening
return unsubscribe

  }, [])
  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul className="todoList">
          {
            todos.map(todo =>{
             return (
               <Link href={"/" + todo.id}key={todo.id}>
                 <li className="listItem">{todo.title}</li>
               </Link>
             );
            })
          }
          <li className="listItem">Todo 1</li>
          <li className="listItem">Todo 2</li>
          <li className="listItem">Todo 3</li>
        </ul>
      </div>
    </>
  );
}

export default ToDoList