import React from "react";

const Hexagon = ({ title, icon, url }) => {
  return (
    <>
      <div className="hexagon-item">
        <div className="hex-item">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hex-item">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href={url} className="hex-content" onClick={() => {}}>
          <span className="hex-content-inner">
            <span className="icon">
              <i className={icon}></i>
            </span>
            <span className="title">{title}</span>
          </span>
          {/* <svg
            viewBox="0 0 120.24355652982148 140"
            height="140"
            width="120.24355652982148"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.121778264910744 0L120.24355652982148 35L120.24355652982148 105L60.121778264910744 140L0 105L0 35Z"
              fill="#1e2530"
            ></path>
          </svg> */}
          <svg
            viewBox="0 0 138.56406460551017 160"
            height="160"
            width="138.56406460551017"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.28203230275509 0L138.56406460551017 40L138.56406460551017 120L69.28203230275509 160L0 120L0 40Z"
              fill="#1e2530"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Hexagon;
