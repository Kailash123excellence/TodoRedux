import { ADD_TODO,
   CHANGE_TODO, DELETE_TODO, 
   EDIT_TODO , 
   UPDATE_TODO,
  MARK_COMPLETED,
CLEAR_ALL_TODO } from "./actionTypes";

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

export const editTodo = (id,text) => {
  return {
    type: EDIT_TODO,
    payload:{
      id:id,
      text:text
    },
    isEdit:false,
  };
};


export const updateTodo=(id,text)=>{
  return{
    type: UPDATE_TODO,
    payload:{
    todoId:id,
    todoTitle:text,
  } 
 }
}

export const markCompleted=(id)=>{
return {
  type:MARK_COMPLETED,
  payload:{
    selectedTodoId:id
  }
}
}