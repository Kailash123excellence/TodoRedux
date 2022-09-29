import {
  CHANGE_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_COMPLETED,
  UPDATE_TODO,
} from "../action/actionTypes";
const initialState = {
  text: "",
  todoList: [],
  isEdit: false,
  editTodoId: "",
};

const todoReducers = (state = initialState, action) => {
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
        isEdit: action.isEdit,
      };

    case DELETE_TODO:
      const newTodoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todoList: newTodoList,
      };

    // case EDIT_TODO:
    //   // const editTodo= action.payload.id;
    //   let newEditTodo = state.todoList.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   newEditTodo.text = action.payload.text;
    //   const Updated = state.todoList.push(newEditTodo);

    //   return {
    //     ...state,
    //     isEdit: action.isEdit,
    //     todoList: [...todoList, Updated],
    //   };

    case UPDATE_TODO:
      const { todoId, todoTitle } = action.payload;
      const todoLists = state.todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            text: todoTitle,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todoList: todoLists,
        Editable: "",
      };

    default:
      return state;
  }
};

export default todoReducers;
