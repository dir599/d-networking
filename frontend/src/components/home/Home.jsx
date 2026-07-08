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
        <div className="pt-4 gap-4">
          <div className="mb-9"><Stories /></div>
          <NewsFeed/>
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
