import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todos, handleDeleteTodo, handleEditTodo}) {

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
      return (
        <TodoCard handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todo={todo} index={todoIndex} key={todoIndex}>
        </TodoCard>
      )
    })}
    </ul>
  )
}
