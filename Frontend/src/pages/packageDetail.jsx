import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSupersonicBullet } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Review from "../Component/Review";
import { useAuthContext } from "../customHook/useAuthContext";
import { CartContext } from "../context/cartContex";
import useFetch from "../customHook/useFetch";

function PackageDetail() {
  const { id } = useParams();
  const { data: site } = useFetch(
    `https://tour-et.onrender.com/api/package/${id}`
  );
  const [itemAdded, setItemAdded] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const { user } = useAuthContext();

  const addToCart = async (item) => {
    setItemAdded(true);

    if (!user) {
      return;
    }

    const response = await fetch(
      `https://tour-et.onrender.com/api/wishlist
      `,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const result = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD", item: result.data });
    }
  };

  const findId = () => {
    const va = state.find((idx) => idx.packages === id);
    va ? setItemAdded(true) : setItemAdded(false);
  };
  useEffect(() => {
    findId();
  }, []);

  if (!site) {
    return;
  }
  const stars = Array(Math.round(site?.rating)).fill(0);
  const description = site?.description[0];

  return (
    <section className="bg-light">
      <div className="container-md">
        <div className=" row m-0 mt-2">
          <div
            id="carouselExampleControls"
            className="col-12 col-md-6 carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {site.image.map((im, index) => {
                if (index === 0) {
                  return (
                    <div className="image carousel-item active" key={index}>
                      <img
                        src={im}
                        alt="Package img"
                        className="d-block img-fluid w-100"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="image carousel-item" key={index}>
                      <img
                        src={im}
                        alt="Package img"
                        className="d-block img-fluid w-100"
                      />
                    </div>
                  );
                }
              })}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="pkg-detail col-12 col-md-6 ">
            <h1 className="display-5 fw-bold d-inline">{site.name}</h1>
            <h6 className="text-muted">/{site.location}</h6>
            {<p className="text-start py-2 ">{description.main[0]}</p>}
            <div className="text-start">
              {stars.map((_, index) => {
                return <FaStar key={index} />;
              })}
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="lead fs-4 rounded-pill py-4 text-start">
                {site.pricePerAdult}.00 Birr Per adult
              </h4>
              <div
                style={{ height: "50px" }}
                className="d-flex justify-content-end gap-2"
              >
                {!itemAdded && (
                  <button
                    className="btn btn-primary btn-md"
                    onClick={() => {
                      addToCart({
                        user: user.detail._id,
                        packages: site._id,
                        name: site.name,
                        price: site.pricePerAdult,
                        photo: site.image[0],
                      });
                    }}
                  >
                    <AiOutlineShoppingCart /> Add to Cart
                  </button>
                )}
                {itemAdded && (
                  <button className="btn btn-primary btn-md">Added</button>
                )}
                <button className="btn btn-info btn-lg ">
                  <Link
                    className="text-decoration-none text-light"
                    to={`/book/${site._id}`}
                  >
                    <BsCheck2Square /> Book
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="row align-items-center">
          <div className="map col-12 col-md-6 d-flex align-self-start mx-auto">
            <iframe
              src={site.map}
              title="site"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="p-0 m-auto mt-2 rounded border border-light"
              style={{ height: "400px", width: "400px" }}
            ></iframe>
          </div>

          <div
            className="col-12 col-md-6 accordion accordion-flush text-start align-self-start mt-4"
            id="accordionFlushExample"
          >
            <h2 className="text-start fs-5 py-2">
              Type of activity{" "}
              <span className="text-muted"> {site.to_do_type}</span>{" "}
            </h2>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What's included
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {description.included.map((info, index) => {
                    return (
                      <p key={index}>
                        <GiSupersonicBullet /> {info}
                      </p>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What's not included
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {description.notIncluded.map((info, index) => {
                    return (
                      <p key={index}>
                        <GiSupersonicBullet /> {info}{" "}
                      </p>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What to expect
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {description.expect.map((ex) => {
                    return (
                      <>
                        {ex.map((e, idx) => {
                          return <p key={idx}>{e} </p>;
                        })}
                        <hr />
                      </>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Additional information
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {description.additionalInfo.map((info, index) => {
                    return (
                      <p key={index}>
                        <GiSupersonicBullet /> {info}{" "}
                      </p>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Cancellation policy
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{description.policy[0]} </div>
              </div>
            </div>
          </div>
        </div>
        {user && (
          <div className="what pt-5  ">
            <div className="text-center w-50">
              <Link
                to={`/review/${site._id}`}
                className="btn btn-outline-secondary "
              >
                Write a review
              </Link>
            </div>
            <Review unique={site._id} />
          </div>
        )}
      </div>
    </section>
  );
}

export default PackageDetail;
