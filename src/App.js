import { useRef } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [index, setIndex] = useState(1);
  const inputRef = useRef();
  const initialState = [];

  function reducer(state, action)
  {
    switch(action.type)
    {
        
      case "addItem":
        return [...state, action.payload]

      case "deleteItem":
        var current = [...state]
        var news = current.splice(action.payload, 1)

        console.log(news);
        return current;//[action.payload];
      case "completeItem":
        current = [...state];
        current[action.payload].done = true;
        //console.log(current[action.payload]);
        return current;
      default:
        return state;
    }
  }

  const [items, dispatch] = useReducer(reducer, initialState);

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
    <div className="App">
      <div className='todo-form'>
        <input ref={inputRef} type="text" placeholder='Nouvelle tache'/>
        <button onClick={addItem}>Ajouter</button>
      </div>

      <TodoList items={items} dispatch={dispatch}/> 
    </div>
  );
}

export default App;
