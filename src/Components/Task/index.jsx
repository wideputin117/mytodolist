import React from 'react';
import './task.css';
import { MdCancel, MdDoneAll } from 'react-icons/md'
import { json } from 'stream/consumers';
 
const Task=({task, tasks, setTasks, index, darkMode}) =>{
    const handleComplete=(e)=>{
        e.preventDefault();
        let newTasks=[...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
    const saveToLocal= (name , data)=>{
        localStorage.setItem(name,JSON.stringify(data));
    }
    const handleRemove=(e)=>{
        e.preventDefault();
        let newTasks=[...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
        saveToLocal('myTodoList',newTasks);
    }
    return(
        <div className={`${darkMode ? 'darkMode-task-container' : "lightMode-task-container"} box-task-container`}>
            <div className={`${darkMode ? 'darkMode-box-task': "lightMode-box-task"} box-task`}
              style={{textDecoration: task.completed ? "line-through":""}}>
                   <div className={`${darkMode ? 'darkMode-task-title':"lightMode-task-title"} box-task-title`}
              style={{textDecoration: task.completed ? "line-through":""}}>{task.title}</div>
                   <div className={`${darkMode ? 'darkMode-task-description':"lightMode-task-description"}box-task-description`}
              style={{textDecoration: task.completed ? "line-through":""}}>{task.description}</div>
            </div>  
          <div className={`${darkMode ?'darkMode':'lightMode'} box-task-action`}>
            <button className={`${darkMode? 'darkMode-task-completed':'lightMode-task-completed'} box-task-completed
            ${darkMode? 'darkMode-task-btn': "lightMode-task-btn"} box-task-btn`} onClick={handleComplete}><MdDoneAll size={20} /></button>
             <button className={`${darkMode? 'darkMode-task-remove':'lightMode-task-remove'} box-task-remove
            ${darkMode? 'darkMode-task-btn': "lightMode-task-btn"} box-task-btn`} onClick={(e)=>handleRemove(e)}><MdCancel size={20} /></button>
          </div>
        </div>
     )
 }
 export default Task