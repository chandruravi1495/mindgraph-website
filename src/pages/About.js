import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function About() {


    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])

  return (
      <div className="page">
        <Header image="about.jpg" title="ABOUT US" height={30} />
        <section className="about">
        <div className="roundedcircle_left"></div>
        <div className="roundedcircle_right"></div>
            <div className="container-fluid">
                <h2 className="text-center">WHO WE ARE</h2>
                {/* <p className="text-left my-4">We are AI first technology services company enabling Digital Acceleration for enterprises to create exponential value for their customers using Data Innovation.</p> */}
                <div className="row mt-lg-5">
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <img loading="lazy" src="about-1.png" className="img-fluid about-img" alt="" />
                                <p className="about-title">PASSION</p>
                                <p className="about-text">Our passion for excellence drives us. Our approach is to be transparent and push the boundaries of possibility.</p>
                                <div className="space"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <img loading="lazy" src="about-2.png" className="img-fluid about-img" alt="" />
                                <p className="about-title">VISION</p>
                                <p className="about-text">Our vision for the future is to create intelligent digital journeys with data-driven actions in the combination of Human and AI power.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <img loading="lazy" src="about-3.png" className="img-fluid about-img" alt="" />
                                <div className="mt-3">
                                    <p className="about-title">PHILOSOPHY</p>
                                    <p className="about-text">Our philosophy is to create a culture of customer delight supported by positive employees, trusted partners, and the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <img loading="lazy" src="about-4.png" className="img-fluid about-img" alt="" />
                                <p className="about-title">VALUES</p>
                                <p className="about-text">Our values are embodied in the 4E’s framework - excellence, empathy, empower, and ethical</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p className="collab mb-1">COLLABRATE MORE WITH <span className="color">MIND-GRAPH</span></p>
                    <p className="collab-text">We guarantee you absolute quality in every interface we develop.</p>
                </div>
            </div>
        </section>
        <Footer />
      </div>
  );
}

export default About;
