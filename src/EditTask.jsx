import React from 'react'
import { useState } from 'react'

const EditTask = ({ editTask, todo }) => {
    const [value, setValue] = useState(todo.todo)

    const handleSubmit = (e) => {
        e.preventDefault()

        editTask(value, todo.id);
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} className='input' />
            <button className='btn'>Update Task</button>
        </form>
    )
}

export default EditTask