import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css'


const Task = ({ todo, toggleComplete, editTask, deleteTask }) => {
    return (
        <div className='tasks'>
            <p className={`${todo.completed ? 'completed' : 'incompleted'}`} onClick={() => { toggleComplete(todo.id) }}>{todo.todo}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTask(todo.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => { deleteTask(todo.id) }} />
            </div>
        </div >
    )
}

export default Task