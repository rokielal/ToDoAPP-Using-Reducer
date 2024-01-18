import React, { useState } from 'react'
import './App.css';

const AddTodoForm = ({dispatch}) => {
    const [title, setTitle] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(title);

        // if user only click on addTodo or only with space we can check that by using trim and length method
        if(title.trim().length === 0){
            alert("Add some Task");
            return;
        }
        // here we have to pass the data which will be added in title in payload for this we can create new todo

        const newTodo = {
            title: title,
            completed: false,
            id: crypto.randomUUID()
        }
        // console.log(newTodo);
        dispatch({
            type: "ADD_TODO",
            payload: {newTodo : newTodo}
        })
        setTitle("");

    }
  return (
    <form onSubmit={handleSubmit} className='form'>

        <input type="text" value={title}  onChange={(e)=> {setTitle(e.target.value)}}/>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodoForm