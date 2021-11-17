import React, { useState } from 'react';

const TestTodo = () => {
  const [value, setValue] = useState('')
  const [arr, setArr] = useState([])
  
  const click = () => {
    setArr([...arr, {
      id: Date.now(),
      name: value
    }])
  }

  const handleDelete = (li) => {
    setArr(arr.filter(item => item.id !== li.id))
  }

  return (
    <div style={{marginTop: '50px'}}>
      <input 
        type="text" 
        placeholder="New tasks..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span onClick={click}>Добавить</span>
      <ul>
        {arr.map(el => {
          return (
            <li onClick={() => handleDelete(el)}>{el.name}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default TestTodo;