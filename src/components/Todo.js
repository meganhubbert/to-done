import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const classBase = 'item';

  return (
    <div className={classBase}>
        <p onClick={() => toggleComplete(task.id)} className={classBase + '__task ' + (task.completed ? classBase + '__task--completed' : '')} >
          <div className={classBase + '__checkbox'}></div>
          {task.task}
        </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className={classBase + '__trash-icon'} icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
