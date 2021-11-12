import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts?userId=' + props.id)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[props.id])

    return (
        <div>
            {console.log(posts)}
            {posts.map(post => (    
                <div key={posts.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts