import {
  MoreHorizontal,
} from "lucide-react";
function Header({ profileImage, username, bio }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-slate-800 leading-tight">
            {username}
          </h3>
          <span className="text-xs text-slate-400">{bio}</span>
        </div>
      </div>
      <button className="text-slate-600 hover:text-slate-900 transition-colors">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}

export default Header;
