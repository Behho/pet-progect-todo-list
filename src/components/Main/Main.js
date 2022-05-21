import React, { useEffect, useState} from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TodoCard from './TodoCard/TodoCard';
import {Container, Grid,TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodos} from '../../slice/TodoSlice';
import { selectTodos } from '../../slice/TodoSlice';
import { Button } from '@mui/material';



const Main = () => {
    const [search, setSearch] = useState('')
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    useEffect(() => {
    const  GetTodoList = async () => {
        const res = await fetch('http://localhost:3100/todos')
        const data = await res.json()
        dispatch(addTodos(data))
     }
    GetTodoList()
     },[dispatch])

    return(
    <>
    <Container>
        <Grid container justifyContent={"end"}>
          <Grid container item alignItems={"center"} sx={{height:"40vh"}} xs={3}>
              <Grid item xs={6}>
              <Link to={'/createTodo'}>
                <Button variant="contained" style={{background:'#66bb6a'}} endIcon={<NoteAddIcon/>} sx={{height:1}}>
                    New Todo
                </Button>
              </Link>
              </Grid>
              <Grid item xs={10}>
                <TextField
                sx={{width:1}}
                label="Search Todo"
                variant="filled"
                onChange={(e) => setSearch(e.target.value)}/>
              </Grid>
          </Grid>
          <Grid container item xs={9} justifyContent="flex-end">
            <Grid container justifyContent="space-between" alignItems="baseline">
                {todos ? 
                todos.filter(item => item.title.includes(search))
                .map((item) => (<TodoCard key={item.id} card={item} />))
                    : <p> Loading...</p>}
            </Grid>
          </Grid>
        </Grid>
    </Container>
    </>
    )
}
export default Main