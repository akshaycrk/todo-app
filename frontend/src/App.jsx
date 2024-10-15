import './App.css';
import { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import Listtodos from './Components/ListTodos';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/listtodos")
      .then((res) => {
        console.log(res,"response")
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  
  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]); 
  };

  return (
    <div className='homecontainer'>
      <AddTodo addNewTodo={addNewTodo} />
      <Listtodos todos={todos} />
    </div>
  );
}

export default App;
