import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../../customHook/useAuthContext";

const Register = () => {
  const history = useHistory();
  const { dispatch } = useAuthContext();

  const [fullInfo, setFullInfo] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullInfo({ ...fullInfo, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://tour-et.onrender.com/api/user/signup",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullInfo),
      }
    );

    const result = await response.json();
    if (!fullInfo) {
      setError("enter full credential");
    }
    if (!response.ok) {
      setError(result.msg);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(result.data));
      dispatch({ type: "LOGIN", user: result.data });
      history.push("/");
    }
  };

  return (
    <section style={{ background: "#c7e1ec" }}>
      <div
        className="container-md d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="row align-items-center justify-content-center p-5"
          style={{ flex: "1" }}
        >
          <div
            className=" col-md-6 p-5  shadow"
            style={{ borderRadius: "50px", background: "#ecf5f8" }}
          >
            <div className="title">{error && <p>{error}</p>}</div>
            <div className="form text-start">
              <form onSubmit={handelSubmit}>
                <div className="user mb-3">
                  <label htmlFor="user" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="enter your name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="email mb-3">
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="enter your name"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="pass mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-secondary w-50 mb-5">
                    Register
                  </button>
                  <p>
                    Have an account?{" "}
                    <Link to={`/login`} className="mb-3">
                      Sing in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6">
            <img
              src="https://th.bing.com/th/id/R.3c2473019a11b804e25c80baa314a225?rik=O0%2bJgGBVjU7Kmw&pid=ImgRaw&r=0"
              width={"75%"}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
