import { useState } from "react";

const Events = ({ myName = "samir" }) => {
  const [userName, SetUserName] = useState("");

  function handleOnClick() {
    SetUserName(`welcome ${myName} !!`);
  }

  return (
    <>
      {/* <button
        onClick={(e) => {
          console.log("this is a", e.target);
        }}
      >
      inline  event handler
      </button> */}

      <button onClick={handleOnClick} style={{marginTop:"0px"}}>click for user name</button>

      <h3>{userName}</h3>
    </>
  );
};

export default Events;
