import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams} from 'react-router-dom';
import { deleteTodo } from "../../slice/TodoSlice";
import {Container, Grid, TextField } from '@mui/material';

const Todo = () => {
    const [todo, setTodo] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const TodoPutch = async() => {
    await fetch(`http://localhost:3100/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title:todo.title,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    useEffect(()=>{
        const  getOneTodo = async () => {
            const res = await fetch(`http://localhost:3100/todos/${id}`)
            const data = await res.json()
            console.log(data)
            setTodo(data)
         }
         getOneTodo()
    },[id])

    const deleteButton = (id) =>{
        dispatch(deleteTodo(id))
        navigate('/', {replace:false})
    }
    return(
        <>
            {todo.title !== undefined ? 
            <Container>
                <TextField 
                label={todo.title}
                variant="filled"
                onChange={(e) => setTodo(state => ({...state, title:e.target.value}))}/>
                {todo.body.map((item, index) =><p key={index}>{item}</p> )}
                <button onClick={()=> deleteButton(todo.id)}> delete</button>
            </Container> 
            : <h1>Sory your todolist not found</h1>}
            <Link to={'/'}>Home Page</Link>
        </>
    )
}

export default Todo