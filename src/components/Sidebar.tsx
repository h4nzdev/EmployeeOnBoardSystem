import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Employees", icon: Users, path: "/employees" },
  { label: "Reports", icon: FileText, path: "/reports" },
  { label: "Time Off", icon: Calendar, path: "/time-off" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } fixed w-64 transition-all duration-300 bg-slate-900 border-r border-slate-800 left-0 top-0 h-full z-40 overflow-hidden`}
    >
      <nav className="p-4 h-full overflow-y-auto relative">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-200">Menu</h2>
          <X
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:bg-slate-700 rounded-full"
          />
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                  isActive
                    ? "bg-slate-800/80 text-blue-400 border-r-4 ml-3"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-4 right-4 border-t pt-4 border-slate-600">
          <button className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors flex items-center space-x-3">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
