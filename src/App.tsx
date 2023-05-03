import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TodoList } from './features/todo/view';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />}>
        <Route path='/:filter' element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
