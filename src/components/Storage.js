import React, { useEffect, useState } from 'react';
import GetStoredData from './GetStoredData'


const Storage = () => {

    const [showData, setShowData] = useState(false);

    const [name, setName] = useState(() => {
        // getting stored value
        const savedData = localStorage.getItem('name');
        const initialValue = (savedData);
        return initialValue;
      });

    useEffect(() =>{
        localStorage.setItem('name', name);
    }, [name])

    const handleChange = (e) =>{
        e.preventDefault();
        setName(e.target.value)
    }

    const submitForm = () =>{
      setShowData(true)
    }

  return (
    <div>
      {showData === false ? 
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Enter Name' value={name} onChange={handleChange} /> <br />
            <input type="submit" value="Submit"></input>
        </form> : 
        <GetStoredData />}
    </div>
  )
}

export default Storage