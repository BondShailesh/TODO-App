import React from 'react'
import { useState } from 'react'
import styles from "./todo0.module.css"
function Input(props) {
    const [inp, setInp] = useState("")
   
  return (
    <div>
      <input className={styles.inp} type="text" onChange={(el)=>setInp(el.target.value)} />
     
     <button className={styles.btn} onClick={()=>{
       props.setTodo(inp);
     }}>+</button>
    </div>
  )
}

export default Input
