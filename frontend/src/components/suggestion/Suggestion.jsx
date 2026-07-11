// import React from "react";
// import story from "../../assets/stories/stories.png";
// import story2 from "../../assets/stories/story2.jpeg";
// import story3 from "../../assets/stories/story3.jpeg";
// import story4 from "../../assets/stories/story4.jpeg";
// import story5 from "../../assets/stories/story5.png";

// const Suggestions = () => {
//   return (
//     <div className="bg-white flex  flex-col gap-10 w-60 text-center ">
//       <h1>Suggestion For You</h1>
//       <div className="flex items-center gap-1">
//         <img
//           src={story}
//           alt="photo"
//           className="h-12 w-12 ring-2 ring-blue-600 rounded-full object-cover"
//         />
//         <div>
//           <h4>Hello</h4>
//           <span className="text-semi-bold text-[11px] text-slate-600 dark:text-slate-400">
//             this is story
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1">
//         <img
//           src={story5}
//           alt="photo"
//           className="h-12 w-12 object-cover rounded-full"
//         />
//         <div>
//           <h4>Hello</h4>
//           <span className="text-[11px] text-slate-600 dark:text-slate-400">
//             this is photo2
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1">
//         <img
//           src={story2}
//           alt="photo"
//           className="h-12 w-12 object-cover rounded-full"
//         />
//         <div>
//           <h4>Hello</h4>
//           <span className="text-[11px] text-slate-600 dark:text-slate-400">
//             this is photo3
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1">
//         <img
//           src={story3}
//           alt="photo"
//           className="h-12 w-12 object-cover rounded-full"
//         />
//         <div>
//           <h4>Hello</h4>
//           <span className="text-[11px] text-slate-600 dark:text-slate-400">
//             this is photo4
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1">
//         <img
//           src={story4}
//           alt="photo"
//           className="h-12 w-12 object-cover rounded-full"
//         />
//         <div>
//           <h4>Hello</h4>
//           <span className="text-[11px] text-slate-600 dark:text-slate-400">
//             this is photo5
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Suggestions;

import React from "react";
import zoro from "../../assets/stories/zoro.jpeg";
import vivi from "../../assets/stories/vivi.jpeg";
import nami from "../../assets/stories/nami.jpeg";
import robin from "../../assets/stories/robin.jpeg";
import ace from "../../assets/stories/ace.webp";
import luffy from "../../assets/stories/luffy.jpg";

const Suggestions = () => {
  const suggestionsData = [
    { 
      id: 1, 
      img: luffy, 
      title: "Luffy", 
      desc: "I am pirate 🤴", 
      active: true },
    {
      id: 2,
      img: ace,
      title: "Ace",
      desc: "Igniting the seas, protecting my nakama.",
    },
    {
      id: 3,
      img: robin,
      title: "Robin",
      desc: "Uncovering the past, protecting the future.",
    },
    {
      id: 4,
      img: nami,
      title: "Nami",
      desc: "Mastering the Seas, Claiming the Treasure!",
    },
    {
      id: 5,
      img: vivi,
      title: "Vivi",
      desc: "Courage born of compassion; a kingdom's true shield.",
    },
    {
      id: 5,
      img: zoro,
      title: "Zoro",
      desc: "When I decided to follow my dream, I had already discarded my life.",
    },
  ];

  return (
    <div className="bg-white flex flex-col gap-8 w-64 p-4 rounded-2xl shadow-sm text-center mt-4">
      <h1 className="font-semibold text-slate-800 text-sm">
        Suggestions For You
      </h1>

      <div className="flex flex-col gap-5">
        {suggestionsData.map((item) => (
          //   /* 1. Added justify-center to push the image and text block into the middle */
          <div
            key={item.id}
            className="flex items-center px-2 gap-3 w-full text-left"
          >
            <img
              src={item.img}
              alt={item.desc}
              className={`h-12 w-12 object-cover rounded-full  ${
                item.active ? "ring-2 ring-pink-600 ring-offset-2" : "ring-2 ring-blue-600"
              }`}
            />
            {/* 2. Added items-center & text-center to stack and center the headings  */}
            <div className="flex flex-col items-center text-justify">
              <h4 className="text-sm font-semibold text-slate-800 leading-tight w-full">
                {item.title}
              </h4>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
