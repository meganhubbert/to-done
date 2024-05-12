import React, { useState } from 'react';
import { Form } from './Form';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
import { EditForm } from './EditForm';
import { Footer } from './Footer';

export const Wrapper = () => {
  const [todos, setTodos] = useState([]);
  const classBase = 'wrapper';


  const addTodo = (todo) => {
    setTodos([...todos, {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false}])
  };

  const deleteTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = id => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {
          ...todo, completed: !todo.completed
        } : todo)
    )
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {
          ...todo, isEditing: !todo.isEditing
      } : todo)
    )
  };

  const appendTodo = (task, id) => {
    setTodos(todos.map((todo) => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing
    } : todo
    ))
  }

  return (
    <div>
      <div className={classBase}>
          <h1 className={classBase + '__title'}>Get It Done!</h1>
          <Form addTodo={addTodo} />
          {todos.map((todo) => 
              todo.isEditing ? 
              <EditForm appendTodo={appendTodo} task={todo} />
               : 
              <Todo
                  key={todo.id}
                  task={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
              />
          )}
      </div>
      <Footer />
    </div>
  )
}
