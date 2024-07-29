import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './Post.jsx'
import Put from './Put.jsx'
import Delete from './Delete.jsx'
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Post />
      <Put />
      <Delete />
    </>
  )
}

export default App
