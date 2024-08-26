import React from 'react'

export default function TodoCard({todo, handleDeleteTodo, index, handleEditTodo}) {
  return (
    <li className='todoItem'>
      <p>{todo}</p>
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
