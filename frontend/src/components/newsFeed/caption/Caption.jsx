import React from "react";

function Caption({ username, content }) {
  return (
    <p className="text-sm text-slate-800">
      <span className="font-bold text-slate-900 mr-1">{username}</span>
      {content}{" "}
    </p>
  );
}

export default Caption;
