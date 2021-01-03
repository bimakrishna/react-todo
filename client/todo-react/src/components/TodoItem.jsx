import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/actions'
import { updateTodo } from '../redux/actions'
import '../App.css';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch()
    return(
        <div className="row justify-content-center mt-5">
            <div className="card mx-2 align-items-center">
            <div className="card-header">20.12.2020</div>
                <div className="col sm">
                    {editable? <input type='text' className='form-control' value={name} 
                        onChange={ (e) => setName(e.target.value) }/>: <h4>{todo.name}</h4>  }
                </div>
                <button onClick={()=> { dispatch(updateTodo( {...todo, name: name }))
                       if(editable) { setName(todo.name) }
                        setEditable(!editable) }} className="btn btn-warning m-2">
                {editable ? 'Update' : 'Edit'}</button>
                <button 
                    onClick={() => dispatch(deleteTodo(todo.id))} 
                    className="btn btn-danger m-2"
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem