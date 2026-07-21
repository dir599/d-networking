function LikedBy() {
  return (
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
      {/* 
        TODO: create a like model to store the ids of users who liked the post
        */}
      <p className="text-xs text-slate-700">
        Liked by <span className="font-bold text-slate-900">asirabdelhady</span>{" "}
        and <span className="font-bold text-slate-900">122 others</span>
      </p>
    </div>
  );
}

export default LikedBy;
