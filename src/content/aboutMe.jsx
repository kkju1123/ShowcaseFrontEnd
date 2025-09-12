import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import "../style/aboutMe.css"; // 引入单独 CSS

export default function AboutMe() {
  const images = [banner1, banner2, banner3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 每4秒切换一次
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="about-me-header">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }} // 仅保留图片路径
        />
      ))}
      <div className="header-text">About Me</div>
    </header>
  );
}
