import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css";
export default function AddForm () {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const submitHandler =(evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));// action triggered
        setTask("");
    };

    return (
        <div className= "add-form">
            <div className="form-container">
          <form onSubmit={submitHandler}>
          <input type= "text" 
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Add Task"
          />
          <button disabled={!task}>Add Task</button>
          </form>
        </div>
    </div>
 );
}