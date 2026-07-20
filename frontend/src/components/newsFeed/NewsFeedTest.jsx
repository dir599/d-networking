import { useEffect, useState } from "react";

const NewsFeedTest = () => {
  const [posts, setPosts] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendURL}/posts`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        console.log(data.data);
        setPosts(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.author.username}</h2>
          <h2>{post.content}</h2>
        </li>
      ))}
    </ul>
  );
};

export default NewsFeedTest;
