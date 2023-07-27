import axios from 'axios'
import React, { useState } from 'react'

function AxiosPUT() {
    const data = {fname:" ", lname: " "}
    const[inputData,setInputData] = useState(data)

    function handleData(e){
        setInputData({...inputData,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
        console.log(inputData)
    }

    function handleUpdate(e){
        console.log(inputData)
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
        .then((response)=>{
            console.log(response)
        })
    }
      return (
    <>
      <form>
        <label>First Name</label>
        <input type="text" name='fname' value={inputData.fname} onChange={handleData}/><br />
        <label>Last Name</label>
        <input type="text" name='lname' value={inputData.lname} onChange={handleData}/><br />
        <button onSubmit={handleSubmit} className='btn btn-primary'>Submit</button>
        <button onClick={handleUpdate}>Update</button>
      </form>
    </>
  )
}

export default AxiosPUT
