import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* 
<!-- Topbar Start --> */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <h5
            className="font-weight-semi-bold"
            style={{ marginLeft: "130px", marginTop: "5px" }}
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
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>

      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid bg-dark mb-30">
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
          <div className="col-lg-9 col-sm-12">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              {/* <!--/.Navbar--> */}
              {/* <div className="header"></div> */}
              {/* <i class="fas fa-plus" data-toggle="modal" data-target="#myModal"></i> */}
              <div className="wrapper1">
                <input type="checkbox" id="btn" hidden />
                <label for="btn" className="menu-btn">
                  <i className="fas fa-bars"></i>
                  <i className="fas fa-times"></i>
                </label>
                <nav id="sidebar">
                  <div className="title">Side Menu</div>
                  <ul className="list-items">
                  
                    <li>
                      <NavLink to="/">
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
                  </ul>
                </nav>
              </div>

              <div
                style={{
                  width: "100px",
                  marginLeft: "60px",
                  fontSize: "27px",
                  color: "#fff9",
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
                style={{ marginLeft: "30%", marginTop: "-46px" }}
              >
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Al
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  BuraQ
                </span>
              </NavLink>
              <NavLink to="/userlogin">
              <div
                className=""
                style={{
                  marginTop: "-42px",
                  marginRight: "50px",
                  fontSize: "25px",
                  color: "#fff9",
                }}
              >
                
                <i class="fa fa-user"></i>
                
              </div>
              </NavLink>
              <div
                className=""
                style={{
                  marginTop: "-42px",
                  marginLeft: "92%",
                  fontSize: "25px",
                  color: "#fff9",
                }}
              >
                <NavLink to="/cart">
                <i className="fas fa-shopping-cart" style={{
                  color: "#fff9",
                }}></i>
                </NavLink>
              </div>
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
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
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
    </>
  );
};
export default Header;
