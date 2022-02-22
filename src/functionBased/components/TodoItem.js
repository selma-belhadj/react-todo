/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */

// import React, { Component } from 'react';
// import styles from './TodoItem.module.css';

// const completedStyle = {
//   fontStyle: 'italic',
//   color: '#595959',
//   opacity: 0.4,
//   textDecoration: 'line-through',
// };

// class TodoItem extends Component {
//     state = {
//       editing: false,
//     };

//       handleEditing = () => {
//         this.setState({
//           editing: true,
//         });
//       };

//       handleUpdatedDone = (event) => {
//         if (event.key === 'Enter') {
//           this.setState({ editing: false });
//         }
//       }

//       render() {
//         const { completed, id, title } = this.props.todo;
//         const viewMode = {};
//         const editMode = {};

//         if (this.state.editing) {
//           viewMode.display = 'none';
//         } else {
//           editMode.display = 'none';
//         }
//         return (
//           <li className={styles.item}>
//             <input
//               type="checkbox"
//               className={styles.checkbox}
//               checked={completed}
//               onChange={() => this.props.handleChangeCheck(id)}
//               deletetodo={() => this.props.deletetodo(id)}
//             />
//             <button type="button" onClick={() => this.props.deletetodo(id)}>Delete</button>
//             <div onDoubleClick={this.handleEditing} style={viewMode}>...</div>
//             <span style={completed ? completedStyle : null}>
//               {title}
//             </span>
//             <input
//               type="text"
//               className={styles.textInput}
//               style={editMode}
//               value={title}
//               onChange={(e) => this.props.setUpdate(e.target.value, id)}
//               onKeyDown={this.handleUpdatedDone}
//             />
//           </li>
//         );
//       }
// }

// export default TodoItem;

import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeCheck(id)}
        />
        <button type="button" onClick={() => props.deletetodo(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
