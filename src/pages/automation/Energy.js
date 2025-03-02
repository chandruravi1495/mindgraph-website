import React from 'react';
import Header from "../../components/Header"

function Energy() {

    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])

  return (
    <>
        <div className="page">
            <Header image="am-1.png" height={40} title="Energy and Utilities" />
            <section className="energy">
                <div className="container-fluid nav-main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Energy and Utilities</h1>
                            <h5 className="border-left">Data-driven approach for sustainable Energy and Utilities industry</h5>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p>Utilities around the world are making huge investments in data and advanced technologies. They turned data-driven with large-scale adoption of smart meters as well as tens of thousands of sensors across their systems. However, the real value comes from embedding smart solutions and analytics using AI, IIoT, and blockchain as a core capability in the organization to deliver instantly actionable insights, with near-zero latency. Digital adoption also enables Utilities to keep pace with the changing relationships with and expectations of their customers.</p>
                                    <p>Mindgraph helps energy and utilities providers to run an efficient and resilient energy infrastructure and create new value for their customers and shareholders. Our MGsmart suite comprising frameworks, applications, and tools drive instant value across lines of business, master end-to-end process complexity, and provide deep insights into the customer journey. It offers organizations deployment choices to reduce the total cost of ownership and flexibly execute business and IT strategies. Energy and utility companies can now tap into opportunities presented by distributed generation, consumer demand for digital experiences, and new business models and surprise your customer with different YOU</p>
                                </div>
                                <div className="col-lg-4">
                                        <img loading="lazy" src="eng-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center eng">
                        <h3>Value along the value chain</h3>
                        <img loading="lazy" src="eng-2.png" alt="" className="my-4 img-fluid" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-8 ul-h6">
                            <h1>Our Services </h1>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h6 className="mt-3">Application Services</h6>
                                    <ul style={{listStyleImage: `url('tick.png')`}}>
                                        <li>Energy sustainability management</li>
                                        <li>Power distribution management system</li>
                                        <li>Sustainability strategy and compliance management</li>
                                        <li>Power plant and grid systems engineering</li>
                                        <li>Asset management and monitoring solutions</li>
                                        <li>Image analytics</li>
                                        <li>Smart machine solutions</li>
                                        <li>Power monitoring and load control</li>
                                        <li>Field services and building systems</li>
                                        <li>Order, pricing and invoice verification, and infrastructure management</li>
                                        <li>Mobile solutions</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <h6 className="mt-3">Infrastructure Services</h6>
                                    <ul>
                                        <li>Data Center services</li>
                                        <li>Workplace services</li>
                                        <li>Managed Security services</li>
                                        <li>Cybersecurity solutions</li>
                                    </ul>
                                    <h6 className="mt-3">Application Services</h6>
                                    <ul>
                                        <li>Advanced metering </li>
                                        <li>Smart Parking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                                <img loading="lazy" src="eng-3.png" alt="" className="img-fluid" />
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Energy