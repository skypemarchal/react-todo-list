import React, { useEffect, useState } from 'react';
import { deleteTask } from '../redux/actions';

const TodoItem = (props) => {
    const item = props.item;
    const dispatch = props.dispatch;
    const key = props.id;

    const [className, setClassName] = useState("todo-item")
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if(item.done)
        {
            setClassName("todo-item-completed");
        }
    }, []);

    function completeTask()
    {
        item.done ? setClassName("todo-item") : setClassName("todo-item-completed");

        dispatch({
            type: "completeItem",
            payload: key
        })
    }

    function editTask()
    {
        setEdit(!edit);
    }

    return (
        
        <div className={className}>
            {!edit ? item.title : <div style={{display: 'flex'}}><input type="text" value={item.name}  /><button>Valider</button></div> }
            
            <div className="todo-actions">
                <button onClick={completeTask}>&#x2713;</button>
                <button onClick={editTask}>&#x34556;</button>
                <button onClick={() => dispatch(deleteTask(item.id))}>x</button>
            </div>
            
        </div>
        
    );
};

export default TodoItem;