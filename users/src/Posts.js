import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import './post.css';

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts?userId=' + props.id)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[props.id])

    return (
        <div className='post'>
            <h2 className='postTitle'>Posts by {props.name}</h2>
            <Link to='/'>
                <button type="button" class="btn btn-secondary btn-lg backButton">Back</button>
            </Link>
            {posts.map(post => (    
                <div key={posts.id} className="card postCard">
                    <div className="card-body">
                        <h5 className="card-title" id="articleTitle">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts