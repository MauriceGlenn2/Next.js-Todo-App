import React, { useState } from 'react'
import { db } from "../Firebase"
import { addDoc, collection  } from 'firebase/firestore';

function CreateTodo() {

  const [todo, setTodo] = useState({ 
    title: "", 
    detail: ""
})  
  
async function handleSub(){
    const docRef =await addDoc(collection(db, "todos"), todo)
    setTodo({
      title: "",
      detail: "",
    });
}
    return (
      <>
        <form>
          <lable>Title:</lable>
          <br />
          {/* input changes, take all properties using ...todo and 
        change title with target.value */}
          <input
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            type="text"
            value={todo.title}
          ></input>
          <br />
          <lable>Detail:</lable>
          <br />
          <textarea
            type="text"
            onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
            value={todo.detail}></textarea>
        </form>
        <button onClick={handleSub}>Add Todo</button>
        
      </>
    );
}

export default CreateTodo