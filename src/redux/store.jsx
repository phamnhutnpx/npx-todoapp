// import { createStore } from "redux";
// import { rootReducer } from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

/**
 * createStore nhận vào 3 tham số (không bắt buộc đủ 3)
 * 1. rootReducer (là một function)
 * 2. initState (bất kỳ)
 * 3. enhancer (là một function)
 * */
// const composeEnhancers = composeWithDevTools;
// const store = createStore(rootReducer, composeEnhancers());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";
export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
