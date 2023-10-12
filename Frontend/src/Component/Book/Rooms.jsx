import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import { ImCancelCircle } from "react-icons/im";
import { useAuthContext } from "../../customHook/useAuthContext";

function Rooms({ id, image, name, isRoom, setIsRoom, description }) {
  const { book, setBook, setRoomSelect } = useContext(context);
  const [rooms, setRooms] = useState([]);
  const { user } = useAuthContext();


  const fetchRoom = async () => {
    const res = await fetch(`https://dankil.onrender.com/api/hotel/${id}/room?taken=true`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setBook({ ...book, hotelId: id })
    const result = await res.json();

    setRooms(result.data);
  };

  const roomInfo = (id) => {
    const selected = rooms.find((room) => room._id == id);
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
        height: "auto",
        backgroundColor: "white",
        display: "flex",

        justifyContent: "center",
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
        <ImCancelCircle />{" "}
      </h1>
      <div className="container-md">
        <div className="hotel row">
          <img src={image} alt="" className="col-md-6" style={{ width: "300px" }} />
          <div className="col-md-5">
            <h2>{name} </h2>
            <p>{description} </p>
          </div>
        </div>
        <div style={{ backgroundColor: "white", overflow: 'scroll', display: 'flex', gap: "20px", padding: "40px 0px" }}>
          {rooms && rooms.map((room) => {
            const { _id, description, price, images, type, roomNumber } = room;
            return (
              <div onClick={() => roomInfo(_id)} key={_id + 1} className="shadow" style={{ width: "300px", cursor: "pointer" }} >
                <img src={images[0]} alt={name} style={{ width: "100%", height: "200px" }} />
                {/* <p>{description} </p> */}
                <h3>{price} birr</h3>
                <p>Room number{roomNumber} </p>
                <p>{type} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}

export default Rooms;
