import React from "react";
import hero from "../../assets/hero.png";
// import story from "../../assets/stories/stories.png";
// import story2 from "../../assets/stories/story2.jpeg";
// import story3 from "../../assets/stories/story3.jpeg";
// import story4 from "../../assets/stories/story4.jpeg";
// import story5 from "../../assets/stories/story5.png";

const Stories = () => {
  return (
    <div className="h-30 max-w-xl bg-blue-50 mb-3 rounded-2xl ">
      <h1 className="p-2">Stories</h1>
      <div class="flex justify-evenly items-center bg-blue-50 rounded-2xl h-25 ">
        <div className="flex flex-col items-center gap-1.5 shrink-0 p-2">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-pink-500 ring-offset-4 ring-offset-white hover:scale-105 transition-transform duration-200 focus:outline-none">
            <img
              src={hero}
              alt="my-story"
              className="w-full h-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold max-w-64px truncate">
            Your story
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-blue-500 ring-offset-2 ring-offset-white hover:scale-105 transition-transform duration-200 focus:outline-none">
            <img
              src={hero}
              alt="story"
              className="w-full h-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold max-w-64 truncate">
            Roman
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-blue-600 ring-offset-2 ring-offset-white hover:scale-105 transition-transform duration-200 focus-outline-none">
            <img
              src={hero}
              alt="story"
              className="w-full h-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold max-w-64 truncate">
            UnderTaker
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-blue-600 ring-offset-2 ring-offset-white hover:scale-105 transition-transform duration-200 focus-outline-none">
            <img
              src={hero}
              alt="story"
              className="h-full w-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold max-w-64 truncate">
            LactoMan
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-blue-600 ring-offset-2 ring-offset-white hover:scale-105 transition-transform duration-200 focus-outline-none">
            <img
              src={hero}
              alt="story"
              className="h-full w-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold w-max-64 truncate">
            Anmol kc
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <button className="rounded-full h-14 w-14 bg-amber-50 overflow-hidden ring-2 ring-blue-600 ring-offset-4 ring-offset-white hover:scale-105 transition-transform focus-outline-none">
            <img
              src={hero}
              alt="story"
              className="h-full w-full object-cover"
            />
          </button>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold truncate">
            John Cena
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
