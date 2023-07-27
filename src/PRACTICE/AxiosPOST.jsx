import axios from 'axios'
import React, { useState } from 'react'

function AxiosPOST(){
    const data = {fname:"", lname: ""}
    const[inputData,setInputData] = useState(data)

    function changeHandler(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        // setInputData(...inputData,e.target.value)
    }

    function handleSubmit(e){
        console.log(inputData)
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    function handleUpdate(e){
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    function handleDelete(e){
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }
    return(
        <div>
             <form>
                <label>First Name</label>
                <input type="text" name='fname' 
                value={inputData.fname} onChange={changeHandler}/><br />
                <label>Last Name</label>
                <input type="text" name='lname'
                 value={inputData.lname} onChange={changeHandler}/><br/>

                 <button className='btn btn-primary' onClick={handleSubmit}>Submit</button><br />
                 <button className='btn btn-warning' onClick={handleUpdate}>Update</button><br />
                 <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}
export default AxiosPOST