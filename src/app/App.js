import './App.scss';
import Form from './form/Form.js';
import Todo from './todo/Todo.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>App</p>
            <Form/>
            <Todo/>
      </header>
    </div>
  );
}

export default App;
