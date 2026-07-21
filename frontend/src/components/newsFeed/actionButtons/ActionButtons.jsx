import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
function ActionButtons({ likeCount, commentCount }) {
  return (
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-3">
        {/* Liked Pill Button */}
        <button className="flex items-center gap-1.5 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors">
          <Heart size={16} fill="currentColor" />
          <span>{likeCount}</span>
        </button>
        {/* Comment Pill Button */}
        <button className="flex items-center gap-1.5 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-slate-50 transition-colors">
          <MessageCircle size={16} />
          <span>{commentCount}</span>
        </button>
        {/* Share Button */}
        {/* 
            TODO: add shareCount and Save count in backend
        */}
        <button className="text-slate-700 hover:text-slate-900 transition-colors p-1">
          <Send size={18} />
        </button>
      </div>
      {/* Save/Bookmark Button */}
      <button className="text-slate-700 hover:text-slate-900 transition-colors p-1">
        <Bookmark size={18} />
      </button>
    </div>
  );
}

export default ActionButtons;
