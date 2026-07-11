import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Stories from "./components/stories/Stories";
import NewsFeedTest from "./components/newsFeed/NewsFeedTest";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<NewsFeedTest />} />
      </Routes>
    </div>
  );
};

export default App;
