import React, { useState } from 'react'

const ArrayStorage = () => {

  const [addNumber, setAddNumber] = useState('')
  const [removeNumber, setRemoveNum] = useState('')
  
  const clickToAdd = ()=>{
    var numbers = JSON.parse(localStorage.getItem('number')) || []
    var number = {
      Added: addNumber,
    }
    numbers.push(number)
    localStorage.setItem('number', JSON.stringify(numbers))
    console.log(numbers)
  }
 
  const clickToRemove = () =>{
    let arrayItems = JSON.parse(localStorage.getItem ('number') || [])
    arrayItems.splice(removeNumber, 1)
    localStorage.setItem('number', JSON.stringify(arrayItems))
  }
 
  const getStoredArray = localStorage.getItem('number')
  return (
    <div>
      <h1>Store Array at Local Storage</h1>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div>
        <input type="text" placeholder='Enter Number' value={addNumber} onChange={(e) => setAddNumber(e.target.value)} /> <br />
        <button type='submit' onClick={clickToAdd}>Click To Add</button>
      </div>
      <div>
        <input type="text" placeholder='Enter Number' value={removeNumber} onChange={(e) => setRemoveNum(e.target.value)} /> <br />
        <button type='submit' onClick={clickToRemove}>Click To Remove</button>
      </div>
      </div>
      <p>{getStoredArray}</p>
    </div>
  )
}

export default ArrayStorage