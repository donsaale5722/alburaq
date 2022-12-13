import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid mb-1">
        <div className="row ">
          {/* <div className="col-lg-12" > */}

          <div
            id="header-carousel"
            className="carousel slide carousel-fade  mb-lg-0"
            data-ride="carousel"
            height="244px"
          >
            {/* <ol className="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#header-carousel" data-slide-to="1"></li>
              <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
              <div
                className="carousel-item position-relative active"
                
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="./img/banner3.jpeg"
                  alt="description"
                  
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3"
                    style={{ maxWidth: "700px", marginTop: "-200px" }}
                  >
                    {/* <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Men's Perfumes
                    </h1> */}
                    {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p> */}
                    {/* <NavLink
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      to="#"
                    >
                      Shop Now
                    </NavLink> */}
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{ height: "244px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="./img/"
                  alt="description"
                  
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3"
                    style={{ maxWidth: "700px", marginTop: "-200px" }}
                  >
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Women's Perfumes
                    </h1>
                    {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p> */}
                    <NavLink
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      to="#"
                    >
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{ height: "244px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="./img/carousel-3.jpg"
                  alt="description"
                  
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3"
                    style={{ maxWidth: "700px", marginTop: "-200px" }}
                  >
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Kids Fashion
                    </h1>
                    {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p> */}
                    <NavLink
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      to="#"
                    >
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="trend col-lg-12">
        <h2 className=" position-relative text-uppercase mb-1">
          <span
            className="bg-secondary trending pr-3"
            style={{
              marginLeft: "32%",
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Trending{" "}
          </span>
          <br></br>
          <span
            className="collect"
            style={{
              marginLeft: "29%",
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Collection
          </span>
        </h2>
        <div className="product-offer mb-30" style={{ height: "200px" }}>
          <img className="img-fluid" src="img/oud-mikhlaat.jfif" alt="" />
          <div className="offer-text"> */}
      {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
      {/* <NavLink to="" className="btn btn-primary">
              Shop Now
            </NavLink>
          </div>
        </div>
        <div className="product-offer2 mb-30" style={{ height: "200px" }}>
          <img className="img-fluid" src="img/al-barid.jfif" alt="" />
          <div className="offer-text">
            {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
      {/*<NavLink to="" className="btn btn-primary">
              Shop Now
            </NavLink>
          </div>
        </div>
      </div> */}
      <div class="container-fluid mobilesize mt-3">
        <h2 className=" position-relative text-uppercase text-sm-center mb-1">
          <span
            className="bg-secondary trending pr-3"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Trending
          </span>
          <br></br>
          <span
            className="collect"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Collection
          </span>
        </h2>
        <div class="row">
          <div
            class="col-lg-3 col-6"
            style={{ paddingLeft: "5px", paddingRight: "5px", height: "200px" }}
          >
            <div
              className="product-offer1 mb-20"
              style={{
                height: "200px",
              }}
            >
              <img className="img-fluid" src="img/trending1.jpeg" alt="" />
              {/* <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> 
                <div>
                  <NavLink to="" className="btn btn-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
          <div
            class="col-lg-3 col-6"
            style={{ paddingLeft: "5px", paddingRight: "5px", height: "200px" }}
          >
            <div
              className="product-offer1 mb-20"
              style={{
                height: "200px",
              }}
            >
              <img className="img-fluid" src="img/trending2.jpeg" alt="" />
              {/* <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> 
                <div>
                  <NavLink to="" className="btn btn-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
          <div
            class="col-lg-3 col-6 mobile-trending d-sm-none d-xs-none"
            style={{ paddingLeft: "5px", paddingRight: "5px", height: "200px" }}
          >
            <div
              className="product-offer1 mb-20"
              style={{
                height: "200px",
              }}
            >
              <img className="img-fluid" src="img/oud-mikhlaat.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <div>
                  <NavLink to="" className="btn btn-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-6 mobile-trending d-sm-none"
            style={{ paddingLeft: "5px", paddingRight: "5px", height: "200px" }}
          >
            <div
              className="product-offer1 mb-30"
              style={{
                height: "200px",
              }}
            >
              <img className="img-fluid" src="img/al-barid.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Featured Start --> */}
      {/* <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div> */}
      {/* <!-- Featured End --> */}

      {/* <!-- Categories Start --> */}
      <div className="container-fluid mt-3">
        <h2 className=" position-relative text-uppercase mx-xl-5 mb-1">
          <span
            className="bg-secondary fragrance pr-3"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Fragrance
          </span>
          <br></br>
          <span
            className="bg-secondary categories pr-3"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Categories
          </span>
        </h2>
        <div className="row px-xl-5 pb-1">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <NavLink className="text-decoration-none" to="">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="img/" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>ATTAR</h6>
                  <small className="text-body">9 Products</small>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <NavLink className="text-decoration-none" to="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="img/" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>PERFUMES</h6>
                  <small className="text-body">0 Products</small>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <NavLink className="text-decoration-none" to="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="img/" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>BAKHOOR</h6>
                  <small className="text-body">0 Products</small>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <NavLink className="text-decoration-none" to="">
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="img/" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>OUD</h6>
                  <small className="text-body">0 Products</small>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <!-- Categories End --> */}

      {/* <!-- Products Start -->
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/al-barid.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/black-xs.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/deer-musk.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/khafeef.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/musk-e-taskeen.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/oud-al-madinah.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/oud-mikhlaat.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/tathir.jfif" alt=""/>
                        <div className="product-action">
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></NavLink>
                            <NavLink className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <NavLink className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</NavLink>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      {/* <!-- Products End --> */}

      {/* <!-- Offer Start --> */}
      {/* <div className="container-fluid ">
        <h2 className="position-relative text-uppercase mx-xl-5 mb-4">
          <span
            className="bg-secondary special pr-3"
            style={{
              marginLeft: "24%",
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Special Offer
          </span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/tathir.jfif" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer2 mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/deer-musk.jfif" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container-fluid mobilesize">
        <h2 className=" position-relative text-uppercase mb-1">
          <span
            className="bg-secondary trending pr-3"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Special
          </span>
          <br></br>
          <span
            className="collect"
            style={{
              color: "#debe75",
              fontFamily: "bodoniflf",
            }}
          >
            Offer
          </span>
        </h2>
        <div class="row">
          <div
            class="col-lg-3 col-6 "
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            <div className="product-offer1 mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/oud-mikhlaat.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div
            class="col-3 col-6"
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            <div className="product-offer1 mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/oud-mikhlaat.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-6 mobile-trending d-sm-none"
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            <div className="product-offer1 mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/oud-mikhlaat.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-6 mobile-trending d-sm-none"
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
          >
            <div className="product-offer1 mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="img/al-barid.jfif" alt="" />
              <div className="offer-text">
                {/* <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3> */}
                <NavLink to="" className="btn btn-primary">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Offer End --> */}
    </>
  );
};
export default Home;
