import React from 'react';
import { useState } from "react";
const Form = ({addTask}) => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      handleSubmit(e)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите текст..."
      />
      <button>Save</button>
    </form>
  )
};

export default Form;