import React, { useState } from 'react'

export const EditForm = ({ appendTodo, task }) => {
  const classBase = 'form';
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    appendTodo(value, task.id);
  };

  return (
    <form className={classBase} onSubmit={handleSubmit}>
        <input 
            type='text'
            className={classBase + '__input'}
            value={value}
            placeholder='Update Task'
            onChange={(e) => setValue(e.target.value)}>
        </input>
        <button type='submit' className={classBase + '__button--submit'}>Update Task</button>
    </form>
  )
}
