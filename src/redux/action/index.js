import { ADD_TODO, CHANGE_TODO, DELETE_TODO, EDIT_TODO , UPDATE_TODO } from "./actionTypes";

export const changeTodoItem = ({ text }) => {
  return {
    type: CHANGE_TODO,
    payload: text,
  };
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
    },
  };
};


export const updateTodo=()=>{
  return{
    type: UPDATE_TODO,
    payload:{
      
  } 
 }
}