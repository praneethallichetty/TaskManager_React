import React from 'react'

export default function TaskList({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div>
      <ol style={{ listStylePosition: "inside" }} className='task-list'>
        {tasks.map((task, index) => (
          <li key={index} >
           {/* Task text and metadata */}
            <span>
              {task.text}
              <small> ({task.priority}, {task.category})</small>
            </span>

            {/* Buttons */}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
