import React, { useState } from 'react'

// import useBindedAction from 'src/utils/hooks'

import Todo from './Todo'

const TodoContainer = () => {
  const [value, setValue] = useState('')

  return (
    <Todo
      handleSubmit=""
      value={value}
      onInputChange={event => setValue(event.target.value)}
    />
  )
}

export default TodoContainer
