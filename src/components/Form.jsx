import React from 'react';
import { useRef, useState, useReducer } from 'react';
import { useDispatch } from 'react-redux'
import { addTask, getTasks } from '../redux/actions';

const Form = () => {
    const [index, setIndex] = useState(1);
    const inputRef = useRef();
    const dispatch = useDispatch();
    
    function addItem()
    {
      var text = inputRef.current.value;
      setIndex(index+1)
      dispatch(addTask(
        {
          title: text,
          body: "test react",
          deadLine: "2022-06-10",
          isDone: false,
          employeeId: 1
        }
      )) 
      dispatch(getTasks())
      inputRef.current.value = ""
    }

    return (
        <div className='todo-form'>
          <input className='input' ref={inputRef} type="text" placeholder='Nouvelle tache'/>
          <button type='submit' onClick={addItem}>Ajouter</button>
        </div>
    );
};

export default Form;