import { useEffect, useState } from "react";

const NewsFeedTest = () => {
  const [posts, setPosts] = useState([]);
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${backendPort}/posts`, {
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
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.image}</h2>
      ))}
    </div>
  );
};

export default NewsFeedTest;
