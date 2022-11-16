import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Services/UseAppType";

export const Header = () => {
  let [userToken, setUserToken] = useState<any>();
  let [adminToken, setAdminToken] = useState<any>();

  useEffect(() => {
    setUserToken(localStorage.getItem("userToken"));
    setAdminToken(localStorage.getItem("adminToken"));
  }, [userToken, adminToken]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link className="nav-link" to={"/"}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>

            {!userToken && !adminToken ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    LogIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin"}>
                    Admin
                  </Link>
                </li>
              </>
            ) : null}
            {userToken ? (
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
            ) : null}
            {adminToken ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/adminDashboard"}>
                    AdminDashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/adminSeePosts"}>
                    Admin See All Post
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};
