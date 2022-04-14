import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = (/* {items, dispatch} */) => {

    const items = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("todos : ", items);

    return (
        <div>
            <h3>Liste de taches</h3>
            {items.map((item, index) =>(
                <TodoItem key={index} id={index} item={item} dispatch={dispatch} />
            ))}
            
        </div>
    );
};

export default TodoList;