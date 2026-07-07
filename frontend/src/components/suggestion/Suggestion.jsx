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
import story from "../../assets/stories/stories.png";
import story2 from "../../assets/stories/story2.jpeg";
import story3 from "../../assets/stories/story3.jpeg";
import story4 from "../../assets/stories/story4.jpeg";
import story5 from "../../assets/stories/story5.png";

const Suggestions = () => {
  const suggestionsData = [
    { id: 1, img: story, title: "Hello", desc: "this is photo", active: true },
    { id: 2, img: story5, title: "Hello", desc: "this is photo2" },
    { id: 3, img: story2, title: "Hello", desc: "this is photo3" },
    { id: 4, img: story3, title: "Hello", desc: "this is photo4" },
    { id: 5, img: story4, title: "Hello", desc: "this is photo5" },
  ];

  return (
    <div className="bg-white flex flex-col gap-8 w-64 p-4 rounded-2xl shadow-sm text-center">
      <h1 className="font-semibold text-slate-800 text-sm">
        Suggestions For You
      </h1>

      <div className="flex flex-col gap-5">
        {suggestionsData.map((item) => (
        //   /* 1. Added justify-center to push the image and text block into the middle */
          <div key={item.id} className="flex items-center justify-center gap-3 w-full">
            <img
              src={item.img}
              alt={item.desc}
              className={`h-12 w-12 object-cover rounded-full ${
                item.active ? "ring-2 ring-blue-600 ring-offset-2" : ""
              }`}
            />
            {/* 2. Added items-center & text-center to stack and center the headings  */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-sm font-semibold text-slate-800 leading-tight">
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