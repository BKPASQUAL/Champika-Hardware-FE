import React, { useState } from "react";

function Learn() {
  const [myVar, setMyVar] = useState({
    Name: "BK",
    Location: "Galle",
    Position: "FE",
  });


  const clickHandle = () => {
    setMyVar({
      ...myVar,
      Name: "Bawantha",
      Location: "Colombo",
      Position: "BE",
    });
  };

  console.log(myVar);
  return (
    <div>
      <h1>{myVar.Name}</h1>
      <h1>{myVar.Location}</h1>
      <h1>{myVar.Position}</h1>
      
      <button onClick={clickHandle}>Set Daata</button>
    </div>
  );
}

export default Learn;
