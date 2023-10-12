import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch, FaStar, FiMapPin } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
const url = "  http://localhost:3001/data";

const Packages = () => {
  const [datas, setDatas] = useState([]);
  const [dropDown, setDropDown] = useState({});
  const [noResult, setNoResult] = useState(false);
  const [page, setPage] = useState(1);
  const { data } = useFetch(`https://dankil.onrender.com/api/package?page=${page}`, page)
  useEffect(() => {
    if (data && page === 1) {
      setDatas([...data]
      );
    }
    else if (data) {
      setDatas((prev) => {
        return [...prev, ...data];
      });
    }
  }, [data])

  const handleChange = (e) => {
    setDropDown({ ...dropDown, [e.target.name]: e.target.value });
  };

  const handeLoadMore = () => {
    setPage((prev) => {
      return prev + 1;
    });
  }


  const Find = async () => {
    let type;
    let price;
    let rate;
    if (dropDown.type === "any" || !dropDown.type) {
      type = false;
    } else {
      type = dropDown.type;
    }
    if (dropDown.price === "any" || !dropDown.price) {
      price = false;
    } else {
      price = dropDown.price;
    }
    if (dropDown.rate === "any" || !dropDown.rate) {
      rate = false;
    } else {
      rate = dropDown.rate;
    }

    const response = await fetch(
      `https://dankil.onrender.com/api/package?${type && `type=${type}`}&${price && `priceRange=${price}`
      }&${rate && `rating=${rate}`}`
    );
    const result = await response.json();
    if (result.data.length === 0) {

      setNoResult(true);
    }
    if (response.ok) {
      setDatas(result.data);
    }
  };





  return (
    <section style={{ background: "#f2f5f9" }}>

      <div className="container-md ">
        <div className="row justify-content-around ">
          <article className="bg-dark shadow me-2 border h-100 col-12 col-md-3 d-flex flex-column justify-content-start  mt-5">
            <div className="d-flex justify-content-between align-items-center p-3 ">
              <h1 className="fs-5 ms-auto me-auto fw-bold text-white" style={{ fontSize: "20px" }}>Filter By </h1>
              <button className="btn btn-outline-info rounded-2 text-white">Reset Filters</button>
            </div>

            <div className="text-center mt-3">
              <h5 className="text-white">TYPE</h5>
              <select className="form-select text-center" name="type" onChange={(e) => handleChange(e)}>
                <option value="any">Any type</option>
                <option value="Group">Group</option>
                <option value="Park">Park</option>
                <option value="City">City</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>

            <div className="mt-3">
              <h5 className="text-white">PRICE</h5>
              <select className="form-select text-center" name="price" onChange={(e) => handleChange(e)}>
                <option value="any">Any price</option>
                <option value="less5000">under 5000</option>
                <option value="5000-10000">5000 - 10000</option>
                <option value="10000-15000">10000 - 15000</option>
                <option value="morethan15000">Above 15000</option>
              </select>
            </div>

            <div className="mt-3">
              <h5 className="text-white">RATE</h5>
              <select className="form-select text-center" name="rate" onChange={(e) => handleChange(e)} style={{}} >
                <option className="muted text-dark bg-secondary" value="any">Any star</option>
                <option className="text-danger" value={5}>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                <option className="text-danger" value={4}>&#9733;&#9733;&#9733;&#9733;&#9734;</option>
                <option className="text-danger" value={3}>&#9733;&#9733;&#9733;&#9734;&#9734;</option>
                <option className="text-danger" value={2}>&#9733;&#9733;&#9734;&#9734;&#9734;</option>
                <option className="text-danger" value={1}>&#9733;&#9734;&#9734;&#9734;&#9734;</option>
              </select>
            </div>

            <div className="mt-3">
              <button className="btn btn-secondary fs-5 px-5" type="submit" onClick={() => Find()}> Find </button>
            </div>
            <hr />

          </article>

          <article className="h-100 col-12 col-md-8 my-5 ">
            {!datas.length && <h1>No Result was found</h1>}
            {datas.length &&
              datas.map((_package) => {
                const { _id, name, image, pricePerAdult, rating, location } =
                  _package;

                const stars = Array(Math.round(rating)).fill(0)

                return (
                  <article className="bg-white h-100 row m-0 align-items-center shadow mb-3 border" key={_id}>
                    <img className="img-fluid col col-md-4 p-0 m-0" src={image[0]} alt="" />
                    <div className="col col-md-8 ">

                      <h3 className="fs-5 text-uppercase fw-bold">{name} </h3>
                      <h5 className="d-inline h4 fw-light"> _ {location} _ </h5>
                      <h5 className="h5">price from {pricePerAdult} birr</h5>
                      <div>
                        {stars && stars.map((_, index) => {
                          return <FaStar key={index} />;
                        })}
                      </div>
                      <Link className="text-decoration-none text-primary" to={`/package/${_package._id}`}>See Detail</Link>
                    </div>
                    <hr className="text-light shadow-lg shadow-light" />
                  </article>
                );
              })}
            <button className="btn btn-outline-primary rounded-5 my-2" onClick={handeLoadMore}>Show More</button>
          </article>
        </div>
      </div >
    </section>
  );
};

export default Packages;
