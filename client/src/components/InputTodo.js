/* eslint-disable no-unused-vars */
import React, {Fragment, useRef, useState, useEffect,useContext} from 'react';

function InputTodo() {

    const [description, setDescription] = useState("");

    //onsubmit form
    const onSubmitForm = async (e)=>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern TodoList App</h1>
            <h5 className="text-center mt-3">Made with postgres,express js,react js,node js</h5>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
             <input type="text" className="form-control" value={description}
             onChange={e => setDescription(e.target.value)}/>
             <button className="btn btn-success">Add</button>   
            </form>
        </Fragment>
    )
}

export default InputTodo
