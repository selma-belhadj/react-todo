/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

// import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import TodosList from './TodosList';
// import Header from './Header';
// import InputTodo from './InputTodo';

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     const temp = localStorage.getItem('todos');
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem('todos', temp);
//     }
//   }

//     handleChange = (id) => {
//       this.setState((prevState) => (
//         {
//           todos: prevState.todos.map((todo) => {
//             if (todo.id === id) {
//               return {
//                 ...todo,
//                 completed: !todo.completed,
//               };
//             }
//             return todo;
//           }),
//         }
//       ));
//     };

//     delTodo = (id) => {
//       this.setState({
//         todos: [
//           ...this.state.todos.filter((todo) => todo.id !== id),
//         ],
//       });
//     };

//     addTodoItem = (title) => {
//       const newTodo = {
//         id: uuidv4(),
//         title,
//         completed: false,
//       };
//       this.setState({
//         todos: [...this.state.todos, newTodo],
//       });
//     };

//     setUpdate = (updatedTitle, id) => {
//       this.setState({
//         todos: this.state.todos.map((todo) => {
//           if (todo.id === id) {
//             todo.title = updatedTitle;
//           }
//           return todo;
//         }),
//       });
//     };

//     render() {
//       return (
//         <div className="container">
//           <div className="inner">
//             <Header />
//             <InputTodo addTodoItem={this.addTodoItem} />
//             <TodosList
//               todos={this.state.todos}
//               handleChangeCheck={this.handleChange}
//               deletetodo={this.delTodo}
//               setUpdate={this.setUpdate}
//             />
//           </div>
//         </div>
//       );
//     }
// }
// export default TodoContainer;

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeCheck={handleChange}
          deletetodo={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
