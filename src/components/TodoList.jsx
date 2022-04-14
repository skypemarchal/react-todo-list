import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items, dispatch}) => {
    return (
        <div>
            Todolist
            <ul>
            {items.map((item, index) =>(
                <TodoItem key={index} id={index} item={item} dispatch={dispatch} />
            ))}
            </ul>
        </div>
    );
};

export default TodoList;