import { combineReducers } from "redux";

import { filtersReducer } from "../components/Filters/FiltersSlice";
import { todoListReducer } from "../components/TodoList/TodoListSlice";

// Cách này import function thủ công
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

// Dùng combineReducers cho tiện trong việc import
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export { rootReducer };
