import React from "react";
import logo from "../../assets/lo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="row align-items-center"
      style={{ backgroundColor: "#202020", margin: "0", padding: "0" }}
    >
      <div className="col-12 col-md-8 row align-content-center">
        <img src={logo} className="img-fluid col-12 col-md-4 mt-3" alt="" />

        <div className="text-light col-12 col-md-8 mt-5">
          <div>
            Ethiopia is a unique and a capitivating destination for travlers.
            offering a diverse range of experiences and cultural attraction.{" "}
          </div>
          <div>
            <span className="text-warning">Discover</span> all that this amazing
            country has to offer!
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 row align-content-center justify-content-center">
        <div className="site-map col-12 col-md-6 text-center">
          <h3 className="text-light">SITE MAP</h3>

          <div>
            <Link className="text-light" to={`/`}>
              Home
            </Link>
          </div>
          <div>
            <Link className="text-light" to={`/about`}>
              About Us
            </Link>
          </div>
          <div>
            <Link className="text-light" to={`/contact`}>
              Contact Us
            </Link>
          </div>
          <div>
            <Link className="text-light" to={`/package`}>
              Packages
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <h3 className="text-light">SUBSCRIBE</h3>
          <div>
            <Link className="text-light" to={`/register`}>
              Sign up
            </Link>
          </div>
          <div>
            <Link className="text-light" to={`/login`}>
              login
            </Link>
          </div>
        </div>
      </div>

      <p className="text-light ">&copy; 2023 copyright reserved Tour Et</p>
    </div>
  );
};

export default Footer;
