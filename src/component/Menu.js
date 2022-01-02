import React from 'react';

const Menu = (props) => {
    const { setStatusFilter, status, numOfTodo, numOfTodoLeft, clearCompleted} = props;
    const filterBtns = [
        {
            title: 'Todo All',
            isActive: status === 'ALL',
            onClick: () => setStatusFilter('ALL'),
            link: ''
        },
        {
            title: 'Active',
            isActive: status === 'ACTIVE',
            onClick: () => setStatusFilter('ACTIVE'),
            link: 'active'
        },
        {
            title: 'Completed',
            isActive: status === 'COMPLETED',
            onClick: () => setStatusFilter('COMPLETED'),
            link: 'completed'
        }
    ]
    return (
        <menu className="">
            <span className="">
                <strong>{numOfTodoLeft}</strong>
                <span> </span>
                <span>{numOfTodoLeft <= 1 ? 'item' : 'items'}</span>
                <span> active</span>
            </span>
            <ul className="filters btn-group">
                {filterBtns.map(btn => (
                    <FilterBtn key={btn.title} {...btn} />
                ))}
            </ul>
            {numOfTodo > numOfTodoLeft && <button className="btn btn-danger " onClick={clearCompleted} >Clear completed</button>}
        </menu>
    )
}
const FilterBtn = (props) => {
    const { title, onClick, link, isActive } = props;
    return (
        <>
            <li>
                <a 
                    href={`#/${link}`}
                    className={`${isActive ? 'btn btn-primary ' : 'btn'}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    )
}
export default Menu;