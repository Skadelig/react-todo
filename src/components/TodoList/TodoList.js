import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const Elements = todos.map((item) => { 
        const { id, ...itemProps } = item;

        return (
        <li className="list-group-item" key={id}>
            <TodoItem 
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
            />
        </li>
        )
    });

    return (
      <div className="b-todo-list">
        <ul className="list-group todo-list">
            {Elements}
        </ul>
      </div>
    );
  };

  export default TodoList; 