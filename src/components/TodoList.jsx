import React from 'react'

function TodoList({children}) {
  return (
    <div>
     <h3 > {children}</h3>
      {/* <button key={keyvalueforitems} onClick={(el)=>{ 
      }}>delete</button> */}
    </div>
  )
}

export default TodoList
