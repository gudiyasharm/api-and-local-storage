import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomPost = () => {
    const [dataLength, setDataLength] = useState()
    const [data, setData] = useState({})
    // const [enterid, setEnterId] = useState(1)
    const [clickButton, setclickButton] = useState()

    // const handleChange = (e) =>{
    //     e.preventDefault();
    //     setEnterId(e.target.value)
    // }

    const handleClick = (e) =>{
       // e.preventDefault();
        let random = Math.floor(Math.random() * dataLength) + 1
        console.log('Random Number ',random)
        setclickButton(random)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(response =>{
            console.log('API Response Data ',response.data)
            return response.data
        })
        .then(res => {
           
            console.log('Response Length ',res.length)
            setDataLength(res.length)

        })
        .catch(error =>{
            console.log(error)
        })

    }, [])

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${clickButton}`)
        .then(response =>{
            console.log('API Response Data ',response.data)
            setData(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [clickButton])
  return (
    <div>
            <h1>Get Random Data</h1>
            {/* <div><input type="text" value={enterid} onChange={handleChange} /></div> */}
            <div><button type='button' onClick={handleClick}>Click Here</button></div>
            <div>
                <p>Title is: {data?.title}</p>
                <p>Userid is: {data?.userId}</p>
                <p>Status: {data?.completed ? 'True' : 'False' }</p>
            </div>
        </div>
  )
}

export default RandomPost;