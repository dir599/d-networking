import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Stories from "./components/stories/Stories";
import NewsFeedTest from "./components/newsFeed/NewsFeedTest";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import NewNewsfeed from "./components/newsFeed/newNews";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<NewNewsfeed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
