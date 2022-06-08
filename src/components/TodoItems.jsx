import React from 'react'
import { useState } from 'react';
import Completed from './Completed';
import Styles from "./todo0.module.css"

function TodoItems({value,keyvalueforitems,deletefromitem,completedValue}) {
  const [isCompleted,setisCompletedchecq] = useState("");
 
  return (
    <div className={Styles.totdoItems}>
        <input style={{zoom:2}} type="checkbox" checked={isCompleted} onChange={(e)=>(
          e.target.checked ? completedValue(value) : undefined,
          setisCompletedchecq(e.target.checked)
        )} />

      <p style={{minWidth:"70%",textAlign:"left",paddingLeft:"10px",margin:"0 auto"}} className={isCompleted ? Styles.isStriked : ""}>{value.value}</p>

      <button key = {keyvalueforitems} onClick={()=> deletefromitem(keyvalueforitems)}>delete</button>

    </div>
  )
}
// try
export default TodoItems
