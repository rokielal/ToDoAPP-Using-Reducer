import React from "react";
import './App.css';

const Todo = ({ completed, id, title, dispatch }) => {
  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: id },
    });
  };

  const handleToggle = () => {
    dispatch({
        type: "TOGGLE_COMPLETED",
        payload: {id : id},
    })
  }
  return (
    <div className="todo_container">
      <h2>id:{id}</h2>
      {/* here we are giving style to title if the completed status is yes then content will be line-through else solid */}
      <h2 style={{
        textDecoration : completed ? 'line-through' : 'solid',
      }}>title:{title}</h2>
      <h2>completed:{completed ? "yes" : "No"}</h2>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Change Completed</button>
    </div>
  );
};

export default Todo;

// To delete any todo we have write function in dispatch function but dispatch function is in App component(parent) from there we have to get the dispatch function to todo component. To do this we have to pass the dispatch function from App component to Todos component then from todos component to todo component this passing the value from grandParent to parent to child is called prop drilling to avoid this we can use useContext

// Once we received the dispatch function is todo app, we can write handleDelete function in which we will return dispatch with type (any name we can give as per requirement) and payload (payload will help us to identify the unquie element from todo list here in this case Id will be unique fo we will pass id as payload in the form of object)

// In app component : - // Here we have to return a new state for this we have to create newState array

// Then we have to loop thorugh the old todos and check if action.payload.id does matches with old todos id we can push the todos to newState and finally when loop ends we can return the newState;

// We can short it by using filter method explain in app component
//---------------------------------

// To do toggle functionality we have to same process like pass action type and payload and write the reducer function in app component