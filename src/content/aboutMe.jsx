import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/spanner3.jpg";
import banner3 from "../assets/banner3.jpg";
import "../style/aboutMe.css"; // 引入单独 CSS

const bannerImages = [banner1, banner2, banner3];

const content = {
  en: {
    name: "Keke Ju",
    header: "Welcome to Keke's Profile Page",
    title: "Frontend Engineer & Machine Intelligence Specialist",
    education: "Education",
    master: "Master of Science",
    major: "Machine Intelligence",
    university: "University of Basel, Switzerland",
    masterDate: "Feb 2025 - Present",
    bachelor: "Bachelor of Computer Science",
    bachelorSchool: "Shanghai Donghua University",
    bachelorDate: "Sept 2017 - Jun 2021",
    contact: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Basel, Switzerland",
    copied: "copied to clipboard!",
    workExperience: "Work Experience",
    jobTitle: "Frontend Engineer",
    company: "Trip.com Group",
    workDate: "Jul 2021 - Aug 2023",
    bullets: [
      "Collaborate with backend and UI teams to develop, test, deploy, and maintain web pages, apps, and mini-programs.",
      "Develop and deploy Ctrip content community modules, including note details page, release page, and user homepage.",
      "Use i18n to achieve front-end internationalization, participate in the development and maintenance of the trip community, and the same web page can be compatible with Chinese, English, Japanese, and Korean.",
      "Collaborated with UX designers to create intuitive user experiences.",
    ],
    technicalSkills: "Technical Skills",
    skills: [
      "Python",
      "RAG",
      "Docker",
      "MCP",
      "LLM",
      "Prompt Engineering",
      "AI Engineering",
      "Cloud Deployment",
      "Codex",
      "Claude Code",
      "LangGraph",
    ],
    languages: "Languages",
    languageItems: ["Chinese (Native)", "English (Fluent)", "German (Basic)"],
  },
  zh: {
    name: "琚珂珂",
    header: "欢迎来到 Keke 的个人主页",
    title: "前端工程师 & 机器智能方向学习者",
    education: "教育经历",
    master: "理学硕士",
    major: "机器智能",
    university: "瑞士巴塞尔大学",
    masterDate: "2025年2月 - 至今",
    bachelor: "计算机科学学士",
    bachelorSchool: "上海东华大学",
    bachelorDate: "2017年9月 - 2021年6月",
    contact: "联系方式",
    email: "邮箱",
    phone: "电话",
    location: "所在地",
    locationValue: "瑞士巴塞尔",
    copied: "已复制到剪贴板！",
    workExperience: "工作经历",
    jobTitle: "前端工程师",
    company: "携程集团",
    workDate: "2021年7月 - 2023年8月",
    bullets: [
      "与后端和 UI 团队协作，开发、测试、部署并维护网页、App 和小程序页面。",
      "开发并上线携程内容社区模块，包括笔记详情页、发布页和用户主页。",
      "使用 i18n 实现前端国际化，参与 Trip 社区的开发与维护，使同一页面兼容中文、英文、日文和韩文。",
      "与 UX 设计师协作，打造直观顺畅的用户体验。",
    ],
    technicalSkills: "技术技能",
    skills: [
      "Python",
      "RAG",
      "Docker",
      "MCP",
      "LLM",
      "Prompt Engineering",
      "AI Engineering",
      "Cloud Deployment",
      "Codex",
      "Claude Code",
      "LangGraph",
    ],
    languages: "语言",
    languageItems: ["中文（母语）", "英语（流利）", "德语（基础）"],
  },
};

const skillIcons = [
  "fab fa-python",
  "fas fa-search",
  "fab fa-docker",
  "fas fa-plug",
  "fas fa-brain",
  "fas fa-comment-dots",
  "fas fa-cogs",
  "fas fa-cloud-upload-alt",
  "fas fa-terminal",
  "fas fa-robot",
  "fas fa-project-diagram",
];

export default function AboutMe({ language = "en" }) {
  const t = content[language] || content.en;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // 每4秒切换一次
    return () => clearInterval(timer);
  }, []);
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const notification = document.getElementById("notification");
      notification.textContent = `${text} ${t.copied}`;
      notification.classList.add("show");

      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
  }
  return (
    <>
      <header className="about-me-header">
        {bannerImages.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }} // 仅保留图片路径
          />
        ))}
        <div className="header-text">{t.header}</div>

        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </header>
      <div className="contentPage">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-name">{t.name}</div>
            <p className="profile-title">
              {t.title}
            </p>
          </div>

          <div className="profile-content">
            <div className="left-column">
              <div className="section">
                <div className="section-title">{t.education}</div>
                <div className="education-item">
                  <div className="item-title">{t.master}</div>
                  <p className="item-subtitle">{t.major}</p>
                  <p className="item-subtitle">
                    {t.university}
                  </p>
                  <p className="item-date">{t.masterDate}</p>
                </div>

                <div className="education-item">
                  <div className="item-title">{t.bachelor}</div>
                  <p className="item-subtitle">{t.bachelorSchool}</p>
                  <p className="item-date">{t.bachelorDate}</p>
                </div>
              </div>

              <div className="section">
                <div className="section-title">{t.contact}</div>
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
                        <div className="contact-type">{t.email}</div>
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
                        <div className="contact-type">{t.phone}</div>
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
                        <div className="contact-type">{t.location}</div>
                        <div className="contact-value">{t.locationValue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="section">
                <div className="section-title">{t.workExperience}</div>
                <div className="experience-item">
                  <div className="item-title">{t.jobTitle}</div>
                  <p className="item-subtitle">{t.company}</p>
                  <p className="item-date">{t.workDate}</p>
                  <ul className="aboutMeList">
                    {t.bullets.map((bullet, bulletIndex) => (
                      <li key={bullet}>
                        {bulletIndex + 1}. {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="section">
                <div className="section-title">{t.technicalSkills}</div>
                <div className="skills-container">
                  {t.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skill}>
                      <i className={`${skillIcons[skillIndex]} skill-icon`}></i>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <div className="section-title">{t.languages}</div>
                <div className="skills-container">
                  {t.languageItems.map((languageItem) => (
                    <div className="skill-item" key={languageItem}>
                      <i className="fas fa-language skill-icon"></i>
                      <span>{languageItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="notification" className="notification"></div>
    </>
  );
}
