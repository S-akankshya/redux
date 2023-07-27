import React, { useEffect, useState } from 'react'
import axios from '../Axios'
// import axios from 'axios'

const API = "https://jsonplaceholder.typicode.com"

function AxiosPractice() {
    const[value,setValue] = useState([])
    const[err,setErr] = useState("")

    //using  promises

    // useEffect(()=>{
    //  axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>{
    //     console.log(response.data)
    //     setValue(response.data)    
    // })
    // .catch((error)=>{
    //    console.log(error)
    //    setErr(error.message)
    // })
    // },[])



    //using Async Await

    async function getAxiosData(){
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setValue(res.data)    
        }
        catch(error){
            setErr(error.message)
        }
            
    };

    useEffect(()=>{
        getAxiosData();
    },[])



    // //using Async Await

    // async function getAxiosData(){
    //     try{
    //         const res = await axios.get("/posts")
    //         setValue(res.data)    
    //     }
    //     catch(error){
    //         setErr(error.message)
    //     }
            
    // };

    // useEffect(()=>{
    //     getAxiosData();
    // },[])

    
  return (
    <>
    {err !== "" && <h2>{err}</h2>}
    <h3>This is Axios Practice</h3>
    <div className='grid'>
      {value.map((data)=>{
        // const{userId,id,title,body} = data;
        return <div className='card'>
            {data.userId}-{data.id}
            <div>
                <h6>{data.title}</h6>
                <p>{data.body}</p>
            </div>
        </div>
      })}
    </div>
    </>
  )
}

export default AxiosPractice
