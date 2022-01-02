import React from 'react';
import Todo from './Todo';
const TodoList = (props) => {
    // console.log(props);
    const { listTodo, isCheckedAll, checkAllTodo} = props;
    return(
        <section style={{padding: '0 20% 0 20%'}}>
            <div className="input-check-all">
                <input 
                    onClick={checkAllTodo}
                    checked={isCheckedAll}
                    className="form-check-input" 
                    type="checkbox"
                />
                <label className="togger-all">Check All</label>
            </div><br/>
            <ul className="list-group">
                {listTodo.map((todo, index) => (
                    <Todo
                    key={todo.id} 
                    {...{todo}}
                    {...props}
                    index={index}
                    />
                ))}
            </ul>
        </section>
    )
}
export default TodoList;