import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { Link, useNavigate} from "react-router-dom"; 
import { createTodo } from "../../slice/TodoSlice";
import {Container} from '@mui/material';


const CreateTodo = () =>{
    
  const [TodoTitle, setTodoTitle] = useState()
  const [todolist, setTodolist] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ref = useRef();
  const testpost = (title) => {
    const time = `${new Date().toLocaleDateString().slice(0,-5)}.${new Date().toLocaleTimeString().slice(0,-3)}`;
    const todo = {
        title:title,
        todos:todolist,
        time:time
    }
    dispatch(createTodo(todo))
    navigate('/')
  }

  const push = (e,todo) => {
    if(e.key === 'Enter'){
        if(todo !== ''){
            setTodolist([...todolist, todo])
        }else{
            console.log('sory')
        }
    e.preventDefault()
    ref.current.value = ''
  }
}
    return(
    <Container>
      <TextField
        label="Title" 
        variant="filled"
        color='success'
        onChange={(e) => setTodoTitle(e.target.value)}/>
        <TextField
        label="Add todo" 
        variant="filled"
        color='success'
        onKeyDown={(e) => push(e,e.target.value)}
        inputRef={ref}/>
        {todolist ? 
        todolist.map((item,index) => (
        <div key={index}>
            <p>{item}</p>
            <p onClick={() => setTodolist(todolist.filter(filteritem => filteritem !== item))}>delete item</p>
        </div>
        ))
        : null}
        <button onClick={() => testpost(TodoTitle,todolist)}>create todo</button>
        <Link to='/'> Create todo page</Link>
    </Container>
    )
}

export default CreateTodo