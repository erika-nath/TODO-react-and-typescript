import React, { useState,ChangeEvent, FC} from 'react'
import './TodoTask.css';
import { Task } from './Interfaces';

function TodoTask ():JSX.Element {
    const [task,setTask] = useState<string>('')
    const [deadline,setDeadline]=useState<number>(0);
   const [todoList,setTodoList]= useState<Task[]>([])

const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
   if(event.target.name === "task"){
    setTask(event.target.value)
    } else {
        setDeadline(Number(event.target.value))
    }
};

const addTask = (): void => {
        const newTask = {taskName:task, deadline:deadline}
        setTodoList([...todoList, newTask])
        setTask("");
        setDeadline(0);
        
}


    return(
        <div className='todoTask'>
        <div className='inputContainer'>
    <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
    <input type="number" placeholder="Deadline (in Days)..." name="deadline" value={deadline} onChange={handleChange}/>
    </div>
    <button onClick={addTask}>Add task</button> 
    </div>
    )

}


export {TodoTask}