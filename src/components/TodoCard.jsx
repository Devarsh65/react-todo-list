import React from 'react'

export const TodoCard = (props) => {
  const {children} = props;

  const {handleDeleteTodo, handleEditTodo} = props;

  const {index} = props;
  return (
    <li className="todoItem" >
      {children}
      <div className='actionsContainer'>
        <button><i class="fa-solid fa-pen-to-square" onClick={() => {
          handleEditTodo(index);
        }}></i></button>
        <button><i class="fa-solid fa-trash" onClick={() => {
          handleDeleteTodo(index);
        }}></i></button>
      </div>
    </li>
  )
}
