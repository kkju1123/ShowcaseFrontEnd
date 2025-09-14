import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/spanner3.jpg";
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
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const notification = document.getElementById("notification");
      notification.textContent = `${text} copied to clipboard!`;
      notification.classList.add("show");

      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
  }
  return (
    <>
      <header className="about-me-header">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }} // 仅保留图片路径
          />
        ))}
        <div className="header-text">Welcome to Keke's Profile Page</div>

        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </header>
      <div className="contentPage">
        <div className="profile-card">
          <div className="profile-header">
            <h1 className="profile-name">KeKe Ju</h1>
            <p className="profile-title">
              Frontend Engineer & Machine Intelligence Specialist
            </p>
          </div>

          <div className="profile-content">
            <div className="left-column">
              <div className="section">
                <h2 className="section-title">Education</h2>
                <div className="education-item">
                  <h3 className="item-title">Master of Science</h3>
                  <p className="item-subtitle">Machine Intelligence</p>
                  <p className="item-subtitle">
                    University of Basel, Switzerland
                  </p>
                  <p className="item-date">Feb 2025 - Present</p>
                </div>

                <div className="education-item">
                  <h3 className="item-title">Bachelor of Computer Science</h3>
                  <p className="item-subtitle">Shanghai Donghua University</p>
                  <p className="item-date">Sept 2017 - Jun 2021</p>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title">Contact</h2>
                <div className="contact-info">
                  <div className="contact-info">
                    <div
                      className="contact-item"
                      onClick={() => copyToClipboard("kkju1123@outlook.com")}
                    >
                      <div className="contact-icon">
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
                          class="lucide lucide-mail-icon lucide-mail"
                        >
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>{" "}
                      </div>
                      <div className="contact-details">
                        <div className="contact-type">Email</div>
                        <div className="contact-value">
                          kkju1123@outlook.com  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="copy"
                        margin-left="7"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      className="contact-item"
                      onClick={() => copyToClipboard("+41 78 234 4752")}
                    >
                      <div className="contact-icon">
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
                          class="lucide lucide-phone-call-icon lucide-phone-call"
                        >
                          <path d="M13 2a9 9 0 0 1 9 9" />
                          <path d="M13 6a5 5 0 0 1 5 5" />
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                      </div>
                      <div className="contact-details">
                        <div className="contact-type">Phone</div>
                        <div className="contact-value">+41 78 234 4752  
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="copy"
                        margin-left="7"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg></div>
                      </div>
                     
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
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
                          class="lucide lucide-map-pin-icon lucide-map-pin"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="contact-details">
                        <div className="contact-type">Location</div>
                        <div className="contact-value">Basel, Switzerland</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="section">
                <h2 className="section-title">Work Experience</h2>
                <div className="experience-item">
                  <h3 className="item-title">Frontend Engineer</h3>
                  <p className="item-subtitle">Trip.com Group</p>
                  <p className="item-date">Jul 2021 - Aug 2023</p>
                  <ul className="aboutMeList">
                    <li>
                      1. Collaborate with backend and UI teams to develop, test,
                      deploy, and maintain web pages, apps, and mini-programs.
                    </li>
                    <li>
                      2. Develop and deploy Ctrip content community modules,
                      including note details page, release page, and user
                      homepage.
                    </li>
                    <li>
                      3. Use i18n to achieve front-end internationalization,
                      participate in the development and maintenance of the trip
                      community, and the same web page can be compatible with
                      Chinese, English, Japanese, and Korean.
                    </li>
                    <li>
                      4. Collaborated with UX designers to create intuitive user
                      experiences.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                  <div className="skill-item">
                    <i className="fab fa-html5 skill-icon"></i>
                    <span>HTML5</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-css3-alt skill-icon"></i>
                    <span>CSS3 & SASS</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-js skill-icon"></i>
                    <span>JavaScript ES6+</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-react skill-icon"></i>
                    <span>React.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-vuejs skill-icon"></i>
                    <span>Vue.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-node skill-icon"></i>
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-database skill-icon"></i>
                    <span>MongoDB</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-python skill-icon"></i>
                    <span>Python</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-brain skill-icon"></i>
                    <span>Machine Learning</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-chart-line skill-icon"></i>
                    <span>Data Visualization</span>
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-git-alt skill-icon"></i>
                    <span>Git</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-mobile-alt skill-icon"></i>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title">Languages</h2>
                <div className="skills-container">
                  <div className="skill-item">
                    <i className="fas fa-language skill-icon"></i>
                    <span>Chinese (Native)</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-language skill-icon"></i>
                    <span>English (Fluent)</span>
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-language skill-icon"></i>
                    <span>German (Intermediate)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
