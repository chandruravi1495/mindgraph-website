import React from 'react';
import Header from "../../components/Header"

function Transport() {


    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
  return (
    <>
        <div className="page">
            <Header image="am-3.png" height={40} title="Travel and transportation" />
            <section className="energy">
                <div className="container-fluid nav-main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Travel and Transportation</h1>
                            <h5 className="border-left">Fly out of turbulence with data driving your organization</h5>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p>The travel and transportation sector is reeling from the impact of the COVID-19 crisis. The structure and competitive dynamics of transportation, logistics, travel, and fleet management segments are unique to the specific verticals. Nevertheless, organizations adopting digital technology-led transformation have maintained a competitive edge in gaining ‘happy customers’ and growth in this new reality.</p>
                                    <p>The airline industry is witnessing an accelerated digitalization and trends focused on unprecedented Fleet Modernization, Omnichannel Merchandizing, and improved Customer Experience and Loyalty. These trends aim for best-in-class pre-flight experience, in-flight experience, airline experience, and airport experience, aided by innovative new technologies such as AI, analytics, IoT, cloud, and mobile. Increasing passenger safety, boosting passenger confidence, and intelligent and efficient operations of the airport and airlines are the new blueprint for their survival.</p>
                                    <p>For freight forwarders and logistics firms, adopting customer-centric culture has become an essential element of their performance. Enterprises can greatly improve customer experience by shifting to a digitally integrated value chain, which would lead to significant improvement in forecasting to scale capacity up or down and planning routes. Adding machine learning and artificial intelligence techniques to data analytics can deliver real-time visibility into demand, volume capacity, and the supply chain to manage orders, shipment, and resource allocation.</p>
                                    <p>Mindgraph partners with travel and transportation enterprises to offer a unique blend of services and solutions to navigate business challenges and grow revenue. Our services help you stay ahead of the crisis curve by optimizing operations and improving asset performance with technologies that include data, IoT, cloud, and artificial intelligence; and transform customer experience with insights from data analytics, chatbots, and RPA solutions.</p>
                                </div>
                                <div className="col-lg-4">
                                        <img loading="lazy" src="t-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center eng">
                        <h3>5 key stages of journey in Travel and Transport industry - zooming into the Digital Age</h3>
                        <img loading="lazy" src="t-2.png" alt="" className="my-4 img-fluid" />
                    </div>
                    <div className="mt-5 eng">
                        <h1>Our Focus</h1>
                        <img loading="lazy" src="t-3.png" alt="" className="my-4 img-fluid mx-auto d-block" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-8 ul-h6">
                            <h1>Our Services </h1>
                            <div className="row">
                                <div className="col-lg-8">
                                    <ul style={{listStyleImage: `url('tick.png')`}}>
                                        <li>Location-based experience personalization</li>
                                        <li>Customer Engagement & Digital Loyalty Solutions</li>
                                        <li>Omnichannel Experience</li>
                                        <li>Website & Mobile Enablement</li>
                                        <li>Channel Integration</li>
                                        <li>Kiosk Integration</li>
                                        <li>Digital Assisted Selling Platform (DASP) </li>
                                        <li>Use of IoT for improving Customer Experience</li>
                                        <li>Analytics</li>
                                        <li>Automated Data Analytics</li>
                                        <li>Promotion & Offers Analytics</li>
                                        <li>Asset tracking analytics </li>
                                        <li>Mobility solutions </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul>
                                        <li>Cloud Technology Management Services</li>
                                        <li>Social Computing</li>
                                        <li>Customer data insights</li>
                                        <li>IoT</li>
                                        <li>Application Integration</li>
                                        <li>Enterprise Communication Bus</li>
                                        <li>Data & Security Management</li>
                                        <li>Blockchain</li>
                                        <li>Compliance and security services </li>
                                        <li>Infrastructure Security Services </li>
                                        <li>Cyber Security </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                                <img loading="lazy" src="t-4.png" alt="" className="img-fluid" />
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Transport;