import { memo } from "react"
import React from 'react'

function Child() {
    console.log("Child Component")
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default memo (Child)
