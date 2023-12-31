import React from "react";

// import "../../Home/Home.css"
// import {Link} from "react-router-dom"

const Banner = ({ title, text, path, buttonText, img, left }) => {
  if (left) {
    return (
      <>
        <div className="banner my-5 ">
          <div className="container mx-auto row">
            <div className="img col-12 col-md-6">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="desc col-12 col-md-6 align-self-center">
              <h3 className="m-3 h2 text-uppercase">{title}</h3>
              <p className="">{text}</p>
              <button className="btn btn-lg btn-outline-primary">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="banner my-5 ">
          <div className="container mx-auto row">
            <div className="desc col-12 col-md-6 align-self-center">
              <h3 className="m-3 h2 text-uppercase">{title}</h3>
              <p className="">{text}</p>
              <button className="btn btn-lg btn-outline-primary">
                {buttonText}
              </button>
            </div>
            <div className="img col-12 col-md-6">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Banner;
