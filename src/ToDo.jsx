import React,{useState} from 'react';

const ToDo = () =>{
    const[todos,setTodos]=useState([]);
    const[newtodo,setNewTodo]=useState("");

    const handleAddTodo = () =>{
        if(newtodo.trim()!==""){
            setTodos([...todos,{text:newtodo.trim(),checked:false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) =>{
        const newtodo =[...todos];
        newtodo.splice(index,1);
        setTodos(newtodo);
    };

    const handleToggleTodo = (index) =>{
        const newtodo=[...todos];
        newtodo[index].checked=!newtodo[index].checked
        setTodos(newtodo)
    };


return(
    <>
        <h1>To Do List</h1>
        <input type="text" value={newtodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo,index)=> (
                <li key={index} style={{display:"flex"}}>
                <div style={{display:'flex', alignItems:"center"}}>
                <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}/>
                    <span style={{marginRight:"10px",textDecoration:todo.checked ? "line-through":"none"}}>{todo.text}</span>
                    <button style={{marginTop:"5px",marginBottom:"5px"}}
                     onClick={()=> handleDeleteTodo(index)}>Delete</button>
                
                </div>
                </li>
                   
            ))}
        </ul>

    </>
);
}
export default ToDo