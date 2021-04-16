import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {

  //Hooks
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(['hello', 'gig', 'top']);



  //Events
  const inputhandler = (e) => {
    setInput(e.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }



  return (
    <div className="App">

      <h1>Rishi</h1>

      <form >
        <FormControl>
          <InputLabel htmlFor="my-input">🚨Enter Todo...</InputLabel>
          <Input value={input} onChange={inputhandler} aria-describedby="my-helper-text" />
        </FormControl>
        <Button type="submit" onClick={addTodo} disabled={!input} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {
          todos.map((todo, id) => (
            <Todo todos={todos} no={id} key={id} text={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
