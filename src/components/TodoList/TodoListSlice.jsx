// const initState = [
//   { id: 1, name: "learn redux", completed: false, priority: "High" },
//   { id: 2, name: "learn react", completed: true, priority: "Medium" },
// ];

// export const todoListSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";
const initState = [
  { id: 1, name: "learn redux", completed: false, priority: "High" },
  { id: 2, name: "learn react", completed: true, priority: "Medium" },
];

export default createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
