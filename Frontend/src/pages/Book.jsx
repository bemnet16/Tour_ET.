import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { useAuthContext } from "../customHook/useAuthContext.js";
import { context } from "../context/context.js";
import Hotel from "../Component/Book/Hotel.jsx";
import useFetch from "../customHook/useFetch.js";
function Book() {
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [numTour, setNumTour] = useState(1);
  const [roomSelect, setRoomSelect] = useState(false);
  const [totalPrice, setTotal] = useState(0);
  const { user } = useAuthContext();
  const { data: hotels } = useFetch(
    `https://tour-et.onrender.com/api/package/${id}/hotel`
  );
  const { data: pkg } = useFetch(
    `https://tour-et.onrender.com/api/package/${id}`
  );

  const handleSumbit = async (e) => {
    e.preventDefault();
    const { hotelId, roomId, payment } = book;
    const body = {
      hotel: hotelId,
      room: roomId,
      payment,
      package: pkg._id,
      name: pkg.name,
      numberOfPeople: numTour,
      price: totalPrice,
    };
    await fetch(
      `https://tour-et.onrender.com/api/booking/
      `,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    history.go(-1);
  };
  const calPrice = async () => {
    const body = {
      pricePerAdult: pkg.pricePerAdult,
      noOfPeople: parseInt(numTour),
    };
    console.log(pkg.pricePerAdult, parseInt(numTour));
    const response = await fetch(
      `https://tour-et.onrender.com/api/booking/price/
    `,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const result = await response.json();
    if (response.ok) {
      setTotal(result.data.totalPrice);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    console.log(book.payment);
  };

  if (!pkg) {
    return <h3>no package for today </h3>;
  }

  return (
    <div
      className="container-md my-5 d-flex flex-column align-items-start p-5"
      style={{ marginBottom: "30px" }}
    >
      <div className="d-block" style={{ fontSize: "30px" }}>
        <span className="fw-bold ">{pkg.location}/ </span>
        <span className="">{pkg.name} </span>
      </div>
      <div style={{ width: "40%" }}>
        <input type="date" name="date" className="form-control w-100" />
      </div>
      <div
        className=""
        style={{
          fontSize: "20px",
          marginTop: "10px ",
          width: "500px",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <label className="me-2" htmlFor="user">
          <FaUserCircle />
        </label>
        <input
          id="user"
          type="number"
          pattern="^\d+$"
          inputMode="numeric"
          step="1"
          min="1"
          max="99"
          value={numTour}
          onChange={(e) => setNumTour(e.target.value)}
        />
        <button className="btn btn-secondary ms-5 d-inline" onClick={calPrice}>
          calculate price
        </button>
        <p className="lead d-inline ms-5 fw-bold">
          Total price : {totalPrice}{" "}
        </p>
      </div>

      <div className="d-flex  mb-3"></div>

      <div className="">
        <form onSubmit={handleSumbit} className="">
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={handleChange}
            className="form-control p-2 my-4"
            style={{ width: "60%" }}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={handleChange}
            className="form-control p-2 my-4"
            style={{ width: "60%" }}
          />
          <input
            type="tel"
            placeholder="Enter phone number"
            name="phone"
            onChange={handleChange}
            className="form-control p-2 my-4"
            style={{ width: "60%" }}
          />
          <div className="d-flex payment-container">
            <div className="d-flex  my-5">
              <div className="d-flex  payment">
                <input
                  className="me-2"
                  type="radio"
                  name="payment"
                  value="teleBirr"
                  id="teleBirr"
                  hidden={true}
                  onChange={handleChange}
                />
                <label htmlFor="teleBirr">
                  <div className="img-container">
                    <img
                      style={{
                        width: "60px",
                        cursor: "pointer",
                      }}
                      src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/4c/7e/07/4c7e0740-f225-50ac-3c25-00e7cb488772/AppIcon-1x_U007emarketing-0-5-0-85-220.png/512x512bb.jpg"
                      alt="telebirr logo"
                      className="logo-img"
                    />
                    <br />
                    <p
                      style={{
                        borderBottom:
                          book.payment === "teleBirr" ? "3px solid gray" : "",
                      }}
                      className=""
                    >
                      telebirr
                    </p>
                  </div>
                </label>
              </div>
              <div className="d-flex payment">
                <input
                  className="me-2"
                  type="radio"
                  name="payment"
                  value="CBEBirr"
                  id="CBEBirr"
                  hidden={true}
                  onChange={handleChange}
                />
                <label style={{ cursor: "pointer" }} htmlFor="CBEBirr">
                  <div className="img-container">
                    <img
                      style={{
                        width: "120px",
                        cursor: "pointer",
                      }}
                      src="
                        https://play-lh.googleusercontent.com/rcSKabjkP2GfX1_I_VXBfhQIPdn_HPXj5kbkDoL4cu5lpvcqPsGmCqfqxaRrSI9h5_A=w600-h300-pc0xffffff-pd"
                      alt="telebirr logo"
                      className="logo-img"
                    />
                    <br />
                    <p
                      style={{
                        borderBottom:
                          book.payment === "CBEBirr" ? "3px solid gray" : "",
                      }}
                      className=""
                    >
                      CBEbirr
                    </p>
                  </div>
                </label>
              </div>
              <div className="d-flex payment">
                <input
                  className="me-2"
                  type="radio"
                  name="payment"
                  value="e_birr"
                  id="e_birr"
                  hidden={true}
                  onChange={handleChange}
                />
                <label style={{ cursor: "pointer" }} htmlFor="e_birr">
                  <div className="img-container">
                    <img
                      style={{
                        width: "60px",
                        cursor: "pointer",
                      }}
                      src="https://ebirr.com/wp-content/uploads/2018/08/logooo-002.jpg"
                      alt="telebirr logo"
                      className="logo-img"
                    />
                    <br />
                    <p
                      style={{
                        borderBottom:
                          book.payment === "e_birr" ? "3px solid gray" : "",
                      }}
                      className=""
                    >
                      e birr
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div
            className="container-md "
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
              overflow: "auto",
              justifyContent: "center",
            }}
          >
            {!roomSelect && (
              <div
                className="d-flex  bg-light gap-5 px-5"
                style={{
                  overflow: "auto",
                  overflowY: "scroll",
                  justifyContent: "center",
                  display: "flex",
                  maxHeight: "90vh",
                }}
              >
                {hotels?.map((hotel, idx) => {
                  return (
                    <context.Provider
                      value={{ book, setBook, setRoomSelect }}
                      key={idx}
                    >
                      <div className="d-flex ">
                        <Hotel {...hotel} key={id + 2} />
                      </div>
                    </context.Provider>
                  );
                })}{" "}
              </div>
            )}
            {roomSelect && (
              <div className="shadow mt-4 " style={{ width: "300px" }}>
                <img src={book.roomImg} alt="" style={{ width: "300px" }} />
                <p>{book.roomBody} </p>
                <p className="fw-bold">{book.roomPrice} birr</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setRoomSelect(false)}
                >
                  Choose Another
                </button>
              </div>
            )}
          </div>
          <button type="submit" className="mt-4 btn btn-secondary">
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Book;
