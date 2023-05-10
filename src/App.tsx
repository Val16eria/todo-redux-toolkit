import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TodoList } from './features/todo/view';
import { Card } from './features/todo/card';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />}>
        <Route path='/:filter' element={<TodoList />} />
      </Route>
      <Route path='/card/:id' element={<Card />} />
    </Routes>
  );
}

export default App;
