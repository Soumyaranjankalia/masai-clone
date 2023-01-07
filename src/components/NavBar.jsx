import React from "react";

export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="nav-img">
        <img
          src="https://www.masaischool.com/img/navbar/logo.svg"
          alt="masai-logo"
        />
      </div>
      <div className="nav-course">
        <p>COURSE</p>
        <p>REFER & EARN</p>
        <p>FEES & PAP</p>
        <p>FREE RESOURCES</p>
        <p>FOR CORPORATE</p>
      </div>
      <div className="nav-btn">
        <button className="nav-btn-one">FOR STUDENTS</button>
        <button className="nav-btn-two">LOGIN</button>
      </div>
    </div>
  );
};
