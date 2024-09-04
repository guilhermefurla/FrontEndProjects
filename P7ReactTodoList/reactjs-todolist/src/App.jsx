import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


export default function App() {
  // Main todo list
  const [todos, setTodos] = useState([])
  
  // Used on TodoInput to get a new Todo and pass it to the handleAddTodos funciton
  const [todoValue, setTodoValue] = useState('')

  // Sets the todoList on storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  // Adds new todos
  function handleAddTodos(newTodo){
    persistData([...todos, newTodo])
    setTodos([...todos, newTodo])
  }

  // Deletes todos by comparing the index
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  // Edits todos
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // Gets the todo list from storage if there is any
  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}


