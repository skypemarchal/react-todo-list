import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, GET_TASKS } from '../redux/actions';
import axios from "axios"

const TodoList = () => {
    const items = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTasks());
    }, []);

    console.log(items);
    const completedItems = items.filter((item) => item.done);

    const reset = () => {
        dispatch({
            type: "reset"
        })
    }

    return (
        (items.length > 0 ?
        <div style={{background: 'wheat', padding: '20px', margin: '10px', borderRadius: '5px'}}>
            <h3>Liste de taches</h3>
            {items.map((item, index) =>(
                <TodoItem key={index} id={index} item={item} dispatch={dispatch} />
            ))}
            <button onClick={reset}>Reset</button>
        </div>
        : 
        <div>Aucune tache ajoutée</div>)
    );
};

export default TodoList;