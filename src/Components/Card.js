import React from "react";

const Card = ({ id, name, image, children, clickHandler}) => (
    <div className="col s6 m3">
      <div className="card">
        <div className="card-image">
          <img  id={id} alt={name} src={image} onClick={clickHandler} />
          {children}
        </div>
      </div>
    </div>
);

export default Card;
