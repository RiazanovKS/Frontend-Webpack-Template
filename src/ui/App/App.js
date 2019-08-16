import React, { useState, useEffect } from 'react'
import Button from 'ui/shared/Button'

const App = props => {
  return (
    <>
      <p>{props.counter}</p>
      <Button onClick={props.setCounter}>Click me</Button>
    </>
  )
}

export default App
