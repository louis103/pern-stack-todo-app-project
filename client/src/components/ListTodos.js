/* eslint-disable no-unused-vars */
import React, {Fragment,useState,useEffect} from 'react';
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    //delete func
    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/delete/todos/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);     
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
            
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
    <Fragment>
    <div className="container mt-5">
    <table className="table text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
      {todos.map(todo => (
          <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td><button type="button" className="btn btn-danger"
              onClick={() =>{deleteTodo(todo.todo_id)}}>Delete</button></td>
          </tr>
      ))}
    </tbody>
  </table>
            
 </div>
 </Fragment>
        
    )
}

export default ListTodos
