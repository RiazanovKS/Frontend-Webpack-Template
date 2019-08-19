import React, { useState, useEffect } from 'react'
import Button from 'ui/shared/Button'

const App = props => {
  return (
    <>
      <p>{props.counter}</p>
      <Button
        className="button buttonRed buttonMargin"
        onClick={props.setCounter}>
        Increment
      </Button>
    </>
  )
}

export default App
