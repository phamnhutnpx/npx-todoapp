import React, { PureComponent } from 'react';

// import các component
import Header from './component/Header';
import Menu from './component/Menu';
import TodoList from './component/TodoList';

// import các file css
import './App.css';
import './css/Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const isNotCheckedAll = ((todos = []) => todos.find(todo => !todo.isComplete));

// hàm xử lí khi thực hiện bộ lọc trên menu
const filterByStatus = (todos = [], status = '', id = '') => {
  switch (status) {
    case 'ACTIVE':
      return todos.filter(todo => !todo.isComplete);
    case 'COMPLETED':
      return todos.filter(todo => todo.isComplete);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== id);
    default:
      return todos;
  }
}

class App extends PureComponent {
  state = {
    listTodo: [{
      id: 1,
      createTimeNow: "23:22 12-03-2022",
      text: 'Todo 1',
      isComplete: true
    },
    {
      id: 2,
      createTimeNow: "23:22 12-03-2022",
      text: 'Todo 2',
      isComplete: false
    }],
    todoEditingId: '',
    isCheckedAll: false,
    status: 'ALL'
  }
  // xử lí checked all
  componentWillMount = () => {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.listTodo)
    })
  }
  // thêm todo mới
  addTodo = (todo = {}) => {
    this.setState(preState => ({
      listTodo: [...preState.listTodo, todo]
    }))
  }
  // lấy dữ liệu todo ra để edit
  getTodoEditingId = (id = '') => {
    this.setState({ todoEditingId: id })
  }
  // bắt sự kiện khi đúp chuột vào cái todo
  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0) {
      const { listTodo: list } = this.state;
      list.splice(index, 1, todo);
      this.setState({
        listTodo: list,
        todoEditingId: ''
      });
    }
  }
  // xử lí check completed
  markCompleted = (id = '') => {
    const { listTodo } = this.state;
    const updateList = listTodo.map((todo) => todo.id === id ? ({ ...todo, isComplete: !todo.isComplete }) : todo);
    this.setState(() => ({
      listTodo: updateList,
      isCheckedAll: !isNotCheckedAll(updateList)
    }))
  }
  // xử lí check all completed
  checkAllTodo = () => {
    const { listTodo, isCheckedAll } = this.state;
    this.setState(preState => (
      {
        listTodo: listTodo.map(todo => ({ ...todo, isComplete: !isCheckedAll })),
        isCheckedAll: !preState.isCheckedAll
      }
    ))
  }
  // 
  setStatusFilter = (status = '') => {
    this.setState({
      status
    })
  }
  // xử lí clear completed
  clearCompleted = () => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: filterByStatus(listTodo, 'ACTIVE')
    })
  }
  // xử lí xóa todo
  removeTodo = (id = '') => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: filterByStatus(listTodo, 'REMOVE', id)
    })
  }

  render() {
    const { listTodo, todoEditingId, isCheckedAll, status } = this.state;
    return (
      <div className="App">
        <Header
          addTodo={this.addTodo}
        />
        <Menu
          setStatusFilter={this.setStatusFilter}
          status={status}
          clearCompleted={this.clearCompleted}
          numOfTodo={listTodo.length}
          numOfTodoLeft={filterByStatus(listTodo, 'ACTIVE').length}
        />
        <TodoList
          listTodo={filterByStatus(listTodo, status)}
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
          isCheckedAll={isCheckedAll}
          checkAllTodo={this.checkAllTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}
export default App;
