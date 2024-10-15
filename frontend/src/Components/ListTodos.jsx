import React from 'react';

function Listtodos({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>
      {
        todos.length > 0 ? (
          todos.map((todo, index) => (
            <p key={index}>{todo.todotitle}</p> 
          ))
        ) : (
          <p>No todos available</p>
        )
      }
    </div>
  );
}

export default Listtodos;
