import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Todo from './components/Todo/Todo';
import CreateTodo from './components/CreateTodo/CreateTodo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='/TodoCard/:id' element={<Todo/>}/>
        <Route path='/createTodo' element={<CreateTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
