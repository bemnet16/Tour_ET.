import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import Rooms from "./Rooms";

function Hotel({ _id, name, image, description }) {
  const { book } = useContext(context);
  const [isRoom, setIsRoom] = useState(false);

  return (
    <div
      className="hotels widt shadow mb-5 bg-white p-1"
      style={{ width: "350px" }}
    >
      <img
        src={image}
        alt={name}
        style={{ height: "350px", maxWidth: "100%" }}
      />
      <h3 className="mt-1">{name} </h3>
      <span>{description.slice(0, 80)}...</span>
      {isRoom && (
        <Rooms
          id={_id}
          name={name}
          image={image}
          description={description}
          isRoom={isRoom}
          setIsRoom={setIsRoom}
          key={_id}
        />
      )}
      <h6
        onClick={() => setIsRoom(!isRoom)}
        style={{ cursor: "pointer" }}
        className="fw-bold"
      >
        Show Rooms
      </h6>
    </div>
  );
}

export default Hotel;
