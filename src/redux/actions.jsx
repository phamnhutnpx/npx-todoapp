/**
 * biến data này nhận vào dữ liệu bên người dùng (UI form nhập) gửi dữ liệu qua
 * Ví dụ: { id: 1, name: "learn redux", completed: false, priority: "high" },
 */

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchTodo = (text) => {
  return {
    type: "filters/searchTodo",
    payload: text,
  };
};

export const statusTodo = (status) => {
  return {
    type: "filters/statusTodo",
    payload: status,
  };
};

export const priorityTodo = (priorities) => {
  return {
    type: "filters/prioritiesTodo",
    payload: priorities,
  };
};
