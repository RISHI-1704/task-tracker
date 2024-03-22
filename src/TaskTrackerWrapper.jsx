import React, { useState } from 'react';
import TaskTrackerForm from './TaskTrackerForm';
import { v4 as uuidv4 } from "uuid";
import Task from './Task';
import EditTask from './EditTask';

const TaskTrackerWrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: uuidv4(), todo: task, completed: false, isEditing: false }]);
    }

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const editTask = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id ? { ...task, isEditing: !task.isEditing } : task
            })
        )
    }

    const editTodo = (todo, id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, todo, isEditing: !task.isEditing } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <>
            <h1>Task Tracker</h1>
            <div className='wrapper'>
                <TaskTrackerForm addTask={addTask} />
                {tasks.map(task => (
                    task.isEditing ? (
                        < EditTask editTask={editTodo} todo={task} />
                    ) :
                        (
                            <Task
                                key={task.id}
                                todo={task}
                                toggleComplete={toggleComplete}
                                editTask={editTask}
                                deleteTask={deleteTask} />
                        )

                ))}
            </div>
        </>
    );
}

export default TaskTrackerWrapper;
