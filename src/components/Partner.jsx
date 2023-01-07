import React from "react";

export const Partner = () => {
  return (
    <div className="mainPartner">
      <div className="partnerOne">
        <iframe
          src="https://www.youtube.com/embed/tSlit0vgB20?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.masaischool.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=5"
          frameborder="0"
        ></iframe>
      </div>
      <div className="partnerTwo">
        <p>What companies are saying about our students</p>
        <div className="partnerTwo-Div">
          <div className="partnerTwo-DivOne">
            <img src="https://www.masaischool.com/img/linkedin.svg" alt="" />
            <div style={{ display: "flex" }}>
              <svg
                stroke="currentColor"
                fill="#3470E4"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p style={{ textAlign: "left" }}>
                There are many platforms that bolster an individual's
                "knowledge" to show up to work and just do the...
              </p>
            </div>
            <div className="partnerTwo-DivOne-one">
              <img
                src="	https://www.masaischool.com/img/hire-masai-grads/Anirban_Majumdar.jpeg"
                alt=""
              />
              <div className="partnerTwo-DivOne-oneTwo">
                <p style={{fontWeight:"bold"}}>ANIRBAN MAJUMDAR</p>
                <p>CTO and Co-Founder-Urban Piper </p>
              </div>
            </div>
          </div>
          <div className="partnerTwo-DivOne">
            <img src="https://www.masaischool.com/img/linkedin.svg" alt="" />
            <div style={{ display: "flex" }}>
              <svg
                stroke="currentColor"
                fill="#3470E4"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p style={{ textAlign: "left" }}>
                We were looking to hire entry-level developers and Masai more
                than delivered. Our selection rate fro...
              </p>
            </div>

            <div className="partnerTwo-DivOne-one">
              <img
                src="	https://www.masaischool.com/img/hire-masai-grads/Vamsee_Mohan_Kamabathula.jpeg"
                alt=""
              />
              <div className="partnerTwo-DivOne-oneTwo">
                <p style={{fontWeight:"bold"}}>VAMSEE MOHAN KAMABATHULA</p>
                <p>CTO and Co-Founder-Qapita Fintech </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
