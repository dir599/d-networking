import { useEffect, useState } from "react";
import AddComment from "./comment/AddComment";
import Header from "./header/Header";
import PostContent from "./postContent/PostContent";
import ActionButtons from "./actionButtons/ActionButtons";
import LikedBy from "./likeSummary/LikedBy";
import Caption from "./caption/Caption";
import TimeStamp from "./timeStamp/TimeStamp";

const NewNewsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
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
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <div className="max-w-xl h-screen bg-white border border-slate-100 rounded-3xl p-4 shadow-sm flex flex-col gap-4">
              {/* Header: User Info */}
              <Header
                profileImage={`${backendURL}${post.author.profileImage}`}
                username={post.author.username}
                bio={post.author.bio}
              />
              {/* Main Post Image */}
              <PostContent postImage={post.image} />
              {/* Action Buttons Row */}
              <ActionButtons
                likeCount={post._count.postLikes}
                commentCount={post._count.comments}
              />
              {/* Likes Summary & Caption */}
              <div className="flex flex-col gap-1.5 px-1">
                {/* Liked By Section */}
                <LikedBy />
                {/* Post Caption */}
                <Caption
                  username={post.author.username}
                  content={post.content}
                />
                {/* Timestamp */}
                <TimeStamp createdAt={post.createdAt} />
              </div>
              {/* Add Comment Section */}
              <AddComment
                profileImage={`${backendURL}${post.author.profileImage}`}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NewNewsfeed;
