import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ array }) => {
  // console.log("Tilelist is being rendered");
  // console.log("Contacts array:", array);
  return (
    <div>
      {array.map((item, index) => {
        const { name, ...rest } = item;
        console.log("this is right")
        return (
          <Tile
            name={name}
            description={rest}
            key={index}
          />
        );
      })}
    </div>
  );
};
