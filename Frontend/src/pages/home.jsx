import React from "react";
import { useState, useEffect } from "react";
import { FaSearch, FiMapPin } from "react-icons/fa";
// import Banner from "../Component/static/banner";
// import Swipper from "../Component/static/Swipper";
import Swipper from "../Component/static/Swipper";
import Banner from "../Component/static/banner"
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
const url = "http://localhost:8000/data";

const Home = () => {
  const banner1Info = {
    buttonText: "Explore more",
    path: "/",
    title: "More about ethiopia",
    img: "https://cdn.bunniktours.com.au/public/posts/images/Africa/Lalibela%201%20%284%29-feature.JPG",
    text: "Ethiopia is home to the lowest place on the African continent, the Danakil Depression.The depression is at the junction of three tectonic plates in the Horn of Africa, and sits at approximately 125 metres below sea level. At 200 kilometres long by 50 metres wide, this relatively small desert is also home to roughly 25% of Africa’s volcanoes!",
  };
  const { data: recentpkg } = useFetch("https://dankil.onrender.com/api/package?limit=6")
  const { data: popularPkg } = useFetch("https://dankil.onrender.com/api/package?sort=-rating&limit=6")
  const [s_name, setName] = useState("");
  const [cityList, setCityList] = useState([]);
  const { data } = useFetch(`https://dankil.onrender.com/api/package?location=${s_name}&limit=5`, s_name)

  const filterData = async () => {
    if (s_name) {
      if (data > 0) {
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
          <div class="search-bar input-group mx-auto mb-3" style={{ height: "60px" }}>
            <input type="search" className="ps-5 form-control searchInput me-auto  ms-auto mt-0 border-dark rounded-start-5" placeholder="where to" value={s_name} onChange={(e) => setName(e.target.value)} id="search" />
            <span class="input-group-text border-dark rounded-end-5 h-100 searchicon" id="basic-addon2">
              <label className="bg-none ps-2" htmlFor="search" id="icon">
                <FaSearch />
              </label>
            </span>
          </div>

          <div className="container bg-light w-50 ">
            {cityList.length > 0 &&
              cityList.map((city, index) => {
                console.log(city)
                return (
                  <Link className="text-decoration-none" to={`/package/${city._id}`}>
                    <div className="city-list ms-auto me-auto text-dark" key={index}>
                      {city.location} : {!city.id && <p className="d-inline text-decoration-none">{city.name}</p>}
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
      <h2
        id="visit"
        className="container text-center fs-2 text-uppercase fw-semibold mt-5"
      >
        Top Rated Packages
      </h2>
      <div className="site">
        {<Swipper data={popularPkg} />}

      </div>


      <Banner {...banner1Info} />

      <div className="explore pb-5 ">
        <h2
          id="visit"
          className="container text-center fs-2 text-uppercase fw-semibold my-4" >
          MORE TO EXPLORE
        </h2>
        <div className="site container">
          <div className=" row justify-content-evenly">
            <div className="col-12 col-md-4 text-center">
              <figure className="card">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.unsplash.com/flagged/photo-1572644973628-e9be84915d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFsaWJlbGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Image"

                />
                <figcaption className=" mt-3 card-body">
                  <span class="text-secondary me-3 fs-3 card-title d-block">
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
                  alt="Image"
                />
                <figcaption className="mt-3 card-body">
                  <span class="text-secondary me-3 fs-3 card-title d-block">Rift valley</span>
                  <span className="descs">
                    The Ethiopian Rift Valley is a section of the larger East
                    Valley that runs through Ethiopia, and is a
                    wonder with a diverse people and cultural attractions. Lake
                    Langano is renowned for their birdlife and offer
                    opportunities for boat trips and water sports.
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-4 text-center">
              <figure className="card">
                <img
                  className="card-img-top img-fluid"
                  src="data:image/jpeg;base64,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"
                  alt="Image"
                />
                <figcaption className="mt-3 card-body">
                  <span class="text-secondary me-3 fs-3 card-title d-block">Axum</span>
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
