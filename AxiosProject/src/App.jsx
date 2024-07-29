import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './Post.jsx'
import Put from './Put.jsx'
import Delete from './Delete.jsx'
import Create from "./Create.jsx";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
function App() {
  return (
    <>
      <div>
        <Create />
        <Post />
        <Put />
        <Delete />
      </div>
    </>
  )
}

export default App
