// Cách 1: khó bảo trì
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todoRemaining;
// };
// export const searchTextSelector = (state) => state.filters.search;

// Cách 2: dùng thư viện reselect cho tiện
import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  searchTextSelector,
  statusSelector,
  prioritySelector,
  todoListSelector,
  (searchText, status, priorities, todoList) => {
    return todoList.filter((todo) => {
      if (status !== "All") {
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
          (priorities.length ? priorities.includes(todo.priority) : true)
        );
      } else {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
    });
  }
);

// status = [All, completed, todo]
