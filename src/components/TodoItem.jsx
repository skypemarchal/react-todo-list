import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TodoItem = (props) => {
    const item = props.item;
    const dispatch = props.dispatch;
    const key = props.id;

    const [className, setClassName] = useState("todo-item")

    useEffect(() => {
        if(item.done)
        {
            setClassName("todo-item-completed");
        }
    }, [item]);

    function deleteTask()
    {
        dispatch({
            type: "deleteItem",
            payload: key
        })
    }

    function completeTask()
    {
        setClassName("todo-item-completed");
        dispatch({
            type: "completeItem",
            payload: key
        })
    }

    return (
        <div className={className}>
            {item.name}
            <div className="todo-actions">
                <button onClick={completeTask}>v</button>
                <button onClick={deleteTask}>-</button>
            </div>
        </div>
    );
};

export default TodoItem;