import React from 'react';
import Header from "../../components/Header"

function Manufacturing() {

    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
  return (
    <>
        <div className="page">
            <Header image="am-2.png" height={40} title="Manufacturing" />
            <section className="energy">
                <div className="container-fluid nav-main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Manufacturing</h1>
                            <h5 className="border-left">Industrial digitalization scored a win in its biggest test to date </h5>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p>Faced with the largest health and economic crisis in history, businesses in the manufacturing sector are taking extraordinary measures to protect their people and sustain operations. Manufacturing Companies that have adopted digitalization and emerging technologies are better positioned to respond to the crisis with a scalable, flexible, and reactive supply chain model that responds to the consumer’s individual needs. Technologies like IoT and AI are enabling a surge in manufacturing productivity by predicting and preventing equipment failure, improving reliability, and reducing downtime. Emerging out of this crisis will be a journey for most companies, but those emerging out stronger will use it as an opportunity to optimize and reinvent themself to be most relevant to their customers.</p>
                                    <p>At Mindgraph, we help manufacturers overcome the complexity of connecting requirements, design, development, and deployment for emerging technologies. Our services are based on robust engineering practices that lead to dependable AI, Data Analytics, RPA, and IIoT, which allows you to constantly calibrate your business with deeper insights to visualize faster time to market with more satisfied customers. Our solutions deliver intelligent insight from various silos to help you design new processes and products, quality control to get the products without defects, and carry out predictive maintenance on time. Our 4R framework, helps the organization address the tectonic changes in the business environment to stay relevant, resilient, reliable, and responsive.</p>
                                </div>
                                <div className="col-lg-4">
                                        <img loading="lazy" src="manu-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center eng">
                        <h3>Our 4-R Framework</h3>
                        <img loading="lazy" src="manu-2.png" alt="" className="my-4 img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Manufacturing