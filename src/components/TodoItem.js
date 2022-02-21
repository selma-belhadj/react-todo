/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';

const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeCheck(props.todo.id)}
      deletetodo={() => props.deletetodo(props.todo.id)}
    />
    <button type="button" onClick={() => props.deletetodo(props.todo.id)}>Delete</button>
    {props.todo.title}
  </li>
);

export default TodoItem;
