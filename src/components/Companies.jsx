import React from "react";
import data from "../../company.json";
import dataTwo from "../../companyTwo.json"

export const Companies = () => {
  return (
    <>
    <div className="companiesDiv-one">
      {data.map((e,i)=>
      <div className="comapniesDiv-two">
        <img src={e.image} alt="" />
      </div>
      )}
    </div>
    <div className="companiesDiv-one" >
      {dataTwo.map((e,i)=>
      <div className="comapniesDiv-two">
        <img src={e.image} alt="" />
      </div>
      )}
    </div>
    </>
  );
};
