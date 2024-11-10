import React, { useState, useRef } from "react";

export const UseRefs = () => {
 
  const boxSize = useRef("");
  const [sizeWidth, SetSizeWidth] = useState("");
  const [sizeheight, SetSizeHeight] = useState("");

  const knowTheSizeOfBox = () => {
    const boxWidth = boxSize.current.offsetWidth;
    const boxHeight = boxSize.current.offsetHeight;
    SetSizeWidth(boxWidth + "px");
    SetSizeHeight(boxHeight + "px");
  };

  return (
    <>
      <div
        className="box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
          height: "250px",
          background: "linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8)) fixed, url(http://www.webcreatorbox.com/sample/images/bg-cherrybrossam.jpg) fixed",
          backgroundSize: "autp",
        }}
        ref={boxSize} //"If you give the same ref to multiple elements, like an <h2> tag and another element, it won't work as expected."
      ></div>
      <button onClick={knowTheSizeOfBox}>Know the size of box</button>
      <h4>
        outer box width is
        <span
          style={{ backgroundColor: "#000", color: "white", padding: "5px" }}
        >
          {sizeWidth}
        </span>
        and height is
        <span
          style={{ backgroundColor: "#000", color: "white", padding: "5px" }}
        >
          {sizeheight}
        </span>
      </h4>
    </>
  );
};
