import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

//now the username will decide okay im not in the homepage its profilepage,so now we cam write condition in useEffect
function Feed({ username }) {
const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    const res = username 
      ? await axios.get("/posts/profile/" + username) 
      : await axios.get("posts/timeline/64144d41f14a76e6d18f7431");
    setPosts(res.data);
  };
  fetchPosts();
}, [username]);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p._id} post={p} /> //and for each post im going to retuen something, what is that? just a post.and inside this post we will send this single post. we should indicate key because we are appling map. bacuse all the data has id.
        ))}        
      </div>
    </div>
  )
}

export default Feed
