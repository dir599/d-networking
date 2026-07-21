function TimeStamp({ createdAt }) {
  return (
    <span className="text-[10px] text-slate-400 font-medium tracking-wide">
      {new Date(createdAt).toLocaleDateString()}
    </span>
  );
}

export default TimeStamp;
