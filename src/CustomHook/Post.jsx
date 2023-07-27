import React from 'react'
import useFetch from './customHook/UseFetch'

function Post() {
    let obj={
        name:"utsav",
        age:23,
        add:"delhi"
    }
    let url="https://jsonplaceholder.typicode.com/users"
    let optionalPara={
        method:"POST",
        body:JSON.stringify(obj),
        headers:{"Content-type":"application/json"}
    }
        let {datas}= useFetch(url,optionalPara)
        console.log('resoponse in',datas)
  return (
    <div>Post</div>
  )
}

export default Post