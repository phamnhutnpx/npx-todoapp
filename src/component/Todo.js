import React,{ useState } from 'react';

const Todo = (props) => {
    const { todo, todoEditingId, getTodoEditingId, onEditTodo, index, markCompleted, removeTodo } = props;
    // console.log(todo);
    const isEditing = todoEditingId === todo.id;

    // xét lại nội dung todo sau khi chỉnh sửa
    const [text, setText] = useState(todo.text);
    const [date, setDate] = useState(todo.date);

    // xử lí chỉnh sửa todo
    const editTodo = () => {
        onEditTodo({
            ...todo,
            text
        }, index)
    }
    
    return (
        <li className={
            `${isEditing ? 'editing' : ''} 
            ${todo.isComplete ? 'completed' : ''}`
            }>
            {!isEditing ?
                <div className="container-todo list-group-item view bg-light border border-primary rounded-2">
                    <input 
                        className="toggle form-check-input float-start" 
                        type="checkbox" 
                        checked={todo.isComplete}
                        onChange={() => markCompleted(todo.id)}
                    />
                    <span 
                        className="todo-label float-start"
                    >16:04 - {}</span>
                    <label 
                        className="todo-label"
                        onDoubleClick={() => getTodoEditingId(todo.id)}    
                    >{ todo.text }</label>
                    
                    <button className="btn-delete-todo btn-sm btn-outline-danger btn float-end "
                    onClick={() => removeTodo(todo.id)}
                    >X</button>
                </div> :
                <input 
                    className="bg-warning edit" 
                    type="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onBlur={editTodo}
                    onKeyPress={(e) => {
                        if(e.key === "Enter"){
                            editTodo();
                        }
                    }}
                />            
            }
        </li>
    )
}
export default Todo;