import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "../components/types";

const initialState: TodoState = {
  todos: [
    { id: 0, text: "Изучить Rtk", completed: true },
    { id: 1, text: "Сделать TodoList", completed: true },
    { id: 2, text: "Залить на GitHub", completed: true },
    { id: 3, text: "Отправить на проверку", completed: true },
    { id: 4, text: "Работать", completed: false },
  ],
  filterVisibility: "Все",
  filterSort: "Наименование",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: state.todos.length,
        text: action.payload,
        completed: false,
      };
      state.todos = [...state.todos, todo];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo: Todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setVisibilityFilter: (state, action: PayloadAction<string>) => {
      state.filterVisibility = action.payload;
    },
    setSortFilter: (state, action: PayloadAction<string>) => {
      state.filterSort = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  setSortFilter,
  setVisibilityFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
