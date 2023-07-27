import React, { useEffect } from 'react'
import useFetch from './customHook/UseFetch'

function Fetch() {
    let url="https://jsonplaceholder.typicode.com/users"
     
    let datas = useFetch(url)
    console.log(datas)
     
  return (
    <div>Fetch</div>
  )
}

export default Fetch








//custom hoook for http

// import { useCallback, useEffect, useState } from "react";
 
// const useFetch = (url,optionalPara)=>
// {
    
//     let[datas,setData]=useState(null)
//     let print=  ()=>
//     {
        
//         fetch(url,{
//             method:optionalPara?optionalPara.method:"GET",
//             body:optionalPara?optionalPara.body:null,
//             headers:optionalPara?optionalPara.headers:{}

//         }).then((res)=>{
//             return res.json()
//         }).then((item)=>{
//             console.log(item)
//              setData(item)
//         })
//     } 
//      useEffect(()=>{
//         print()
          
//      },[])
   
//     return {datas};
 
// }
// export default useFetch;