import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa500px } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  // 1. Clean array for navigation items to keep the JSX DRY (Don't Repeat Yourself)
  const navItems = [
    "News feed",
    "Explore",
    "Reel",
    "Saved",
    "Your Activity",
    "Inside",
    "Archive",
    "QR code",
    "Setting",
  ];

  return (
    <div className="w-64 min-h-screen bg-white rounded-2xl flex flex-col gap-6 shadow-sm border border-slate-100 ">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-4">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={fa500px}
            className="text-2xl text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          />
          <h1 className="font-semibold text-slate-800 tracking-wide text-sm">
            crazy@xyz
          </h1>
        </div>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
          Switch
        </button>
      </div>

      {/* Main Navigation Body */}
      <nav className="flex flex-col gap-5 flex-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="w-full py-2.5 text-sm font-medium text-slate-600 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="pt-4 border-t border-slate-100">
        <button className="w-full text-center px-4 py-2.5 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
