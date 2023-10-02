
import React, { useEffect, useState } from 'react'
import axios from "axios";

function DataFromDjango() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        
        axios.get('http://localhost:8000/wel/')
        .then(res => {

            if (res.data!== posts) {
                setPosts(res.data)
                 console.log(posts)}
          
        })
        .catch(err => {console.log(err)})
    }, [posts])


  return (
     <div>
     <div>
            {posts.map(post => (
                <div key={post.name}>
                    <h2>{post.name}</h2>
                    <p>{post.detail}</p>
                </div>
            ))}
        </div>
</div>
  )
}

export default DataFromDjango