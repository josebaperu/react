import './App.scss';
import Form from './form/Form.js';
import Todo from './todo/Todo.js';
import {useState} from "react";
import {AppContext} from "./context/AppContext";

const App = () => {
    const [items, setItems] = useState([]);

  return (
  <AppContext.Provider value= {{items, setItems}}>
      <div className="App">
      <header className="App-header">
          <p>App {items.length}</p>
            <Form/>
            <Todo/>
      </header>
    </div>
  </AppContext.Provider>
  );
}

export default App;
