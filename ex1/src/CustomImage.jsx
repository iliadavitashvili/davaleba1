import React from "react";

const CustomImage = ({ img }) => {
  return (
    <div>
      <img style={{ width: "100px", height: "100px" }} src={img} alt="img" />
    </div>
  );
};

export default CustomImage;
