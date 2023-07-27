import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosGET(){
    const[value,setValue] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response)
            setValue(response.data)
        })
    },[])
    return(
        <div>
            <h6>This is axios Data</h6>
            {value.map((data)=>{
                return(
                    <div>{data.name}</div>
                )
            })}
        </div>
    )
}
export default AxiosGET