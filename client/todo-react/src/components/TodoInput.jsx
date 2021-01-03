import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

function TodoInput() {
    let [name, setName] = useState()
    let dispatch = useDispatch()
    return (
        <div>
                <div className="row m-2 mt-5">
                    <input 
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        type="text" 
                        className="col form-control"/>
                    <button onClick={() => {
                        dispatch(addTodo(
                            {
                                name: name
                            }
                        ))
                        setName('');
                    }} className="btn btn-primary mx-2">Add</button>
                </div>
        </div>
    )
}

export default TodoInput
