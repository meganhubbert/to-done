import React, { useState } from 'react';
import { Form } from './Form';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';
import { EditForm } from './EditForm';
import { Footer } from './Footer';
uuidv4();

export const Wrapper = () => {
  const classBase = 'wrapper';

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, {
        id: uuidv4(),
        task: task,
        completed: false,
        isEditing: false}])
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = id => {
    setTasks(tasks.map(task => task.id === id ? {
        ...task, completed: !task.completed
        } : task
    ))
  };

  const editTask = id => {
    setTasks(tasks.map(task => task.id === id ? {
        ...task, isEditing: !task.isEditing
    } : task))
  };

  const updateEditedTask = (newTask, id) => {
    setTasks(tasks.map(task => task.id === id ? {
        ...task, newTask, isEditing: !task.isEditing
    } :  task))
  };

  return (
    <div>
      <div className={classBase}>
          <h1 className={classBase + '__title'}>Get It Done!</h1>
          <Form addTask={addTask} />
          {tasks.map((task) => (
              task.isEditing ?
              <EditForm updateEditedTask={updateEditedTask} task={task} />
              :
              <Task 
                  task={task}
                  key={task.id}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                  editTask={editTask}
              />
          ))}
      </div>
      <Footer />
    </div>
  )
}
