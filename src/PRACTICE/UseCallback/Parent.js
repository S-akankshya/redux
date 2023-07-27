import React, { useState }from 'react'
import Child from './Child'

function Parent() {
    const[counterOne,setCounterOne] = useState(0)

    function incrementOne(){
        setCounterOne(counterOne + 1)
    }
  return (
    <div>
        <Child/>
      <button className='btn btn-primary' onClick={incrementOne}>CounterOne - {counterOne}</button>
    </div>
  )
}

export default Parent
