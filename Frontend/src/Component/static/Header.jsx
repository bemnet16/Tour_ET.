import React, { useContext } from "react";
import logo from "../../assets/lo.png";
import { Link, useHistory } from "react-router-dom";
import { FaLuggageCart } from "react-icons/fa";
import { Nav, Navbar, Container } from "react-bootstrap";
import { CartContext } from "../../context/cartContex";
import { useAuthContext } from "../../customHook/useAuthContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { state, dispatch: dis2 } = useContext(CartContext);
  const { user, dispatch: dis1 } = useAuthContext();
  const handleLogout = () => {
    dis1({ type: "LOGOUT" });
    localStorage.removeItem("user");
    history.push("/");
    dis2({ type: "SET", item: [] });
  };

  const activeNav =
    pathname === "/"
      ? "home"
      : pathname === "/Ethiopia"
      ? "ethiopia"
      : pathname === "/about"
      ? "about"
      : pathname === "/contact"
      ? "contact"
      : "package";

  const handleCart = () => {
    if (user) {
      history.push("/cart");
    } else {
      history.push("/register");
    }
  };

  return (
    <Navbar className="bg-dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="logo img"
            className="logo img-fluid mx-2"
            style={{ height: "50px", borderRadius: "50%" }}
          />
          <span className="bg-none text-warning text-uppercase fs-3">
            Tour ET.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto gap-2">
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color: activeNav === "home" ? "orange" : "rgb(244,244,244)",
                  borderBottom: activeNav === "home" ? "1px solid orange" : "",
                }}
                to="/"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color:
                    activeNav === "package" ? "orange" : "rgb(244,244,244)",
                  borderBottom:
                    activeNav === "package" ? "1px solid orange" : "",
                }}
                to="/package"
              >
                Package
              </Link>
            </div>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color:
                    activeNav === "contact" ? "orange" : "rgb(244,244,244)",
                  borderBottom:
                    activeNav === "contact" ? "1px solid orange" : "",
                }}
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color:
                    activeNav === "ethiopia" ? "orange" : "rgb(244,244,244)",
                  borderBottom:
                    activeNav === "ethiopia" ? "1px solid orange" : "",
                }}
                to="/Ethiopia"
              >
                Ethiopia
              </Link>
            </div>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color: activeNav === "about" ? "orange" : "rgb(244,244,244)",
                  borderBottom: activeNav === "about" ? "1px solid orange" : "",
                }}
                to="/about"
              >
                About Us
              </Link>
            </div>
          </Nav>
          <Nav className="bg-dark text-light gap-3">
            {!user && (
              <div className="cont d-flex">
                <div>
                  <Link
                    style={{ textDecoration: "none", marginLeft: "20px" }}
                    className="text-light text-light btn btn-outline-primary"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <Link
                    style={{ textDecoration: "none", marginLeft: "20px" }}
                    className="text-light text-light btn btn-outline-primary"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </Nav>
          {user && (
            <button
              type="button"
              className="btn btn-outline-primary position-relative ms-auto text-white"
              onClick={handleCart}
            >
              <FaLuggageCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                {state.length}
              </span>
            </button>
          )}
          <Nav className="bg-dark text-light gap-3">
            {user && (
              <div>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", marginLeft: "20px" }}
                  className="text-light text-light btn btn-outline-primary"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
