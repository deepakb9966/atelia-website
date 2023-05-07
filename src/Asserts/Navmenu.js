import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../asset/css/navmenu.css';

import logo from '../asset/images/logo.png';
console.log(logo);

const Navmenu = () => {
    return (
        <div className="APP">
            <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
                <div className="container-fluid header_menu">
                    <a href="/" className="navbar-brand font-weight-bold"><img src={logo} width="60px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarSupportedContent" className="navbar_menu_items collapse navbar-collapse">
                        <div>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item nav-item2"><a href="/why" className="nav-link font-weight-bold text-uppercase">Why ATELIA?</a></li>
                                <li className="nav-item nav-item2"><a href="/platform" className="nav-link font-weight-bold text-uppercase">Platform</a></li>
                                <li className="nav-item nav-item2 dropdown megamenu">
                                    <div className='text-center'>
                                        <a href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle">Solution</a>
                                        <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                                            <div className="container d-flex justify-content-end">
                                                <div className="row megamenuitems m-0 shadow-sm">
                                                    <div className="col m-0" style={{ padding: "0px 0px 0 20px" }}>
                                                        <div className="pt-3 pb-2">
                                                            <div className="row">
                                                                <div className="col mb-4">
                                                                    <h6 className="font-weight-bold megamenu_heading text-uppercase">Monitoring</h6>
                                                                    <ul className="list-unstyled">
                                                                        <li className="nav-item"><a href="/syn_mon" className="nav-link text-small p-2">Synchronous Monitoring</a></li>
                                                                        <li className="nav-item"><a href="/careplan_mon" className="nav-link text-small p-2 ">Care Plan Monitoring</a></li>
                                                                        <li className="nav-item"><a href="/wellness_mon" className="nav-link text-small p-2 ">Wellness Monitoring</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col mb-4">
                                                                    <h6 className="font-weight-bold megamenu_heading text-uppercase">Automation</h6>
                                                                    <ul className="list-unstyled">
                                                                        <li className="nav-item"><a href="/patient_opt" className="nav-link text-small p-2 ">Patient Visiting Optimization</a></li>
                                                                        <li className="nav-item"><a href="/soap_opt" className="nav-link text-small p-2 ">SOAP Recommendations</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-item2 dropdown megamenu">
                                    <div className='text-center'>
                                        <a href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle">Company</a>
                                        <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                                            <div className="container d-flex justify-content-end">
                                                <div className='megamenu2'>
                                                    <div className='megamenuitems megamenuitems2'>
                                                        <ul className="list-unstyled">
                                                            <li className="nav-item"><a href="/about_us" className="nav-link text-small p-2">About US</a></li>
                                                            <li className="nav-item"><a href="/contact_us" className="nav-link text-small p-2 ">Contact US</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-item2"><a href="/patners" className="nav-link font-weight-bold text-uppercase">Patners</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navmenu