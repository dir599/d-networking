import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Stories from "../stories/Stories";

const Home = () => {
  return (
    <div>
      <br />
      <Navbar  />
      {/* <br /> */}
     <div className= "flex"> 
         <Sidebar />
      <Stories />
     </div>
    </div>
  );
};

export default Home;
