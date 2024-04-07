import React from "react";
import ban from "../Components/Assets/banner_kids.png";
import kids_clothes from "../Components/Assets/kids_clothes";
import "./Kids.css";
import Item from "../Components/Item/Item";

function Kids() {
  return (
    <div className="kids_cloth">
      <img src={ban} alt="" />
      <hr />
      <hi>Popular CLothes FOr Your Kids</hi>
      <div className="New">
        {kids_clothes.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>{" "}
    </div>
  );
}

export default Kids;
