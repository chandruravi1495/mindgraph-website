import React from 'react';
import {IoArrowForward, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';
import {Link} from "react-router-dom";


function Footer() {

    return (
        <>
            <section className="blogs">

                <div className="container-fluid">
                    <div className="roundedcircle_left"></div>
                    <h2>AT MINDGRAPH</h2>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="card h-100">
                                <img loading="lazy" src="b-1.jpg" className="img-top" alt=""/>
                                <div className="card-body">
                                    <p>Explainable AI for consumer business</p>
                                    {/* <span>10 Apr 2021</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card h-100">
                                <img loading="lazy" src="b-2.jpg" className="img-top" alt=""/>
                                <div className="card-body">
                                    <p>Future of digital work community</p>
                                    {/* <span>05 Apr 2021</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card h-100">
                                <img loading="lazy" src="b-3.jpg" className="img-top" alt=""/>
                                <div className="card-body">
                                    <p>Joint learning (Human + Machines)</p>
                                    {/* <span>25 Mar 2021</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card h-100">
                                <img loading="lazy" src="b-4.jpg" className="img-top" alt=""/>
                                <div className="card-body">
                                    <p>Smart work using AI</p>
                                    {/* <span>05 Feb 2021</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="roundedcircle_right"></div>
                <div className="container-fluid">
                    <div className="row w-100 row-footer">
                        <div className="col-lg-6">
                            <div className="mt-lg-5 p-lg-5">
                                <h4>GET IN TOUCH</h4>
                                <p className="my-4">Have any questions? Feel free to use the contact form below to get
                                    in touch with us. We will answer you as soon as possible!</p>
                                <h4 style={{fontSize: '2em'}}>Locations</h4>
                                <ul style={{paddingLeft: 0}}>
                                    <li>Bangalore, India</li>
                                    <li>Bhubaneswar, India</li>
                                    <li>Hyderabad, India</li>
                                    <li>Kuala Lumpur, Malaysia</li>
                                    <li>Singapore</li>
                                    <li>Cincinnati, Ohio, USA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>TAKE YOUR FIRST STEP</h4>
                            <div className="card">
                                <div className="card-body p-4">

                                    <form action="">
                                        <div className="form-group">
                                            <input type="text" placeholder='Name' className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder='Email' className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder='Contact' className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Message" name="" id="" cols="30" rows="10"
                                                      className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="explore" type="submit">
                                                <p className="m-0">Submit</p>
                                                <IoArrowForward size={35} className="ms-4 btn-icon"/>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="path-box">
                    </div>
                </div>
            </section>
            <section className="bottom-footer pt-0 pb-5">
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 sm-text">
                            <img loading="lazy" src="logo.png" alt=""/>
                        </div>
                        <div className="col-lg-6 text-center sm-text d-flex align-items-center justify-content-between">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Mindgraph. All rights reserved.</p>
                            <Link to={"/terms"} className="underline mb-0 text-white">Terms & Condition </Link>
                            <div className="vr opacity-100 text-white"></div>
                            <Link to={"/cookies"} className="underline mb-0 text-white">Cookies Policy</Link>
                            <div className="vr opacity-100 text-white"></div>
                            <Link to={"/privacy"} className="underline mb-0 text-white">Privacy Policy</Link>
                        </div>
                        <div className="col-lg-3 text-lg-end sm-text">
                            <IoLogoFacebook size={40} className="me-4"/>
                            <IoLogoTwitter size={40} className="me-4"/>
                            <IoLogoLinkedin size={40} className="me-4"/>
                            <IoLogoInstagram size={40}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
