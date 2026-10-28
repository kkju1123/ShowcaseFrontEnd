import AboutMe from "./content/aboutMe";
import Work from "./content/work";
import Certificates from "./content/certificates";
import "./style/sidebar.css";
import avatar from "./assets/avator2.jpg";
import React, { useEffect, useState } from "react";
import "./App.css";

const LANGUAGE_KEY = "language";

// 优先使用用户手动选择过的语言，否则按浏览器语言：中文 -> zh，其余 -> en
function detectLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // localStorage 不可用时忽略
  }
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const prefersChinese = browserLanguages.some((lang) => lang?.toLowerCase().startsWith("zh"));
  return prefersChinese ? "zh" : "en";
}

function App() {
  let [active,setActive]=useState(1);
  const [language, setLanguage] = useState(detectLanguage);
  const isChinese = language === "zh";

  useEffect(() => {
    document.documentElement.lang = isChinese ? "zh-CN" : "en";
  }, [isChinese]);

  const toggleLanguage = () => {
    const next = isChinese ? "en" : "zh";
    setLanguage(next);
    try {
      localStorage.setItem(LANGUAGE_KEY, next);
    } catch {
      // localStorage 不可用时忽略
    }
  };
  const renderContent = () => {
    if (active === 1) {
      return <AboutMe language={language}/>;
    }
    if (active === 2) {
      return <Work language={language}/>;
    }
    return <Certificates language={language}/>;
  };
  return (
    <div className="homepage">
      <div className="sidebar">
        <div className="sideContent">
     <div className="avatorBox">
             <div className="round">
               <i className="circle"></i>
             </div>
             <img className="image" src={avatar} />
           </div>
           <nav>
             <ul>
               <li className={active ==1 ?"active sidebarli":"sidebarli"} onClick={()=>{setActive(1)}}>
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
                     className="sidebarIcon"
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
                   <span>{isChinese ? "关于我" : "About Me"}</span>
                 </div>
               </li>
               <li className={active==2?"active sidebarli":"sidebarli"} onClick={()=>{setActive(2)}}>
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
                     className="sidebarIcon"
                   >
                     <path
                       d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 
                   0 0 4 15.526V7a2 2 0 0 1 2-2z"
                     />
                     <path d="M20.054 15.987H3.946" />
                   </svg>
                   <span>{isChinese ? "项目" : "Projects"}</span>
                 </div>
               </li>
               <li className={active==3?"active sidebarli":"sidebarli"} onClick={()=>{setActive(3)}}>
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
                     className="sidebarIcon"
                   >
                     <path d="M15 2H9a2 2 0 0 0-2 2v14l5-3 5 3V4a2 2 0 0 0-2-2Z" />
                     <path d="M9 7h6" />
                     <path d="M9 11h6" />
                   </svg>
                   <span>{isChinese ? "证书" : "Certificates"}</span>
                 </div>
               </li>
               <li className="sidebarli">
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
                     className="sidebarIcon"
                   >
                     <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                   </svg>
                   <a href="https://www.linkedin.com/in/keke-ju-957436358/">Linkedin</a>
                 </div>
               </li>
             </ul>
           </nav>
      </div>
      </div>

      <div className="content">
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label={isChinese ? "Switch to English" : "切换到中文"}
        >
          {isChinese ? "EN" : "中"}
        </button>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
