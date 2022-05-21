import {Grid, Paper } from '@mui/material';
import React from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, addTodos } from '../../../slice/TodoSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoCard = (props) => {
    const card = props.card
    const dispatch = useDispatch()
    const deleter = (id) => {
        dispatch(deleteTodo(id))
        dispatch(addTodos())
    }
    
    return(
        <Grid 
        item xs={2.5} 
        sx={{marginTop:"20px"}}>
            <Paper elevation={2} sx={{position:'relative'}}>
                 <DeleteForeverIcon sx={{
                 width:'25px',
                height:'25px', 
                position:'absolute',
                right:0,
                top:0}}
                onClick={()=> deleter(card.id)}/>
                <Link to={`/TodoCard/${card.id}`}>
                     <Grid container sx={{height:'30vh'}}>
                        <Grid item container justifyContent="center" 
                                alignItems="center" xs={12} sx={{height:"20%"}}>
                                    {card.title}
                        </Grid>
                        <Grid item xs={12} sx={{height:"80%"}}>
                            {card.body.map((todo, index) => (<p key={index}>{index + 1}. {todo}</p>))}
                            {card.createtime}
                         </Grid>
                     </Grid>
                </Link>
            </Paper>
        </Grid>
    )
}

export default TodoCard