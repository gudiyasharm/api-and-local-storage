import React, { useEffect, useState } from "react";
import data from "./data";
import axios from "axios";

const StudentsData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {
            console.log('Response ',response)
           return response.data
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log('Error ',error)
        })
    })

    return (
        <div>
            {
                data.map((students)=>(
                    <ul>
                        <li>My Name is {students.name}. I am {students.age} years old, and I'm from {students.city}</li>
                        </ul>
                ))
            }
        </div>    
    )
}

export default StudentsData;