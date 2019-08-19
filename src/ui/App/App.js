import React from 'react'
import Button from 'ui/shared/Button'

const App =   props => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        marginTop: '30vh',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <p
        style={{
          fontSize: 40
        }}>
        {props.counter}
      </p>
      <Button
        className="button buttonRed button_red"
        onClick={props.setCounter}>
        Increment
      </Button>
    </div>
  )
}

export default App
