import React, { useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

const reducer = (todos, action) => {
  if (action.type === "DELETE_TODO") {
    // console.log(action.payload.id)

    // Here we have to return a new state for this we have to create newState array

    // const newState = [];

    // // Then we have to loop thorugh the old todos and check if action.payload.id does matches with old todos id we can push the todos to newState and finally when loop ends we can return the newState;

    // for(let todo of todos){
    //   if(todo.id !== action.payload.id){
    //     newState.push(todo);
    //   }
    // }
    // return newState;

    // filter method: filter method always return new array so we can keep only those todos whose ID does not match with action.payload.id

    return todos.filter((todo) => {
      return todo.id !== action.payload.id;
    });
  }
  // to change the completed status we can use map function to loop though the todos and check if todo.id === payload.action.id than we can first save all the todo and than change the completed status to opposite of what was before

  if (action.type === "TOGGLE_COMPLETED") {
    return todos.map((todo) => {
      if(todo.id === action.payload.id){
        return {...todo, completed : !todo.completed}
      } 
      else{
        return todo;
      }
    })
  }

  // Here just check if action.type is equal to ADD_TODO just return all previous todos in array along with payload value that is action.payload.newTodo in this case
  if(action.type === "ADD_TODO"){
    return [...todos, action.payload.newTodo];
  }

  return todos;
};

const initialTodos = [
  { id: "1", title: "Learning HTML", completed: true },
  { id: "2", title: "Learning CSS", completed: false },
  { id: "3", title: "Learning JS", completed: false },
];

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <AddTodoForm dispatch={dispatch}/>
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
};

export default App;

// we call dispatch function and dispatch function call the reducer function
