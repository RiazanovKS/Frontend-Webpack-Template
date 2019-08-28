import React from 'react'
import Input from 'src/ui/shared/Input'
import Button from 'src/ui/shared/Button'

const Todo = props => {
  return (
    <>
      <Input onChange={props.onInputChange} />
      <Button type="submit" />
    </>
  )
}

export default Todo
