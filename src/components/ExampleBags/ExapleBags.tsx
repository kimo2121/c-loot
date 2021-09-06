import React from "react";
import "./exampleBags.css";
import group2 from "../../assets/images/Group 2.png";
import group3 from "../../assets/images/Group 3.png";
import group4 from "../../assets/images/Group 4.png";

const ExapleBags: React.FC = () => {
  return (
    <div className="exmaple-bags">
      <h5>Example Bags:</h5>
      <div className="bags">
        <img src={group4} alt="" />
        <img src={group2} alt="" />
        <img src={group3} alt="" />
      </div>
    </div>
  );
};

export default ExapleBags;
