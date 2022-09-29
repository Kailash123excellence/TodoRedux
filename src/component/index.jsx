import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTodoItem,
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from "../redux/action/index";

export default function TodoComponent() {
  const [editable, setEditable] = useState("");
  const dispatch = useDispatch();
  const {
    todoReducers: { text, todoList, isEdit, editTodo },
  } = useSelector((state) => state);

  const handleAddTodo = (e, id) => {
    e.preventDefault();
    dispatch(addTodo({ id: Math.random(), text }));
    dispatch(changeTodoItem({ text: "" }));
    setEditable(false);
  };

  const handleEdit = (id, text, e) => {
    setEditable(id);
    dispatch(changeTodoItem({ text }));
  };

  const handleEditTodo = (e) => {
    e.preventDefault(e);
    dispatch(updateTodo(editable, text));
    setEditable("");
    dispatch(changeTodoItem({text:""}));
  };

  const handleChangeTodo = (e) => {
    dispatch(changeTodoItem({ text: e.target.value }));
  };

  return (
    <>
      <div className="container">
        <h1 className="todoHeading">TodoList App</h1>
        {editable ? (
          <>
            <form className="listForm" onSubmit={handleEditTodo}>
              <input
                type="text"
                name="title"
                value={text}
                className="form-control"
                placeholder="Enter todoName...."
                onChange={(e) => handleChangeTodo(e)}
              />
              <div className="todoCreate">
                <button className="editButton" type="submit">
                  EditTodo
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <form className="listForm" onSubmit={handleAddTodo}>
              <input
                type="text"
                name="title"
                value={text}
                className="form-control"
                placeholder="Enter todoName...."
                onChange={(e) => handleChangeTodo(e)}
              />
              <div className="todoCreate">
                <button className="editButton" type="submit">
                  CreateTodo
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div className="showItem">
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
    </>
  );
}
