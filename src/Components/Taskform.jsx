import React from 'react'
import { useState } from 'react'


export default function Taskform({ addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');

    const handlesubmit = (e) => {
        e.preventDefault();  //refresh

        if (!task.trim()) return;
        addTask({
            text: task,
            priority,
            category,
            completed: false
        });

        //reset
        setTask('');
        setPriority('Medium');
        setCategory('General');
    };

    return (
        <form onSubmit={handlesubmit} className='task-form'>
            <div id='input'>
                <input type='text' placeholder='Enter the task'
                value={task}
                onChange={(e) => setTask(e.target.value)} />
                <button>Add Task</button>
            </div>

            <div id='buttons'>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="Medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}
