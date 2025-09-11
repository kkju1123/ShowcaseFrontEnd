import React from "react";

import "../style/sidebar.scss"
const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col shadow-2xl">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-gray-700">
        MyApp
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2 rounded-xl hover:bg-gray-800 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
