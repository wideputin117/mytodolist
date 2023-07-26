import './App.css';
import { useState,useEffect } from 'react';
import Switch from "react-switch";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import TaskContainer from './Components/TaskContainer';


function App() {
  const [ task, setTasks] = useState([]); // to set tasks
  const [ darkMode, setDarkMode ] = useState(false); // to set dark mode

  useEffect(()=>{
    let myTodo = localStorage.getItem('myTodoTasks');
    if(myTodo){
      setTasks(JSON.parse(myTodo));
    }
  }, [])
  return (
       <div className={`${darkMode ? 'darkMode-App':'lightMode-App'} App`}>
        <div className={`${ darkMode ? 'darkMode-app-title-container' : "lightMode-app-title-container"} app-title-container`}>
          <h1 className="app-title">Todo App</h1>
        </div>
        <Switch
        checked={darkMode}
        onChange={()=>setDarkMode(!darkMode)}
        uncheckedIcon={<div className='check-sun-btn'>
          <BsSunFill size={18} /></div>}
        checkedIcon={ <div className='check-moon-btn'>
          <BsFillMoonStarsFill size={18} /></div>} />
        <TaskContainer task={task} setTasks={setTasks} darkMode={darkMode} />
       </div>
  );
}

export default App;
