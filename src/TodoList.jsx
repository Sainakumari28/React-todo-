import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
      setTodos((prevTodos) => {
        return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
      setNewTodo("");
    });
    setNewTodo("");
  }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
       setTodos((prevTodos) => todos.filter((todo) => todo.id != id)); 
    };

    let markAsDoneAll = () => {
       setTodos ( (todos) => (
         todos.map((todo) => {
         return {
            ...todo,
            isDone: true,
         };
       })
     ));
    };

    let markAsDone = (id) => {
        setTodos ( (todos) => 
         todos.map((todo) => {
            if(todo.id == id) {
              return {
            ...todo,
              isDone: true,
         };
       } else{
        return todo;
        }
       })
     );
    }
    return (
        <div>
            <input placeholder="add your task" 
            value={newTodo}
            onChange={updateTodoValue}
            ></input>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <br /> <br />

            <hr />
            <h2>Task of Todo List</h2>
            <ul>
                {todos.map((todo) => (
                  <li key={todo.id}>
                  <span style={todo.isDone ? {textDecoration: "Line-through"} : {}}> {todo.task}</span>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                   &nbsp;&nbsp;&nbsp;
                  <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                  </li>
               ))}
            </ul>
            <button onClick={markAsDoneAll}>Mark All Done</button>
        </div>
    );
}