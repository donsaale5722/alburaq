import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { Sidebardata } from "./sidebardata";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 
<!-- Topbar Start --> */}
      <div className="container-fluid">
        <div
          className="row mobileno py-1 px-xl-5"
          style={{ backgroundColor: "#debe75" }}
        >
          <h5
            className="font-weight-semi-bold"
            style={{ marginLeft: "86px", marginTop: "5px" }}
          >
            <i className="fa fa-phone"></i>&nbsp;&nbsp;+91 9726468826
          </h5>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <NavLink to="" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Al
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                BuraQ
              </span>
            </NavLink>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0" style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Customer Service
            </p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>

      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid navbar1 bg-dark mb3">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <NavLink
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              to="#navbar-vertical"
              style={{ height: "65px", padding: " 0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2"></i>Categories
              </h6>
              <i className="fa fa-angle-down text-dark"></i>
            </NavLink>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "999" }}
            >
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown dropright">
                  <NavLink
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Dresses{" "}
                    <i className="fa fa-angle-right float-right mt-1"></i>
                  </NavLink>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <NavLink to="" className="dropdown-item">
                      Men's Dresses
                    </NavLink>
                    <NavLink to="" className="dropdown-item">
                      Women's Dresses
                    </NavLink>
                    <NavLink to="" className="dropdown-item">
                      Baby's Dresses
                    </NavLink>
                  </div>
                </div>
                <NavLink to="" className="nav-item nav-link">
                  Shirts
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Jeans
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Swimwear
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Sleepwear
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Sportswear
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Jumpsuits
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Blazers
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Jackets
                </NavLink>
                <NavLink to="" className="nav-item nav-link">
                  Shoes
                </NavLink>
              </div>
            </nav>
          </div>
          <div
            className="col-lg-9 col-sm-12 d-flex align-items-center"
            style={{ height: "54px" }}
          >
            <nav className="navbar navbar-expand-lg navbar  py-lg-0 px-0">
              {/* <!--/.Navbar--> */}
              {/* <div className="header"></div> */}
              {/* <i class="fas fa-plus" data-toggle="modal" data-target="#myModal"></i> */}
              {/* <div className="wrapper1">
                <input type="checkbox" id="btn" hidden />
                <label for="btn" className="menu-btn">
                  <i className="fas fa-bars"></i>
                  <i className="fas fa-times"></i>
                </label>
                <nav id="sidebar" >
                  <div className="title">Side Menu</div>
                  <ul className="list-items">
                    <li>
                      <NavLink to="/" >
                        <i class="fa fa-angle-right"></i>Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa fa-angle-right"></i>Luxury Colection
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa fa-angle-right"></i>Women
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa fa-angle-right"></i> Men
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa fa-angle-right"></i> UniSex
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/product">
                        <i class="fa fa-angle-right"></i>All Product
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/contact">
                        <i class="fa fa-angle-right"></i>Contact us
                      </NavLink>
                    </li>
                    {/* <div className="icons">
                      <NavLink to="#">
                        <i className="fab fa-facebook-f"></i>
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-twitter"></i>
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-github"></i>
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-youtube"></i>
                      </NavLink>
                    </div> */}
              {/* </ul>
                </nav>
              </div>
                */}

              <div className="navbar2">
                <NavLink to="#" className="menu-bars">
                  <FaIcons.FaBars
                    onClick={showSidebar}
                    style={{ color: "#debe75" }}
                  />
                </NavLink>
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <NavLink to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </NavLink>
                  </li>
                  {Sidebardata.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <NavLink to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* <NavLink
                  to=""
                  className="btn px-0 ml-3"
                  style={{
                    
                  }}
                >
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{}}
                  >
                    0
                  </span>
                </NavLink> */}
              {/* <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-2">
                  <NavLink to="/" className="nav-item nav-link active">
                    Home
                  </NavLink>
                  <NavLink to="/product" className="nav-item nav-link">
                    Product
                  </NavLink>
                  <NavLink to="detail.html" className="nav-item nav-link">
                    Shop Detail
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1"></i>
                    </NavLink>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <NavLink to="/cart" className="dropdown-item">
                        Shopping Cart
                      </NavLink>
                      <NavLink to="/checkout" className="dropdown-item">
                        Checkout
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact
                  </NavLink>
                </div>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <NavLink
                  to=""
                  className="btn px-0"
                  style={{
                    paddingBottom: "2px",
                    marginLeft: "5px",
                    border: "hidden",
                  }}
                >
                  <i className="fas fa-heart text-primary"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{
                      paddingBottom: "2px",
                      marginLeft: "5px",
                      border: "hidden",
                    }}
                  >
                    0
                  </span>
                </NavLink>
                <NavLink
                  to=""
                  className="btn px-0 ml-3"
                  style={{
                    paddingBottom: "2px",
                    marginLeft: "5px",
                    border: "hidden",
                  }}
                >
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{
                      paddingBottom: "2px",
                      marginLeft: "5px",
                      border: "hidden",
                    }}
                  >
                    0
                  </span>
                </NavLink>
              </div>
              {/* </div> */}
            </nav>
            <div
              className="searchbar"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{
                fontSize: "25px",
                color: "#4a4a4a",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <i
                class="fa fa-search"
                data-toggle="modal"
                data-target="#myModal"
              ></i>
            </div>

            <NavLink
              to="/"
              className="mobile text-decoration-none d-block d-lg-none"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <span
                className="h1 al text-uppercase px-1"
                style={{
                  color: "#debe75",
                  fontFamily: "rasa ",
                  fontSize: "35px",
                }}
              >
                Al
              </span>
              <span
                className="h1 burq text-uppercase px-1 ml-n1"
                style={{
                  color: "#debe75",
                  fontFamily: "rasa",
                  fontSize: "35px",
                }}
              >
                BuraQ
              </span>
            </NavLink>
            <NavLink
              to="/userlogin"
              style={{
                marginLeft: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                className="userlogin"
                style={{
                  marginLeft: "auto",
                  fontSize: "23px",
                  color: "#4a4a4a",
                }}
              >
                <i class="fa fa-user"></i>
              </div>
            </NavLink>
            <div
              className="shopingcart"
              style={{
                fontSize: "23px",
                color: "#4a4a4a",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <NavLink to="/cart">
                <i
                  className="fas fa-shopping-cart"
                  style={{
                    color: "#4a4a4a",
                  }}
                ></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
      {/* <!-- Modal --> */}
      {/* <div
        class="modal fade"
        id="myModal"
        tabindex="3"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog " role="document">
          
            <div class="modal-header">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </span>
            
          </div>
        </div>
      </div> */}
      <div class="collapse" id="collapseExample">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
        {/* <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div> */}
      </div>
    </>
  );
};
export default Header;
