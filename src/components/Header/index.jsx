import styles from './header.module.css';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <div id="nameBar">
         <h1>taskApp</h1>
      </div>
      
        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Ingrese una tarea" type="text" onChange={onChangeTitle} value={title} />
        <button>Agregar</button>
      </form> 
    
     
    </header>
  )
}