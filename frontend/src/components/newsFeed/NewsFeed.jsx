import React from "react";
// Replace these imports with whichever icon library you prefer (Lucide, FontAwesome, etc.)
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Smile,
} from "lucide-react";

const Newsfeed = () => {
  return (
    <div className="max-w-xl h-screen bg-white border border-slate-100 rounded-3xl p-4 shadow-sm flex flex-col gap-4">
      {/* Header: User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" // Placeholder avatar
            alt="imozix"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-slate-800 leading-tight">
              imozix
            </h3>
            <span className="text-xs text-slate-400">Cairo, Egypt</span>
          </div> 
        </div>
        <button className="text-slate-600 hover:text-slate-900 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Main Post Image */}
      <div className="w-full h- aspect-4/5 rounded-3xl overflow-hidden bg-slate-100 ">
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" // Replace with your main illustration asset
          alt="Post illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Buttons Row */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          {/* Liked Pill Button */}
          <button className="flex items-center gap-1.5 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors">
            <Heart size={16} fill="currentColor" />
            <span>123</span>
          </button>

          {/* Comment Pill Button */}
          <button className="flex items-center gap-1.5 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-slate-50 transition-colors">
            <MessageCircle size={16} />
            <span>15</span>
          </button>

          {/* Share Button */}
          <button className="text-slate-700 hover:text-slate-900 transition-colors p-1">
            <Send size={18} />
          </button>
        </div>

        {/* Save/Bookmark Button */}
        <button className="text-slate-700 hover:text-slate-900 transition-colors p-1">
          <Bookmark size={18} />
        </button>
      </div>

      {/* Likes Summary & Caption */}
      <div className="flex flex-col gap-1.5 px-1">
        {/* Liked By Section */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              className="w-5 h-5 rounded-full border border-white object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&q=80"
              alt="user"
            />
            <img
              className="w-5 h-5 rounded-full border border-white object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80"
              alt="user"
            />
          </div>
          <p className="text-xs text-slate-700">
            Liked by{" "}
            <span className="font-bold text-slate-900">asirabdelhady</span> and{" "}
            <span className="font-bold text-slate-900">122 others</span>
          </p>
        </div>

        {/* Post Caption */}
        <p className="text-sm text-slate-800">
          <span className="font-bold text-slate-900 mr-1">imozix</span>
          New illustration 🖤{" "}
          <span className="text-slate-400 cursor-pointer">... more</span>
        </p>

        {/* Timestamp */}
        <span className="text-[10px] text-slate-400 font-medium tracking-wide">
          20 JULY
        </span>
      </div>

      {/* Add Comment Section */}
      <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-3 py-2 mt-1">
        {/* Small Active User Avatar */}
        <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shrink-0">
          S
        </div>

        {/* Input Field */}
        <input
          type="text"
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
    </div>
  );
};

export default Newsfeed;
