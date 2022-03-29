import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ApiCalling.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                console.log( response)
                setUsers(response.data)
                
            })
            .catch(error => {
                console.log('Error ', error)
            })
    }, [])

    return (
        <div>
            <h1>Users Data</h1>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                    {
                        users?.map(user =>
                            <tr >
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.geo.lat}</td>
                            <td>{user.address.geo.lng}</td>
                            
                        </tr>
                            )
                    }
                </table>
            </div>
            
        </div>
    )
}

export default Users