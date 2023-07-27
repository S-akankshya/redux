import React, { useState } from 'react'

function Todo(){
    const[value,setValue] = useState('');
    const[todo,setTodo] = useState([]);

    function changeHandler(e){
        setValue(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        if(value.trim() !== ''){
            setTodo([...todo,value]);
            setValue('');
        }
    }
    function handleEdit(index){
        setValue(todo[index]);
        setTodo(todo.filter((e,i)=> i !== index))
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter Your Data' onChange={changeHandler} value={value} />
                <button className='btn btn-primary'>Submit</button>
            </form>
            <>
            {todo.map((data,index)=>{
                return <div key={index}>{data}
                <button className='btn btn-info' onClick={()=>handleEdit(index)}>Edit</button></div>
            })}
            </>
        </div>
    )
}
export default Todo 




// import React, { useState } from 'react';

// const TodoList = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a task"
//         />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;