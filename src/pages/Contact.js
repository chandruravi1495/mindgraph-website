import React from 'react';
import Header from '../components/Header';
import { IoLogoFacebook,IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import Footer from '../components/Footer';

function Contact() {

  React.useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
      <div className="page">
          <Header image="contactus.jpg" title="CONTACT US" height={30} />
          <section className="contact">
            <div className="roundedcircle_left"></div>
            <div className="container-fluid">
              <div className="row rounded-bg">
                  <div className="col-lg-6">
                      <div className="card-box-contact">
                        <p style={{color: '#D63401'}}>Take your first step</p>
                        <h4 className="text-lg"><b>GET IN TOUCH</b></h4>
                        <p style={{color: '#7f7f7f'}} className="text-sm">We are open for innovation, learning and problem solving. Our ADDAS framework will help you start your own unique digital & data journey with a more personalised business solutions that are difficult to replicate in different competitor environments.</p>
                        <p style={{color: '#D63401'}}>Follow US</p>
                        <div className="d-flex">
                          <IoLogoFacebook size={40} className="me-4" />
                          <IoLogoTwitter size={40}className="me-4"/>
                          <IoLogoLinkedin  size={40}className="me-4"/>
                          <IoLogoInstagram size={40} />
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="card card-sm-mt">
                        <div className="card-body p-5">
                          <h6 className="color-secondary"><b>SEND US MESSSAGE</b></h6>
                          <form action="">
                            <div className="form-group">
                              <label htmlFor="">Full Name</label>
                              <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="">Email</label>
                              <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="">Contact Number</label>
                              <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="">Message</label>
                              <textarea name="" className="form-control" placeholder="Message" id="" cols="30" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                              <button className="w-100 py-3 btn btn-warning">Request for a demo</button>
                            </div>
                          </form>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>
          <div className="demo py-0 position-relative">
            <div className="roundedcircle_right"></div>
            <div className="container-fluid">
              <div className="demo-bg" style={{backgroundImage:"url('demo_bg.png')",position:'relative'}}>
                  <div className="row px-5 align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <h3 className="text-white text-lg">Our Values Connect And Inspire Us. Interested ?</h3>
                    </div>
                    <div className="col-lg-6 text-end">
                      <button className="btn btn-warning">Request for a demo</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <section className="map">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-8 p-0 m-0">
                      <div className="map-box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.2627267276303!2d77.712893!3d12.955033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa846000bc8957e5!2sMindgraph%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1644251452984!5m2!1sen!2sin" width="100%" height="750" style={{border:0,borderRadius:'10px'}} allowFullScreen="" loading="lazy"></iframe>
                      </div>
                  </div>
                  <div className="col-lg-4 p-0 m-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="text-orange"><b>OUR LOCATIONS</b></p>
                        <div className="mt-2">
                            <p className="text-secondary main-text">ADDRESS</p>
                            <ul style={{paddingLeft:0}}>
                              <li>Bangalore, India</li>
                              <li>Bhubaneswar, India</li>
                              <li>Hyderabad, India</li>
                              <li>Kuala Lumpur, Malaysia</li>
                              <li>Singapore</li>
                              <li>Cincinnati, Ohio, USA</li>
                            </ul>
                            <p className="text-secondary main-text">ONLINE SERVICE</p>
                            <ul style={{paddingLeft:0}}>
                              <li>www.mind-graph.com</li>
                              <li>info@mind-graph.com</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <Footer />
      </div>
  );
}

export default Contact;
