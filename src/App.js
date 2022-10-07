import './App.css';
import TodoList from './components/TodoList';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Form from './components/Form';

function App() {
  
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
