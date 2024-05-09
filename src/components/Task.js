import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  const classBase = 'item';

  return (
    <div className={classBase}>
        <p onClick={() => toggleComplete(task.id)} className={classBase + '__task ' + (task.completed ? classBase + '__task--completed' : '')} >
          <div className={classBase + '__checkbox'}></div>
          {task.task}
        </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)} />
            <FontAwesomeIcon className={classBase + '__trash-icon'} icon={faTrash} onClick={() => deleteTask(task.id)} />
        </div>
    </div>
  )
}
