import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='todo-form'>
        <input type="text" placeholder='Nouvelle tache'/>
        <button>Ajouter</button>
      </div>

      <TodoList />
    </div>
  );
}

export default App;
