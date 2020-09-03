import React from 'react';

import AddTodoForm from './Components/AddTodoForm';
import TodoItemsList from './Components/TodoItemsList';

function App() {
  return (
    <div className="App">
      <AddTodoForm/>
      <TodoItemsList/>
    </div>
  );
}

export default App;
