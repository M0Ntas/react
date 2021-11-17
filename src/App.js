import { useState } from 'react'
import Form from './components/Form'
import ToDo from "./components/ToDo";
import TestTodo from "./components/TestTodo";

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false
      }
      console.log('====>newItem<====', newItem)
      setTodos([...todos, newItem])
    }
  }

  const delTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }


  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <Form addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            delTask={delTask}
            toggleTask={handleToggle}
          />
        )
      })}

    </div>
  );
}

export default App;
