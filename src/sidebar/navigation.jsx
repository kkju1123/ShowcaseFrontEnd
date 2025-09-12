import React from "react";

import "../style/sidebar.css";
import avatar from "../assets/avator2.jpg";
import AnimeAvatarFrame from "./AnimeAvatarFrame";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  return (
    <>
      <div className="avatorBox">
        <div className="round">
          <i className="circle"></i>
        </div>
        <img className="image" src={avatar} />
      </div>
      <nav>
        <ul>
          <li>
            <div className="liContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-star-icon lucide-user-star"
              >
                <path
                  d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 
              1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 
              1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1
               0 0 0 .737-.535z"
                />
                <path d="M8 15H7a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
              </svg>
              <span>About Me</span>
            </div>
          </li>
          <li>
            <div className="liContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-laptop-icon lucide-laptop"
              >
                <path
                  d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 
              0 0 4 15.526V7a2 2 0 0 1 2-2z"
                />
                <path d="M20.054 15.987H3.946" />
              </svg>
              <span>Projects</span>
            </div>
          </li>
          <li>
            <div className="liContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-database-icon lucide-database"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
              <span>Github</span>
            </div>
          </li>
          <li>
            <div className="liContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span>Contact</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
