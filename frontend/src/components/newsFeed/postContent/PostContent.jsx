function PostContent({ postImage }) {
  return (
    <div className="w-full h- aspect-4/5 rounded-3xl overflow-hidden bg-slate-100 ">
      <img
        src={postImage}
        alt="Post illustration"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default PostContent;
