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
  const { data: site } = useFetch(`https://dankil.onrender.com/api/package/${id}`)
  const [itemAdded, setItemAdded] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const { user } = useAuthContext();

  const addToCart = async (item) => {
    setItemAdded(true);

    if (!user) {
      return;
    }
    const response = await fetch(
      `https://dankil.onrender.com/api/wishlist
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
    const va = state.find((idx) => idx.packages == id);
    va ? setItemAdded(true) : setItemAdded(false);
  };
  useEffect(() => {
    findId();
  }, []);

  if (!site) {
    return;
  }
  console.log(site)
  const stars = Array(Math.round(site?.rating)).fill(0);
  const description = site?.description[0];

  return (
    <section className="bg-light">
      <div class="container-md">
        <div class=" row m-0 mt-2">
          <div
            id="carouselExampleControls"
            class="col-12 col-md-6 carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {site.image.map((im, index) => {
                if (index == 0) {
                  return (
                    <div class="image carousel-item active">
                      <img
                        src={im}
                        alt="Package Image"
                        className="d-block img-fluid w-100"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div class="image carousel-item ">
                      <img
                        src={im}
                        alt="Package Image"
                        className="d-block img-fluid w-100"
                      />
                    </div>
                  );
                }
              })}
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="pkg-detail col-12 col-md-6 ">
            <h1 className="display-5 fw-bold d-inline">{site.name}</h1>
            <h6 className="text-muted">/{site.location}</h6>
            {<p className="text-start py-2 ">{description.main[0]}</p>}
            <div className="text-start">
              {stars.map((_, index) => {
                return <FaStar key={index} />;
              })}{" "}
            </div>
            <h4 className="lead fs-4 rounded-pill py-4 text-start">
              {site.pricePerAdult}.00 Birr Per adult
            </h4>
            <div className="d-flex justify-content-start gap-2">
              {!itemAdded && (
                <button
                  className="btn btn-primary btn-md"
                  onClick={() => {
                    addToCart({
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
            <p className="text-start fs-5 py-2">
              Type of activity{" "}
              <span className="text-muted"> {site.to_do_type}</span>{" "}
            </p>
          </div>
        </div>

        <hr />
        <div className="row align-items-center">
          <div className="map col-12 col-md-6 d-flex align-self-start mx-auto">
            <iframe
              src={site.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="p-0 m-auto mt-2 rounded border border-light"
              style={{ height: "400px", width: "400px" }}
            ></iframe>
          </div>

          <div
            class="col-12 col-md-6 accordion accordion-flush text-start align-self-start mt-4"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {description.included.map((info, index) => {
                    return (
                      <p key={index}>
                        <GiSupersonicBullet /> {info}{" "}
                      </p>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {description.expect.map((ex) => {
                    return (
                      <>
                        {ex.map((e) => {
                          return <p>{e} </p>;
                        })}{" "}
                        <hr />{" "}
                      </>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">{description.policy[0]} </div>
              </div>
            </div>
          </div>
        </div>
        {user && (
          <div className="what">
            <Link
              to={`/review/${site._id}`}
              className="btn btn-outline-secondary "
            >
              {" "}
              Write a review
            </Link>
            <Review unique={site._id} />
          </div>
        )}
      </div>
    </section>
  );
}

export default PackageDetail;
