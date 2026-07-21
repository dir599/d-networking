import { useState } from "react";
import {
  Smile,
} from "lucide-react";

function AddComment({ profileImage }) {
  const [comment, setComment] = useState("");
  return (
    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-3 py-2 mt-1">
      {/* Small Active User Avatar */}
      <img
        src={profileImage}
        className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shrink-0"
      />
      {/* Input Field */}
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
      />
      {/* Emoji Button */}
      <button className="text-slate-400 hover:text-slate-600 transition-colors">
        <Smile size={18} />
      </button>
      {/* Submit Action */}
      <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
        Post
      </button>
    </div>
  );
}

export default AddComment;
