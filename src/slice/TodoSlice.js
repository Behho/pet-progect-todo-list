import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:[],
    status:'indle',
    error:null
}

export const getTodos = createAsyncThunk(
    'Todo/getTodos',
    async () => {
        const res = await fetch('http://localhost:3100/todos')
        const data = await res.json()
        return data
    }
) 

// export const deleteTodoInList = createAsyncThunk(
//     'Todo/deleteTodoInList',
//     async(id) => {
//         await fetch(`http://localhost:3100/todos/${id}`, {
//             method: 'DELETE',
//         })
//         const newtodoslist = await fetch('http://localhost:3100/todos')
//         const data = await newtodoslist.json()
//         return data
//     }
// )

export const deleteTodo = createAsyncThunk(
    'Todo/deleteInTodoItem',
    async(id) => {
        await fetch(`http://localhost:3100/todos/${id}`, {
            method: 'DELETE',
        })
    }
)

export const createTodo = createAsyncThunk(
    'Todo/createTodo',
    async(todo) => {fetch('http://localhost:3100/todos', {
    method: 'POST',
    body: JSON.stringify({
      title:todo.title,
      body:todo.todos,
      createtime:todo.time
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    }
)

export const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodos:(state, action) =>{
            state.value = action.payload
        }

    },
    extraReducers:{
        [getTodos.pending]: (state) => {
            state.status = 'loading'
        },
        [getTodos.fulfilled]: (state, action) => {
            state.value = action.payload
            state.status = 'response'
        },
        [deleteTodo.pending]: (state) => {
            state.status = 'delete'
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.value = action.payload
            state.status = 'response'
        }
    },
})

export const  {addTodos} = TodoSlice.actions

export const selectTodos = (state) => state.todos.value

export default TodoSlice.reducer