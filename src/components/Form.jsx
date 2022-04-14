import React from 'react';
import { useRef, useState, useReducer } from 'react';
import { useDispatch } from 'react-redux'

const Form = () => {
    const [index, setIndex] = useState(1);
    const inputRef = useRef();
    const dispatch = useDispatch();
    
    function addItem()
    {
      var text = inputRef.current.value;
      setIndex(index+1)
      dispatch({
        type: "addItem",
        payload: {id: index, name: text, done: false}
      }) 
  
      inputRef.current.value = ""
    }

    return (
        <div className='todo-form'>
          <input className='input' ref={inputRef} type="text" placeholder='Nouvelle tache'/>
          <button onClick={addItem}>Ajouter</button>
        </div>
    );
};

export default Form;