import React from 'react'

const GetStoredData = () => {
    const getLocalStoredData = localStorage.getItem('name')
  return (
    <div><h1>Get Stored Data</h1>
        <h3>{getLocalStoredData}</h3>
    </div>
  )
}

export default GetStoredData