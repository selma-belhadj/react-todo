/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

    handleChange = (id) => {
      this.setState((prevState) => (
        {
          todos: prevState.todos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          }),
        }
      ));
    };

    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    };

    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        }),
      });
    };

    render() {
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoItem={this.addTodoItem} />
            <TodosList
              todos={this.state.todos}
              handleChangeCheck={this.handleChange}
              deletetodo={this.delTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      );
    }
}
export default TodoContainer;
