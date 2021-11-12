import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './home.css';

const Home = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    },[])

    function handleClick(id, name) {
       props.setID(id)
       props.setName(name)
    }

    return (
        <div className='Home'>
            <h2 className='homeTitle'>Contributors</h2>
            <table className="table table-striped homeTable">
                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{user.username}</th>
                            <td>{user.name}</td>
                            <td>{user.company.name}</td>
                            <td>
                                <Link to='/posts'>
                                    <button onClick={() => handleClick(user.id, user.name)}>
                                        See Posts
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 

export default Home