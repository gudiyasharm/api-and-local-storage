import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ApiCalling.css';


const ApiCalling = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => {
                console.log('Getting data from server...:', response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <h1>Display Users Data</h1>
            <div className='table'>
               
                    <table>
                        <tr>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                         {
                        data ?.map(data => 
                        <tr>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.completed ? 'True' : 'False' }</td>
                        </tr>)}
                    </table>
            </div>
        </div>
    )
}

export default ApiCalling;

