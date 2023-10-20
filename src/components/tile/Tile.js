import React from "react";

export const Tile = ({ name, description }) => {
  
  return (
    <div className="tile-container">
      <p className="tile-title" >{name}</p>
      {console.log(`name: ${name}`)}
      {Object.values(description).map((value, index) => {
        
        
        console.log(`description: ${description}`);
        // console.log(`Value: ${value}`)
        return <p className="tile" key={index} > {value}</p>;
      })}
    </div>
  );
};
