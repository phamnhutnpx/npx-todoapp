import React,{ memo, useState } from 'react';

// Dùng memo để không render lại khi không có gì thay đổi
const Header = memo((props) => {
    const [text, setText] = useState('');
    const { addTodo } = props;

    // Xử lí sự kiện khi nhấn Enter
    const onAddTodo = (e = {}) => {
        // console.log(e);
        if(e.key === 'Enter' && text){
            // console.log(text);
            addTodo({
                id: new Date().valueOf(),
                text,
                isComplete: false
            })
            setText('');
        }
    }
    return (
        <header>
            <h3>TODO APP NPX</h3>
            <div className="g-3">
                <input type="time" className="col-sm border-primary border-1"/>
                <input type="date" className="col-sm border-primary border-1"/>
                <input
                    className="col-sm-5 border-primary border-1"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={(e) => onAddTodo(e)}
                />
            </div>
        </header>
    )
})

export default Header;