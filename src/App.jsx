
import React from 'react'
import TaskList from './Components/TaskList'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'
import { useEffect, useState } from 'react';
import "./Style.css";
import boyImg from './assets/boy.png.jpg';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

   const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  let emoji = "😟"; // default
  if (progress > 30) emoji = "🙂";
  if (progress > 70) emoji = "😄";
  if (progress === 100) emoji = "😃";

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (

    <div className="animated-bg" style={{ minHeight: "100vh" }}>
      <div className='app-container'>
      <div className="emoji-indicator">{emoji}</div>

        <div className='main-card'>

          {/* <header>
            <h1 className='title'>Task Manager</h1>
            <p className='tagline'>Plan better! Work smarter :)</p>
          </header> */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

            <img
              src={boyImg}
              alt="Thinking boy"
              style={{
                width: "180px",      // you can increase/decrease as needed
                height: "auto",
                borderRadius: "12px" // optional smooth corners
              }}
            />

            <div>
              <h1>Task Manager</h1>
              <p>Your Friendly Helper for Daily Productivity</p>
            </div>

          </div> <br></br>


          <Taskform addTask={addTask} />

          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />

          <Progresstracker tasks={tasks} />

          <button onClick={clearTasks}>Clear all tasks</button>

        </div>
      </div>
    </div>
  );
}
