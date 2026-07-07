import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Stories from "../stories/Stories";
import Suggestions from "../suggestion/Suggestion";
import NewsFeed from "../newsFeed/NewsFeed";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <div className="p-4">
          <Sidebar />
        </div>
        <div>
          <Stories />
          <NewsFeed />
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
