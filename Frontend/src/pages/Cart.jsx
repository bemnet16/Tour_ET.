import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContex";

import { useAuthContext } from "../customHook/useAuthContext";
function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { user } = useAuthContext();
  const removeFromcart = async (item) => {
    dispatch({ type: "REMOVE", item });
    const response = await fetch(
      `https://tour-et.onrender.com/api/wishlist/${item._id}
      `,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  let total = 0;
  state.forEach((item) => {
    total += item.price;
  });
  const showItems = state.map((item) => {
    return (
      <div
        className="  row shadow p-3 bg-light align-items-center my-2"
        key={item._id}
      >
        <div className="col-md-2">
          <img src={item.photo} alt="" className="img-fluid" />
        </div>
        <div className="body col-md-4">
          <p className="item-name fs-5 fw-bold ">{item.name}</p>
          <h5 className="item-price">Total ETB: {item.price} birr</h5>
        </div>
        <div className="btns col-md-4">
          <button
            className="m-3 btn btn-outline-primary"
            onClick={() => {
              removeFromcart(item);
            }}
          >
            remove
          </button>
          <Link
            className="btn btn-outline-primary"
            to={`/book/${item.packages}`}
            key={item.packages}
          >
            Book
          </Link>
        </div>
      </div>
    );
  });
  if (state.length == 0) {
    return (
      <div
        style={{ height: "500px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <h1 className="fw-bold">No packages was added to wishlist </h1>
      </div>
    );
  }
  return (
    <section style={{ background: "#f2f5f9", minHeight: "85vh" }}>
      <div className="container-md  pt-5">
        <div className="row gap-3 align-items-start ">
          <div className="cart col-8">{showItems}</div>
          <div className="col-md-3 card shadow p-3 bg-dark">
            <h3 className="h4 text-start text-white fw-bold">
              Review Order Details
            </h3>
            <h5 className="text-start text-white">Total: {total} </h5>
            <h5 className="text-start text-white">count: {state.length} </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
