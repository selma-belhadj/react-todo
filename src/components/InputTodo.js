/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
      title: '',
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoItem(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
}
export default InputTodo;
