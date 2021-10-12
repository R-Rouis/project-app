import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';
import Post from "../post/Post";


export const MyPosts = () => {
    const { user } = useContext(Context);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/api/posts");
          setPosts(res.data);
          console.log(posts)
        };
        fetchPosts();

      }, [posts]);

    const myposts = posts.filter(el => el.username === user.username)
    console.log(myposts)
    
    return (
        <div className="cont">
            <h1>My Posts</h1> 
            {myposts.map((p)  => (
        <div className="display"><Post post={p} /></div>
      ))}
        </div>
    )
}
