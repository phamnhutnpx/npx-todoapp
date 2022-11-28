// Cấu trúc dự án đang chia theo từng component nền chia reducer theo slice cho tiện quản lý

const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return { ...state, search: action.payload };
    case "filters/statusTodo":
      return { ...state, status: action.payload };
    case "filters/prioritiesTodo":
      return { ...state, priority: action.payload };
    default:
      return state;
  }
};

export { filtersReducer };
