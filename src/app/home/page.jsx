'use client'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/posts/get-all-posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      })
  }, [])

  return (
    <div className=''>
      {posts?.map((post) => (
        <div key={post.id}>
          {post.desc}
        </div>
      ))}
    </div>
  )
}

export default Home