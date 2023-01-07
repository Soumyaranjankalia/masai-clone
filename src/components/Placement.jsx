import React from "react";

export const Placement = () => {
  return (
    <div className="placement-mainDIv">
      <div className="placement-mainDiv-first">
        <div className="firstDiv-one">
          <div className="subFirstDiv-one">
            <p>
              <span>
                <img
                  src="https://www.masaischool.com/img/homepage/sunshine.png"
                  alt=""
                />
                6000+
              </span>
              Students Currently
            </p>
            <p>Enrolled</p>
            <p>
              <span>94% </span>
              Placement Rate* <br />
              <img className="placementRate"
                src="https://www.masaischool.com/img/homepage/underline.svg"
                alt=""
              />
            </p>
          </div>
          <p>*for students who have graduated from Masai School and are Masai accredited</p>
        </div>
        <div className="firstDiv-two">
          <div className="subFirstDiv-two">
            <div className="placementSvg">
            <svg  xmlns="http://www.w3.org/2000/svg">
              <path d="M18 49.5L9 58.32V33H18V49.5ZM33 43.98L28.29 39.96L24 43.92V21H33V43.98ZM48 39L39 48V9H48V39ZM56.43 38.43L51 33H66V48L60.63 42.63L39 64.08L28.59 55.02L17.25 66H9L28.41 46.98L39 55.92" fill="white"></path>
            </svg>
            </div>
            <div className="placement-salary">₹7.2 LPA <br /> Average <br /> Salary</div>
          </div>
          <div className="subFirstDIv-two-two">
            <div className="placementSvghigh">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47ZM13 1L6 15H11V23L18 9H13V1Z" fill="white"></path>
              </svg>
            </div>
            <div className="placement-salary">₹36 LPA <br /> Highest <br /> Salary</div>
          </div>
        </div>
      </div>
      <div className="placement-mainDiv-second">
        <div className="secondDiv-one">
          <img src="https://www.masaischool.com/img/homepage/media.png" alt="" />
        </div>
        <div className="secondDiv-two">
          <h2>Masai In The News</h2>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};
