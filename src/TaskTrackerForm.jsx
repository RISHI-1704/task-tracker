import React from 'react'
import { useState } from 'react'
import './index.css'


const TaskTrackerForm = ({ addTask }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value) {
            addTask(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} className='input' placeholder='Enter Task' />
            <button className='btn'>Add Task</button>
        </form>
    )
}

export default TaskTrackerForm