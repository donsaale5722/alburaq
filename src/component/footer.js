import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-secondary">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">
              AL-BURAQ | PERFUMES
            </h5>
            <p className="mb-4">
              We are selling attar and perfumes! We have our own product and
              best quality.
            </p>
            {/* <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p> */}
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div class="wrapper">
                {/* <!-- Accordion Heading One --> */}
                <div class="parent-tab">
                  <input type="radio" name="tab" id="tab-1" checked />
                  <label for="tab-1">
                    <span>Connect with us</span>
                    <div class="icon">
                      <i
                        class="fa fa-angle-down"
                        data-toggle="collapse"
                        data-target="#demo1"
                      ></i>
                    </div>
                  </label>
                  <div id="demo1" class="collapse content">
                    <p className="mb-2">
                      <i className="fa fa-map-marker-alt text-primary mr-3"></i>
                      Palanpur higway chhapi, Gujarat-385210 (India).
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-envelope text-primary mr-3"></i>
                      alburaq.attrprfm@gmail.com
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-phone-alt text-primary mr-3"></i>+91
                      9726468826
                    </p>
                  </div>
                </div>
                {/* <!-- Accordion Heading Two --> */}
                <div class="parent-tab">
                  <input type="radio" name="tab" id="tab-2" />
                  <label for="tab-2">
                    <span>Follow Us</span>
                    <div class="icon">
                      <i
                        class="fa fa-angle-down"
                        data-toggle="collapse"
                        data-target="#demo2"
                      ></i>
                    </div>
                  </label>
                  <div id="demo2" class="collapse content">
                    <p>
                      <div className="d-flex">
                        <NavLink
                          className="btn btn-primary btn-square mr-2"
                          to="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </NavLink>
                        <NavLink
                          className="btn btn-primary btn-square mr-2"
                          to="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </NavLink>
                        <NavLink
                          className="btn btn-primary btn-square mr-2"
                          to="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </NavLink>
                        <NavLink className="btn btn-primary btn-square" to="#">
                          <i className="fab fa-instagram"></i>
                        </NavLink>
                      </div>
                    </p>
                  </div>
                </div>
                <div class="parent-tab">
                  <input type="radio" name="tab" id="tab-3" />
                  <label for="tab-3">
                    <span>Our Service</span>
                    <div class="icon">
                      <i
                        class="fa fa-angle-down"
                        data-toggle="collapse"
                        data-target="#demo3"
                      ></i>
                    </div>
                  </label>
                  <div id="demo3" class="collapse content">
                    <p className="mb-2">Quality Product</p>
                    <p className="mb-2">Free Shipping</p>
                    <p className="mb-2">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-secondary">
              &copy;{" "}
              <NavLink className="text-primary" to="#">
                AL-Burak.com
              </NavLink>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};
export default Footer;
