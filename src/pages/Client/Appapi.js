import axios from "axios";
import React from "react";

const baseURL = "http://localhost:64443/api/GetCommon";
export default function Appapi() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.post(`${baseURL}`).then((response) => {
        setPost(response.CommonResp);
      });
    }, []);
  
    function updatePost() {
      axios
        .put(`${baseURL}`, {
          title: "Hello World!",
          body: "This is an updated post."
        })
        .then((response) => {
          setPost(response.CommonResp);
        });
    }
  
    if (!post) return "No post!"
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={updatePost}>Update Post</button>
      </div>
    );
  }