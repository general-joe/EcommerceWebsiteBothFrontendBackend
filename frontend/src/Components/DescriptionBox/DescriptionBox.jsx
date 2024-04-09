import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbos-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of a products or services over the internet serves as a
          virtual market place where businesses and individuals showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce website has gained
          immense popularity due to their convenient accessibility, and the
          global reach they offer.
        </p>
        <p>
          E-commerce website typically display products or services and detailed
          descriptions, images, prices, and any available market (e.g., sizes,
          colors,). Each product usually has it own dedicated with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
