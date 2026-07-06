import React from "react";

const Navbar = () => {
  return (

      <div class="flex justify-around items-center mt-2 bg-white rounded-2xl pt-2">
        <h1>INSTAGRAM</h1>
        <input type="text" class='bg-white rounded-2xl text-xl border-2 border-black ' placeholder="search here" />
        <div class="flex justify-around items-center  gap-1">
          <button>=</button>
          <button>-</button>
        </div>
      </div>

  );
};

export default Navbar;
