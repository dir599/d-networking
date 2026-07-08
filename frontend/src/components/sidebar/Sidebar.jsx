import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa500px } from "@fortawesome/free-brands-svg-icons";
import {
  Archive,
  Clock3,
  Home,
  Navigation,
  QrCode,
  Save,
  Settings,
  Video,
} from "lucide-react";
import { icon } from "@fortawesome/fontawesome-svg-core";

// 1. Clean array for navigation items to keep the JSX DRY (Don't Repeat Yourself)
const navItems = [
  { label: "News feed", icon: Home },
  { label: "Explore", icon: Navigation },
  { label: "Reel", icon: Video },
  { label: "Saved", icon: Save },
  { label: "Your Activity", icon: Clock3 },
  { label: "Archive", icon: Archive },
  { label: "QR code", icon: QrCode },
  { label: "Setting", icon: Settings },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("News feed");
  return (
    <div className="w-64 min-h-screen bg-white rounded-2xl flex flex-col gap-6 shadow-sm border border-slate-100 ">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-4">
        <div className="flex items-center">
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
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = activeItem === label;
          return (
            <button
              key={label}
              onClick={()=> setActiveItem(label)}
              className={`w-full flex  items-center px-9 gap-3 py-2.5 text-sm   rounded-xl transition-all duration-200 ${
                isActive
                  ? "font-bold text-slate-700 bg-slate-400"
                  : "font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                <Icon size={18} />
              </span>
              <span>{label}</span>
            </button>
          );
        })}
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
