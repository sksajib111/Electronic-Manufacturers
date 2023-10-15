import React from "react";

const InfoCard = ({ img, cardBody, cardTitle, bgColor }) => {
  return (
    <div className={`card lg:card-side bg-accent shadow-xl my-10 ${bgColor}`}>
      <figure className="pl-5 mt-4">
        <img src={img} className="w-10 " alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
