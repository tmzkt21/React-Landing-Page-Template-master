import React from "react";
import { Link } from 'react-router-dom'

export const Navigation = () => {

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">

              <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>

              <a className="navbar-brand page-scroll" href="/">
                home

              </a>{" "}

              <a className="navbar-brand page-scroll" href="AboutDetail">
                ABOUT   </a>{" "}

              <a className="navbar-brand page-scroll" href="Breads">
                LIST   </a>{" "}

              <a className="navbar-brand page-scroll" href="Pages">
                LIST   </a>{" "}

              <a className="navbar-brand page-scroll" href="Search">
                search  </a>{" "}

              <a className="navbar-brand page-scroll" href="ContactDetail">
                contact  </a>{" "}
            </div>

            <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">

                <li>
                  <a href="Signin" className="page-scroll">
                    login
                  </a>
                </li>
                <li>
                  <a href="LoginForm" className="page-scroll">
                    loginform
                  </a>
                </li>
                <li>
                  <a href="Signup" className="page-scroll">
                    join
                  </a>
                </li>
                <li>
                  <a href="Order" className="page-scroll">
                    order
                  </a>
                </li>
                <li>
                  <a href="MyPage" className="page-scroll">
                    mypage
                  </a>
                </li>
                <li>
                  <a href="dashboard" className="page-scroll">
                    관리자
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Navigation;