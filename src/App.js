import './App.css';
import TodoList from './components/TodoList';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Form from './components/Form';

function App() {
  
  

  /* function reducer(state, action)
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

  const [items, dispatch] = useReducer(reducer, initialState); */

  

  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <TodoList /* items={items} dispatch={dispatch} *//> 
      </div>
    </Provider>
    
  );
}

export default App;
