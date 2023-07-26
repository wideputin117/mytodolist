import React, {useState} from 'react';
import Task from '../Task';
import './TaskContainer.css';

const TaskContainer = ({tasks, setTasks, darkMode}) => {
    const [todo , setTodo] = useState({completed:false,title:"",description:"" })
    //function to submit the task
    const handleSubmit = (e)=>{
          e.prevenDefault();
          if(todo.title){
            let newTask = {...todo};
            let newTasks = [...tasks,newTask]
            setTasks(newTasks);
            setTodo({title:'',description:'',completed:false })
          }
    }
    const handleChange= (e)=>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }
    return(
        <div className='task-container'>
            <form className='input-form' action='handleSubmit' onChange={handleSubmit}>
                <input className='task-input task-input-title' name='title' type='text' placeholder='Enter Title'
                onChange={handleChange} value={todo.title} />
                <input className='task-input task-input-desc' name='description' type='text' placeholder='Enter Description'
                onChange={handleChange} value={todo.description} />
                <button className={`task-btn ${darkMode ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`}
                type='submit'>ADD</button>
            </form>
            <div className={`${darkMode ? 'darkMode-box-task-container': "lightMode=box-task-container"}box-task-container`}>
                {tasks?.map((task,i)=>{
                    return <Task task={task} tasks={tasks} setTasks={setTasks} index={i} darkMode={darkMode} key={i} />
                })}
            </div>
        </div>
    )
}
export default TaskContainer