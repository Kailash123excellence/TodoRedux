import {
  CHANGE_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../action/actionTypes";
const initialState = {
  text: "",
  todoList: [],
  editable: {
    id: null,
    isEdit: false,
  },
};

const todoReducers = (state = initialState, action) => {
  // console.log(action, "))))");
  switch (action.type) {
    case CHANGE_TODO:
      return {
        ...state,
        text: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((s) => s.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        editable: {
          ...state.editable,
          id: action.payload.id,
          isEdit: true,
        },
      };

    default:
      return state;
  }
};

export default todoReducers;
