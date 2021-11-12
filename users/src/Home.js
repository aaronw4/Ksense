import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Home = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    },[])

    function handleClick(id) {
       props.setID(id)
    }

    return (
        <div className="App">
            <table className="table table-striped">
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
                                <button onClick={() => handleClick(user.id)}>
                                    See Posts
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 

export default Home