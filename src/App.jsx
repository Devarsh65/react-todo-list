import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  

  const [todos, settodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }


  function handleAddTodos(newtodo) {
    const newtodoList = [...todos, newtodo]
    settodos(newtodoList);
    persistData(newtodoList)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }
    let localtodos = localStorage.getItem('todos')
    if(!localtodos) {
      return
    }
    localtodos= JSON.parse(localtodos).todos
    settodos(localtodos)
  },[])

  function handleDeleteTodo(index) {
    const newtodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    settodos(newtodoList)
    persistData(newtodoList)
  }

  function handleEditTodo(index) {
    const valuetobeedited = todos[index]
    setTodoValue(valuetobeedited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
      <TodoList todos={todos} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo} />
    </>
  )
}

export default App
