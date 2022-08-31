import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTodoItem,
  addTodo,
  deleteTodo,
  editTodo,
} from "../redux/action/index";

export default function TodoComponent() {
  // const [editable, setEditable] = useState(null);

  const dispatch = useDispatch();
  const {
    todoReducers: { text, todoList, editable },
  } = useSelector((state) => state);

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo({ id: Math.random(), text }));
    dispatch(changeTodoItem({ text: "" }));
  };

  const handleEdit = (id, text) => {
    dispatch(changeTodoItem({ text }));
    dispatch(editTodo(id));
  };
  console.log(editable, "!!!!!!!!!!!!");
  const handleChangeTodo = (e) => {
    if (!editable.isEdit){
dispatch(changeTodoItem({ text: e.target.value }));
    } else{
      const updatedTodoList= todoList.map((val)=>{
          if(val.id==editable.id){
            return{
              ...val,
              text:e.target.value
            }
          }else{
            return val
          }
      })
   dispatch(addTodo({ id: Math.random(), text }));
   dispatch(changeTodoItem({ text: "" }));
    }
  };
  return (
    <>
      <h1>TodoApp Using Redux</h1>
      <div className="container">
        <form onSubmit={(e)=>handleAddTodo(e)}>

        <input
          type="text"
          className="inputTodo"
          value={text}
          placeholder="Enter Todo......"
          onChange={(e) => handleChangeTodo(e)}
          />
        <button className="inputBtn" onClick={handleAddTodo}>
          <i className="material-icons">add</i>
        </button>
          </form>
      </div>

      <div className="showItem">
        <div className="eachItem">
          {todoList.map((val) => {
            return (
              <div className="showTodo">
                <input value={val.text} className="showInput" />

                <button
                  className="inputBtn"
                  onClick={() => handleEdit(val.id, val.text)}
                >
                  <i className="material-icons">edit</i>
                </button>

                <button
                  className="inputBtn"
                  onClick={() => dispatch(deleteTodo(val.id))}
                >
                  <i className="material-icons">delete</i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
