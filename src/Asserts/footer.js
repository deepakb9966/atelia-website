import React from 'react'
import '../asset/css/footer.css';
import logo from '../asset/images/logo.png';
const Footer = () => {
    return (
        <div className='footer_bg mb-0'>
            <div className="container m-0 p-0" >
                <footer className="row  mb-0 py-5 my-5 border-top">
                    <div className="col text-center mb-3">
                        <a href="/" className="d-flex align-items-center justify-content-center mb-3 link-dark text-decoration-none">
                            <img src={logo} width="70px" className='logo' />
                        </a>
                        <p className="stamp m-0">2022 © Atelia Software</p>
                        <p className="stamp m-0">Company Address, 123456</p>
                        <p className="stamp m-0"><a className='stamp' href='#'>Privacy Policy</a></p>
                    </div>

                    <div className="col" style={{ width:"80%" }}>
                        <div className='row'>
                            <div className='col'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </div>
                            <div className="col w-auto mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col w-auto mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col w-auto mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col w-auto mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                        </div>

                    </div>

                    
                </footer>
            </div>
        </div>
    )
}

export default Footer