import React from 'react'
import { useState } from 'react'
import Input from './Input'
import TodoItems from './TodoItems';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import styles from "./todo0.module.css"
import Completed from './Completed';

function Todo() {
    const [todo,setTodo] = useState([]);

    const [isCompletedValue,setIsCompletedValue]=useState([]);
   
    const [showValue, setShowvalue] = useState(false);

    const setTodoinApp = (el)=>{
      setTodo([...todo,{value:el,id:uuidv4()}]);
    }

  const delete0 = (el)=>{
   setTodo(todo.filter((e)=>e.id!==el));
   setIsCompletedValue(isCompletedValue.map((val)=>val.id!==el));
  }

  const completedValue= (compValue)=>{
    setIsCompletedValue([...isCompletedValue,compValue]);
    
    setTodo(todo.filter((e)=>e.id!==compValue.id));
  }
  
  const HandleShowCompleted = ()=>{
    setShowvalue(!showValue);
  }
 
  return (
    <div className={styles.body}>
      <div className={styles.todoapp}><h1>TODO APP</h1></div>
      <Input setTodo={setTodoinApp}/>

      <TodoList>
        {todo.map((el)=>(
           <TodoItems key={el.id} value = {el} keyvalueforitems = {el.id}
           deletefromitem = {delete0} completedValue={completedValue} />
        ))}
      </TodoList>

      <h3 onClick={HandleShowCompleted}>Show Completed todos</h3>
      <Completed>
      {showValue ? isCompletedValue.map((el)=>(
        <p className={styles.totdoItems} key={el.id}>{el.value}</p>
      )) : ""}
      </Completed>
    </div>
  )
}

export default Todo
