import React from "react";

const Placeholder = ({ imageSrc, imageAlt}) => {

  return (
    <div>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
  
};

export default Placeholder;