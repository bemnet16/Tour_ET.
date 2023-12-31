import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import { ImCancelCircle } from "react-icons/im";
import { useAuthContext } from "../../customHook/useAuthContext";

function Rooms({ id, image, name, isRoom, setIsRoom, description }) {
  const { book, setBook, setRoomSelect } = useContext(context);
  const [rooms, setRooms] = useState([]);
  const { user } = useAuthContext();

  const fetchRoom = async () => {
    const res = await fetch(
      `https://tour-et.onrender.com/api/hotel/${id}/room?taken=true`,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setBook({ ...book, hotelId: id });
    const result = await res.json();

    setRooms(result.data);
  };

  const roomInfo = (id) => {
    const selected = rooms.find((room) => room._id === id);
    setRooms(selected);
    setBook({
      ...book,
      roomId: selected._id,
      roomImg: selected.images[0],
      roomPrice: selected.price,
      roomBody: selected.description,
    });
    setRoomSelect(true);
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <div
      className="rooms"
      style={{
        padding: "50px",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        overflowY: "scroll",
        justifyContent: "center",
        zIndex: "100",
      }}
    >
      <h1
        onClick={() => setIsRoom(!isRoom)}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "50px",
          right: "70px",
        }}
      >
        <ImCancelCircle />
      </h1>
      <div className="container-md">
        <div className="hotel row">
          <img
            src={image}
            alt=""
            className="col-md-6"
            style={{
              width: "450px",
              boxShadow: "2px 2px 10px rgb(244,244,244)",
            }}
          />
          <div className="col-md-5">
            <h2>{name} </h2>
            <p>{description} </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            overflow: "scroll",
            display: "flex",
            gap: "20px",
            padding: "40px 0px",
          }}
        >
          {rooms &&
            rooms.map((room) => {
              const { _id, description, price, images, type, roomNumber } =
                room;
              return (
                <div
                  onClick={() => roomInfo(_id)}
                  key={_id + 1}
                  className="shadow p-1"
                  style={{ width: "350px", cursor: "pointer" }}
                >
                  <img
                    src={images[0]}
                    alt={name}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <p>{description} </p>
                  <div className="d-flex justify-content-between px-3 text-primary border pt-2 my-2">
                    <h5>Room number: {roomNumber} </h5>
                    <h5>{type} </h5>
                  </div>
                  <h3 className="px-3 text-end">{price} birr</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
