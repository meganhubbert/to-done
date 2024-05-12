import React, { useState } from 'react'

export const Form = ({ addTodo }) => {
  const classBase = 'form';
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className={classBase} onSubmit={handleSubmit}>
        <input 
            type='text'
            className={classBase + '__input'}
            value={value}
            placeholder='What do you need to get done?'
            onChange={(e) => setValue(e.target.value)}>
        </input>
        <button type='submit' className={classBase + '__button--submit'}>Add Task</button>
    </form>
  )
}
