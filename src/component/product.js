import React from "react";
import { NavLink } from "react-router-dom"; 
// import img from './img/al-barid.jpeg';

const Product = () =>{
   
    return(
        <>
         {/* <!-- Breadcrumb Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <NavLink className="breadcrumb-item text-dark" to="#">Home</NavLink>
                    <NavLink className="breadcrumb-item text-dark" to="#">Product</NavLink>
                    <span className="breadcrumb-item active">Product List</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}

    {/* <!-- Shop Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/* <!-- Shop Sidebar Start --> */}
            <div className="col-lg-3 col-md-4">
                {/* <!-- Price Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all"/>
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1"/>
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2"/>
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3"/>
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4"/>
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5"/>
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Price End --> */}
                
                {/* <!-- Color Start --> */}
                {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="color-all"/>
                            <label className="custom-control-label" for="price-all">All Color</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-1"/>
                            <label className="custom-control-label" for="color-1">Black</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-2"/>
                            <label className="custom-control-label" for="color-2">White</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-3"/>
                            <label className="custom-control-label" for="color-3">Red</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-4"/>
                            <label className="custom-control-label" for="color-4">Blue</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="color-5"/>
                            <label className="custom-control-label" for="color-5">Green</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div> */}
                {/* <!-- Color End --> */}

                {/* <!-- Size Start --> */}
                {/* <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="size-all"/>
                            <label className="custom-control-label" for="size-all">All Size</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-1"/>
                            <label className="custom-control-label" for="size-1">XS</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-2"/>
                            <label className="custom-control-label" for="size-2">S</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-3"/>
                            <label className="custom-control-label" for="size-3">M</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-4"/>
                            <label className="custom-control-label" for="size-4">L</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="size-5"/>
                            <label className="custom-control-label" for="size-5">XL</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div> */}
                {/* <!-- Size End --> */}
            </div>
            {/* <!-- Shop Sidebar End --> */}


            {/* <!-- Shop Product Start --> */}
            <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <NavLink className="dropdown-item" to="#">Latest</NavLink>
                                        <NavLink className="dropdown-item" to="#">Popularity</NavLink>
                                        <NavLink className="dropdown-item" to="#">Best Rating</NavLink>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <NavLink className="dropdown-item" to="#">10</NavLink>
                                        <NavLink className="dropdown-item" to="#">20</NavLink>
                                        <NavLink className="dropdown-item" to="#">30</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/hamid-blend.jpeg" alt=""/>
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
                    <div className="col-12">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><NavLink className="page-link" to="#">Previous</NavLink></li>
                            <li className="page-item active"><NavLink className="page-link" to="#">1</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                            <li className="page-item"><NavLink className="page-link" to="#">Next</NavLink></li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Shop Product End --> */}
        </div>
    </div>
    {/* <!-- Shop End --> */}
        </>
    );
}
export default Product;