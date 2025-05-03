"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import {
  FaChevronDown,
  FaChevronRight,
  FaSignOutAlt,
  FaTachometerAlt,
  FaSignInAlt,
  FaBug,
} from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    children: [
      { label: "V1", href: "/dashboard/v1" },
      { label: "V2", href: "/dashboard/v2" },
      { label: "Simple", href: "/dashboard" },
    ],
  },
  {
    label: "Login",
    icon: <FaSignInAlt />,
    children: [
      { label: "V1", href: "/login/v1" },
      { label: "V2", href: "/login/v2" },
      { label: "Simple", href: "/login" },
    ],
  },
  { label: "App Crush", icon: <FaBug />, href: "/crasher" },
];

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (href: string) => pathname === href;

  return (
    <aside
      className={clsx(
        "bg-primary text-white min-h-screen flex flex-col transition-all duration-300",
        { "w-64": isSidebarOpen, "w-20": !isSidebarOpen }
      )}
    >
      {/* Logo */}
      <div className="text-2xl text-center font-bold px-6 py-3 border-b border-gray-700">
        {isSidebarOpen ? "MyCompany" : "M"}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const parentActive =
            item.children?.some((c) => isActive(c.href)) ||
            isActive(item.href ?? "");

          return (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className={clsx(
                      "flex items-center w-full px-4 py-2 hover:bg-secondary transition",
                      parentActive && "bg-orange-500 font-semibold",
                      { "justify-between" : isSidebarOpen, "justify-center" : !isSidebarOpen }
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {isSidebarOpen && item.label}
                    </span>
                    {isSidebarOpen &&
                      (openSections[item.label] || parentActive ? (
                        <FaChevronDown size={12} />
                      ) : (
                        <FaChevronRight size={12} />
                      ))}
                  </button>
                  <AnimatePresence>
                    {isSidebarOpen &&
                      (openSections[item.label] || parentActive) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-8"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={clsx(
                                "block px-2 py-1 rounded hover:bg-secondary text-sm",
                                isActive(child.href) && "bg-orange-400"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 hover:bg-secondary transition",
                    parentActive && "bg-gray-800 font-semibold",
                    { "justify-start" : isSidebarOpen, "justify-center" : !isSidebarOpen }
                  )}
                >
                  {item.icon}
                  {isSidebarOpen && item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-gray-700">
        <button
          className={clsx(
            "w-full rounded  py-2 bg-red-500 hover:bg-red-600 transition cursor-pointer",
            { "px-4": isSidebarOpen, "": !isSidebarOpen }
          )}
        >
          <span className="flex items-center justify-center gap-2">
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
