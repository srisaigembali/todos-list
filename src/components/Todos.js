import React from 'react';
import { TodoItem } from './TodoItem';

const Todos = (props) => {
  const myStyle = {
    minHeight: '60vh',
    margin: '40px auto',
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No Todos to Display
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};

export default Todos;
