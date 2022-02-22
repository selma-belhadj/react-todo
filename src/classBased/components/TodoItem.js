/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

class TodoItem extends Component {
    state = {
      editing: false,
    };

      handleEditing = () => {
        this.setState({
          editing: true,
        });
      };

      handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          this.setState({ editing: false });
        }
      }

      render() {
        const { completed, id, title } = this.props.todo;
        const viewMode = {};
        const editMode = {};

        if (this.state.editing) {
          viewMode.display = 'none';
        } else {
          editMode.display = 'none';
        }
        return (
          <li className={styles.item}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => this.props.handleChangeCheck(id)}
              deletetodo={() => this.props.deletetodo(id)}
            />
            <button type="button" onClick={() => this.props.deletetodo(id)}>Delete</button>
            <div onDoubleClick={this.handleEditing} style={viewMode}>...</div>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
            <input
              type="text"
              className={styles.textInput}
              style={editMode}
              value={title}
              onChange={(e) => this.props.setUpdate(e.target.value, id)}
              onKeyDown={this.handleUpdatedDone}
            />
          </li>
        );
      }
}

export default TodoItem;
