import React from 'react';

import AddTodoForm from './Components/AddTodoForm';
import TodoItemsList from './Components/TodoItemsList';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Typography variant="h2" gutterBottom align='center'>Todo app</Typography>
      <AddTodoForm/>
      <TodoItemsList/>
    </div>
  );
}

export default App;
