import React from "react";
import data from "../../student.json";

export const Story = () => {
  return (
    <div className="storyMainDiv">
      <div className="story-DivOne">
        <h2>
          Thousands Trust Masai To <br /> Launch Their Career
        </h2>
      </div>
      <div className="storyDiv-tow">
        {data.map((e, i) => (
          <div className="storyDIvTwo-two">
            <img className="profile" src={e.image} alt="" />
            <div className="storyDIvTwo-svg" style={{ display: "flex" }}>
              <svg
                stroke="currentColor"
                fill="#6FCD9E"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p>{e.story}</p>
            </div>

            <h3>{e.name}</h3>
            <img className="company" src={e.company} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
