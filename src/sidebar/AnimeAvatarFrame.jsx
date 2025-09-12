import React from "react";

// AnimeAvatarFrame.jsx
// A single-file React component (TailwindCSS classes) that renders an "anime"-style avatar frame
// Props: src, size (px number or string), name, status ("online"|"offline"|"away"), ringColor

export default function AnimeAvatarFrame({
  src = "/assets/avatar.jpg",
  size = 96,
  name = "Player",
  status = "online",
  ringColor = "from-pink-500 to-purple-500",
  alt = "Avatar",
}) {
  const s = typeof size === "number" ? `${size}px` : size;

  const statusColor = {
    online: "bg-green-400",
    away: "bg-yellow-400",
    offline: "bg-gray-400",
  }[status] || "bg-gray-400";

  return (
    <div className="inline-flex flex-col items-center gap-2 select-none">
      <div
        className="relative rounded-full p-1" 
        style={{ width: s, height: s }}
      >
        {/* animated neon ring */}
        <div
          aria-hidden
          className={`absolute -inset-1 rounded-full blur-md opacity-70 animate-pulse bg-gradient-to-br ${ringColor}`}
          style={{ filter: "saturate(1.2)" }}
        />

        {/* main frame */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-black/10 shadow-2xl" />

        {/* decorative corner shards (anime sparkle style) */}
        <svg
          className="absolute left-0 top-0 w-8 h-8 -translate-x-1 -translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M12 2L13.8 8.6L20.6 10.2L14.3 13.8L16 20.4L12 16.9L8 20.4L9.7 13.8L3.4 10.2L10.2 8.6L12 2Z" fill="white" opacity="0.06" />
        </svg>

        {/* avatar image */}
        <img
          src={src}
          alt={alt}
          className="relative block w-full h-full object-cover rounded-full border-[3px] border-white/10"
          style={{ boxShadow: "inset 0 6px 14px rgba(0,0,0,0.45)" }}
        />

        {/* thin holo ring on top */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className={`absolute inset-0 rounded-full border-[2px] border-white/5`} />
          <div
            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${statusColor} ring-2 ring-white/40`}
            title={`Status: ${status}`}
            aria-label={`Status: ${status}`}
          />
        </div>

        {/* small top-left badge */}
        <div className="absolute left-1 top-1 flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-white/60 blur-[0.4px] opacity-60" />
        </div>
      </div>

      {/* name label with stylized background */}
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-white/6 to-black/20 backdrop-blur-sm text-sm font-semibold text-white/90 shadow-sm">
          {name}
        </div>
      </div>
    </div>
  );
}

/*
Usage:
import AnimeAvatarFrame from './AnimeAvatarFrame';

<AnimeAvatarFrame
  src={avatar}
  size={112}
  name="Sakura"
  status="online"
  ringColor="from-pink-500 to-indigo-500"
/>

Notes:
- This component uses TailwindCSS utility classes. Make sure Tailwind is set up in your project.
- You can pass any valid image path or imported module as `src`.
- `ringColor` expects Tailwind gradient classes like "from-pink-500 to-purple-500".
- If you want more animation (sparkles, floating), I can add small keyframe-based SVG animations or framer-motion enhancements.
*/
