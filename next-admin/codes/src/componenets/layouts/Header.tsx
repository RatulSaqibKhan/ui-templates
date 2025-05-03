"use client";

import { useSidebar } from "@/context/SidebarContext";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <button onClick={toggleSidebar}>
        <FaBars className="text-xl" />
      </button>
      <div className="text-lg font-semibold">Dashboard</div>
    </header>
  );
};

export default Header;
