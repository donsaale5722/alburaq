import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <>
            {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-secondary">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">AL-BURAQ | PERFUMES</h5>
                <p className="mb-4">We are selling attar and perfumes! We have our own product and best quality.</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div class="dropdown-container">
  <button class="dropdown-button main-button">
    <span class="dropdown-title-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    </span>
    <span class="dropdown-title text-truncate">Facebook</span>
    <span class="dropdown-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </span>
  </button>
  <div class="dropdown-list-container">
    <div class="dropdown-list-wrapper">
      <ul class="dropdown-list"></ul>
      <div class="floating-icon" aria-hidden="true"></div>
    </div>
  </div>
</div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    {/* <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Home</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Checkout</NavLink>
                            <NavLink className="text-secondary" to="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Home</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</NavLink>
                            <NavLink className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Checkout</NavLink>
                            <NavLink className="text-secondary" to="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</NavLink>
                        </div>
                    </div> */}
                    <div className="col-md-4 mb-5">
                        {/* <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form> */}
                        <h6 className="text-secondary text-uppercase mt-1 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <NavLink className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></NavLink>
                            <NavLink className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></NavLink>
                            <NavLink className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                            <NavLink className="btn btn-primary btn-square" to="#"><i className="fab fa-instagram"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <NavLink className="text-primary" to="#">AL-Burak.com</NavLink>. All Rights Reserved.
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
        </>
    );
}
export default Footer;