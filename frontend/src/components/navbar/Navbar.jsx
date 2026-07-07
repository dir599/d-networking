import React from "react";
import {Send, Bell, Plus} from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-around items-center mt-2 bg-white rounded-2xl h-20">
      <h1>INSTAGRAM</h1>
      <input
        type="text"
        className="bg-white rounded-2xl text-xl border-2 border-black  text-center"
        placeholder="Search Here"
      />
      <div class="flex justify-around items-center  gap-1">
        <div className="flex gap-4">
          <button className=""><Plus /></button>
          <button className=""><Send /></button>
          <button><Bell /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
