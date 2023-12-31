import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Swipper from "../Component/static/Swipper";
import Banner from "../Component/static/banner";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const banner2Info = {
    left: false,
    buttonText: "Explore more",
    path: "/",
    title: "More about ethiopia",
    img: "https://destinationreporterindia.com/wp-content/uploads/2019/04/DR-WEB-Ethiopia.jpg",
    text: "Ethiopia is home to the lowest place on the African continent, the Danakil Depression.The depression is at the junction of three tectonic plates in the Horn of Africa, and sits at approximately 125 metres below sea level. At 200 kilometres long by 50 metres wide, this relatively small desert is also home to roughly 25% of Africa’s volcanoes!",
  };
  const banner1Info = {
    left: true,
    buttonText: "Explore more",
    path: "/",
    title: "Visit Ethiopia Now",
    img: "https://www.begatoursethiopia.com/images/collage.jpg",
    text: "Ethiopia is home to the lowest place on the African continent, the Danakil Depression.The depression is at the junction of three tectonic plates in the Horn of Africa, and sits at approximately 125 metres below sea level. At 200 kilometres long by 50 metres wide, this relatively small desert is also home to roughly 25% of Africa’s volcanoes!",
  };
  const { data: recentpkg } = useFetch(
    "https://tour-et.onrender.com/api/package"
  );
  const { data: popularPkg } = useFetch(
    "https://tour-et.onrender.com/api/package?sort=rating"
  );

  const [s_name, setName] = useState("");
  const [cityList, setCityList] = useState([]);
  const { data } = useFetch(
    `https://tour-et.onrender.com/api/package?location=${s_name}`,
    s_name
  );

  const filterData = async () => {
    if (s_name) {
      if (data.length > 0) {
        setCityList(data);
      } else {
        setCityList([{ name: "No City Package Was Found" }]);
      }
    } else {
      setCityList([]);
    }
  };
  useEffect(() => {
    filterData();
  }, [data]);

  return (
    <div className="" style={{ background: "#f2f5f9" }}>
      <div className="search position-relative ms-auto me-auto">
        <div className="position-absolute w-100 top-50 start-50 translate-middle">
          <div
            className="search-bar input-group mx-auto mb-3"
            style={{ height: "60px" }}
          >
            <input
              type="search"
              className="ps-5 form-control searchInput me-auto  ms-auto mt-0 border-dark rounded-start-5"
              placeholder="where to"
              value={s_name}
              onChange={(e) => setName(e.target.value)}
              id="search"
            />
            <span
              className="input-group-text border-dark rounded-end-5 h-100 searchicon"
              id="basic-addon2"
            >
              <label className="bg-none ps-2" htmlFor="search" id="icon">
                <FaSearch />
              </label>
            </span>
          </div>

          <div className="container bg-light w-50 ">
            {cityList.length > 0 &&
              cityList.map((city, index) => {
                return (
                  <Link
                    className="text-decoration-none"
                    to={`/package/${city._id}`}
                  >
                    <div
                      className="city-list ms-auto me-auto text-dark"
                      key={index}
                    >
                      {city.location} :
                      {!city.id && (
                        <p className="d-inline text-decoration-none">
                          {city.name}
                        </p>
                      )}
                    </div>
                    <hr />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <h2
        id="visit"
        className="container text-center fs-2 text-uppercase fw-semibold mt-5"
      >
        Recent packages
      </h2>
      <div className="site container-fluid ps-1 mb-5">
        <Swipper data={recentpkg} />
      </div>
      <Banner {...banner2Info} />
      <h2
        id="visit"
        className="container text-center fs-2 text-uppercase fw-semibold mt-5"
      >
        Top Rated Packages
      </h2>
      <div className="site">{<Swipper data={popularPkg} />}</div>

      <Banner {...banner1Info} />

      <div className="explore pb-5 ">
        <h2
          id="visit"
          className="container text-center fs-2 text-uppercase fw-semibold my-4"
        >
          MORE TO EXPLORE
        </h2>
        <div className="site container">
          <div className=" row justify-content-evenly">
            <div className="col-12 col-md-4 text-center">
              <figure className="card">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.unsplash.com/flagged/photo-1572644973628-e9be84915d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFsaWJlbGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="img"
                />
                <figcaption className=" mt-3 card-body">
                  <span className="text-secondary me-3 fs-3 card-title d-block">
                    Rock Lalibela
                  </span>
                  <span className="card-text">
                    Lalibela is a UNESCO World Heritage site located in the
                    northern region of Ethiopia, known for its exceptional
                    rock-cut churches carved out of solid basaltic rock. The
                    complex consists of 11 monolithic structures that are still
                    used for religious purposes today.
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-4 text-center">
              <figure className="card">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.unsplash.com/photo-1580320209809-a0c51e645872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFsaWJlbGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="img"
                />
                <figcaption className="mt-3 card-body">
                  <span className="text-secondary me-3 fs-3 card-title d-block">
                    Rift valley
                  </span>
                  <span className="descs">
                    The Ethiopian Rift Valley is a section of the larger East
                    Valley that runs through Ethiopia, and is a wonder with a
                    diverse people and cultural attractions. Lake Langano is
                    renowned for their birdlife and offer opportunities for boat
                    trips and water sports.
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-4 text-center">
              <figure className="card">
                <img
                  className="card-img-top img-fluid"
                  src="https://www.nomadicethiopia.com/wp-content/uploads/2021/04/axum-by-nomadic-ethiopia-tour.jpg"
                  alt="img"
                />
                <figcaption className="mt-3 card-body">
                  <span className="text-secondary me-3 fs-3 card-title d-block">
                    Axum
                  </span>
                  <span className="">
                    One of the most notable features of Axum is its remarkable
                    stelae. These stelae are a testament to the engineering and
                    artistic skill of the Aksumites and are considered one of
                    the greatest archaeological wonders of Africa. Visit axum,
                    the cradle of life.
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
