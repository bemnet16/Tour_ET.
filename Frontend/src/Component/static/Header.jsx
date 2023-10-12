import React, { useContext } from "react";
// import logo from "../../../assets/logo.png";
import logo from "../../assets/logo.png"
import { Link, useHistory } from "react-router-dom";
import { FaLuggageCart } from 'react-icons/fa'
import { Nav, Navbar, Container } from "react-bootstrap";
import { CartContext } from "../../context/cartContex";
import { useAuthContext } from "../../customHook/useAuthContext";

const Header = () => {
  const history = useHistory()
  const { state, dispatch: dis2 } = useContext(CartContext);
  const { user, dispatch: dis1 } = useAuthContext()
  const handleLogout = () => {
    dis1({ type: "LOGOUT" })
    localStorage.removeItem("user")
    history.push("/")
    dis2({ type: "SET", item: [] })

  }
  const handleCart = () => {
    if (user) {
      history.push("/cart")
    }
    else {
      history.push("/register")
    }
  }


  return (
    <Navbar className="bg-dark" expand="lg">
      <Container >
        <Navbar.Brand href="#"><img src={logo} alt="picture" classNameName='logo img-fluid' style={{ height: "50px" }} /><span className="bg-none text-warning text-uppercase fs-3">Danakil Tours</span></Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto gap-2">
            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light" to="/">Home</Link></div>
            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light" to="/package">Package</Link></div>
            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light" to="/contact">Contact</Link></div>
            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light" to="/Ethiopia">Ethiopia</Link></div>
            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light" to="/about">About Us</Link></div>
          </Nav>
          <Nav className="bg-dark text-light gap-3">{!user &&
            <div className="cont d-flex">
              <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light text-light btn btn-outline-primary" to="/login">Login</Link></div>
              <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light text-light btn btn-outline-primary" to="/register">Register</Link></div>

            </div>}
          </Nav>
          <button type="button" class="btn btn-outline-primary position-relative ms-auto text-white" onClick={handleCart}>
            <FaLuggageCart />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
              {state.length}
            </span>
          </button>
          <Nav className="bg-dark text-light gap-3">{user &&

            <div> <Link style={{ textDecoration: "none", marginLeft: "20px" }} className="text-light text-light btn btn-outline-primary" onClick={handleLogout}>Logout</Link></div>
          }
          </Nav>

          {/* <div className="cart ms-auto">
            <span className='text-light'>{state.length}</span>
            <Link onClick={handleCart} className='cart_logo'><FaShoppingCart />Cart</Link>
          </div> */}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


