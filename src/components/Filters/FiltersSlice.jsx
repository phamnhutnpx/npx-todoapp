// Cấu trúc dự án đang chia theo từng component nền chia reducer theo slice cho tiện quản lý

// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// export const filtersSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchTodo":
//       return { ...state, search: action.payload };
//     case "filters/statusTodo":
//       return { ...state, status: action.payload };
//     case "filters/prioritiesTodo":
//       return { ...state, priority: action.payload };
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  search: "",
  status: "All",
  priority: [],
};
export default createSlice({
  name: "filters",
  initialState: initState,
  reducers: {
    searchTodo: (state, action) => {
      // mutation || IMMER của toolkit hỗ trợ convert sang immutable
      state.search = action.payload;
    },
    statusTodo: (state, action) => {
      state.status = action.payload;
    },
    prioritiesTodo: (state, action) => {
      state.priority = action.payload;
    },
  },
});
