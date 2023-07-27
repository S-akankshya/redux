import React, { useEffect } from 'react'
import{ useFetch } from "../Context/Fetch"
function Fetch() {
    let {fetchData,sorteedData} = useFetch()
    useEffect(()=>{
        fetchData("https://jsonplaceholder.typicode.com/posts")
    },[])
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center gap-2'>
            {sorteedData.map((data) =>{
                
                return <>
                <div className='col-3'>
                    <div className='card'>
                        <div className='card-header'></div>
                        <div className='card-body'>
                            <p>{}</p>
                            <p>{}</p>
                        </div>
                    </div>
                </div>
                </>
            })}
        </div>
      
    </div>
  )
}

export default Fetch
