import axios from 'axios';
import React, { useState } from 'react';

function AddTodo({ addNewTodo }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    axios.post("http://localhost:4000/addtodo", { todo })
      .then((res) => {
        console.log(res.data);
        addNewTodo(res.data.todo);
        setTodo(""); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='container'>
      <h1>Add Todo</h1>
      <input 
        type="text" 
        id='todo' 
        name='todo' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
