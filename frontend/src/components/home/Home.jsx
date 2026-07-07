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
      <div className="flex justify-between mt-10">
        <div className="mt-10"><Sidebar /></div>
        <div>
           <Stories />
           <NewsFeed className="mt-10" />
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
