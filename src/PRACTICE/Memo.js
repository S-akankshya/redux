import React, { useState,useMemo } from 'react'

function Memo() {
    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    function incrementOne(){
        setCounterOne(counterOne + 1)
    }

    function incrementTwo(){
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        let i = 0
        while(i< 200000000) i++;
        return counterOne % 2 === 0
    },[counterOne])

    // function isEven (){
    //     let i = 0
    //     while(i< 200000000) i++;
    //     return counterOne % 2 === 0
    // }
  return (
    <div>
      <button className='btn btn-primary' onClick={incrementOne}>CounterOne - {counterOne}</button>
      <span>{isEven?"Even":"Odd"}</span> <br/>
      <button className='btn btn-primary' onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
    </div>
  )
}

export default Memo
