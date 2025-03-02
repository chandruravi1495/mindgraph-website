import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Link} from "react-router-dom"
import {IoArrowForward} from 'react-icons/io5';

const box = [
    {
        "title": "Throughput and Productivity",
        "list": [
            {"p": "Diagnostics for stops"},
            {"p": "Progmostics for stops"},
            {"p": "Connected and Collaborative"}
        ]
    },
    {
        "title": "Quality issues and Controlled Release",
        "list": [
            {"p": "Predictive Quality and controlled"},
            {"p": "Release"},
            {"p": "Connected and Collaborative"},
            {"p": "Defect Modelling"},
            {"p": "Defect Detection"}
        ]
    },
    {
        "title": "Predictive Maintenance",
        "list": [
            {"p": "Diagnostics for Breakdowns"},
            {"p": "Prognostics for Breakdowns"},
            {"p": "Connected and collaborative"},
            {"p": "Feedback to platform design"},
        ]
    }
]

function Automation() {

    const [matches, setMatches] = React.useState(window.matchMedia("(min-width: 768px)").matches)
    const [active, setActive] = React.useState(1)

    React.useEffect(() => {
        const handler = e => setMatches(e.matches);
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler)
        window.scrollTo(0, 0)
        activeHexa(1)
    }, [])


    const activeHexa = (active) => {
        setActive(active)
    }

    return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header image="automation-bg.png" height={55} title="Start your Automation journey"
                    subTitle="Reach new levels of success with intelligent process automation  "/>
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>AUTOMATION</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button class="nav-heading">1. Industrial Internet of Things (IIoT)</button>
                                <button class="nav-link nav-main-link active"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a2"
                                        type="button" role="tab" aria-controls="v-pills-a2"
                                        aria-selected="false">Implementing Industry 4.0 in the New AI-Driven World
                                </button>
                                <button class="nav-link nav-main-link"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a3"
                                        type="button" role="tab" aria-controls="v-pills-a3" aria-selected="false">Grow
                                    your Business with Us
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a4"
                                        type="button" role="tab" aria-controls="v-pills-a4" aria-selected="false">What
                                    we Offer
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a5"
                                        type="button" role="tab" aria-controls="v-pills-a5" aria-selected="false">What
                                    Does the MSense Platform do?
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a6"
                                        type="button" role="tab" aria-controls="v-pills-a6"
                                        aria-selected="false">Industries
                                </button>
                                <button class="nav-heading mt-4">2. Digital Manufacturing</button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a8-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a8"
                                        type="button" role="tab" aria-controls="v-pills-a8" aria-selected="false">Build
                                    a resilient, adaptive, and intelligent neural manufacturing enterprise
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a9-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a9"
                                        type="button" role="tab" aria-controls="v-pills-a9" aria-selected="false">Our
                                    solutions
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-10-tab" data-bs-toggle="pill" data-bs-target="#v-pills-10"
                                        type="button" role="tab" aria-controls="v-pills-10" aria-selected="false">3.
                                    Robotic process Automation
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8 nav-main">
                            <div class="tab-content" id="v-pills-tabContent ">
                                <div class="tab-pane fade show active" id="v-pills-a2" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5>Implementing Industry 4.0 in the New AI-Driven World</h5>
                                        <div class="row">
                                            <div class="col-lg-5">
                                                <img loading="lazy" src="Group 4.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="col-lg-7">
                                                <p>Industry 4.0 is revolutionizing the entire value chain of industries
                                                    by interconnecting everything. IIoT has risen as one such
                                                    revolutionary system of intelligence that has transformed the way
                                                    industries work. Many manufactures have already automated their
                                                    plants, but they lag in IIoT and its integration with new
                                                    technologies such as cloud computing and analytics, AI, and machine
                                                    learning into their production facilities and throughout their
                                                    operations. Combining the data from production operations with
                                                    operational data from ERP, supply chain, customer service, and other
                                                    enterprise systems can provide a whole new level of visibility and
                                                    insights for business transformation. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a3" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5>Grow your Business with us</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>Mindgraph IIOT services provide orchestration across the product
                                                    value chain to maximize asset utilization and reduce downtime,
                                                    thereby increasing the quality and efficiency of industrial
                                                    operations. We have the expertise to make sense of data from siloed
                                                    information and accelerate your business in each of the four stages
                                                    of IoT evolution.</p>
                                                <img loading="lazy" src="offer.png" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a4" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div class="">
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5>What we Offer</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>MindSense is our unique platform designed for intelligent asset
                                                    management, monitoring and control, predictive analytics, computer
                                                    vision, safety, and reliability of manufacturing plants. With
                                                    MindSense, all your plant managers, maintenance crew, and
                                                    reliability engineers can rapidly investigate and share analyses
                                                    from plant data to find insights and answer questions from real-time
                                                    data and workflows. Using AI to analyze millions of data points, we
                                                    help you move from reactive maintenance to predictive maintenance
                                                    giving you complete operational </p>
                                                <hr style={{height: '3px'}}/>
                                                <h6 class="text-center">MindSense - Comprehensive Predictive Maintenance
                                                    Framework </h6>
                                                <hr style={{height: '3px'}}/>
                                                {/* <img loading="lazy" src="Group 3699.png" class="img-fluid" alt="" /> */}
                                                <div className="row">
                                                    <div className="col-lg-6 p-0 m-0">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div
                                                                    className={active == 1 ? 'hexagon hexa-1 active-hexa' : 'hexagon hexa-1'}
                                                                    onClick={() => activeHexa(1)}>
                                                                    <p className="hexa-text-1">Machine <br/> Prognostics
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className={active == 2 ? 'hexagon hexa-2 active-hexa' : 'hexagon hexa-3'}
                                                                    onClick={() => activeHexa(2)}>
                                                                    <p className="hexa-text-2">Defect <br/> Detection
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className={active == 3 ? 'hexagon hexa-3 active-hexa' : 'hexagon hexa-3'}
                                                                    onClick={() => activeHexa(3)}>
                                                                    <p className="hexa-text-3">Machine Diagnostics</p>
                                                                </div>
                                                                <div
                                                                    className={active == 4 ? 'hexagon hexa-4 active-hexa' : 'hexagon hexa-4'}
                                                                    onClick={() => activeHexa(4)}>
                                                                    <p className="hexa-text-4">Predictive Quality and
                                                                        Controlled Release</p>
                                                                </div>
                                                                <div
                                                                    className={active == 5 ? 'hexagon hexa-5 active-hexa' : 'hexagon hexa-5'}
                                                                    onClick={() => activeHexa(5)}>
                                                                    <p className="hexa-text-5">Feedback to Platform
                                                                        Design</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className={active == 6 ? 'hexagon hexa-6 active-hexa' : 'hexagon hexa-6'}
                                                                    onClick={() => activeHexa(6)}>
                                                                    <p className="hexa-text-6">Connect and
                                                                        Collaborate</p>

                                                                </div>
                                                                <div
                                                                    className={active == 7 ? 'hexagon hexa-7 active-hexa' : 'hexagon hexa-7'}
                                                                    onClick={() => activeHexa(7)}>
                                                                    <p className="hexa-text-7">Defect Modelling</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        {
                                                            active == 1
                                                                ?
                                                                <div class="hexa-div-1">
                                                                    <h5>Machine Prognostics</h5>
                                                                    <p>Machine Prognostics use Deep Learning techniques
                                                                        to predict hours-days in advance when a
                                                                        breakdown is going to occur. It also uses
                                                                        Explainable AI to understand why the stoppage
                                                                        will occur and fix the problem</p>
                                                                    <img loading="lazy" src="hex-2.jpg"
                                                                         class="img-fluid" alt=""/>
                                                                </div>
                                                                :
                                                                active == 2
                                                                    ?
                                                                    <div class="hexa-div-2">
                                                                        <h5>Defect Detection</h5>
                                                                        <p>Producing a defective product is expensive
                                                                            for Manufacturing companies, especially if a
                                                                            defective product goes to market, leading to
                                                                            high brand cost, decreased customer
                                                                            satisfaction, and increased wastage. </p>
                                                                        <img loading="lazy" src="hex-5.jpg"
                                                                             class="img-fluid" alt=""/>
                                                                        <p>We use Deep Learning/computer vision models
                                                                            to detect defective products in the
                                                                            production batch. With the help of
                                                                            Explainable AI, we also understand why the
                                                                            defects are occurring and correlate defects
                                                                            to line segments. </p>
                                                                    </div>
                                                                    :
                                                                    active == 3
                                                                        ?
                                                                        <div class="hexa-div-3">
                                                                            <h5>Machine Diagnostics</h5>
                                                                            <p>An estimate suggests that manufacturing
                                                                                facilities loses at least 5% of
                                                                                productivity due to machine failures and
                                                                                downtime, translating into millions of
                                                                                dollars in revenue loss. It further
                                                                                exacerbates in a scenario where machine
                                                                                stoppages result in less than one hour
                                                                                downtime, resulting in decreased OEE and
                                                                                a constant need for human intervention
                                                                                to restart the line.</p>
                                                                            <img loading="lazy" src="hex-1.jpg"
                                                                                 class="img-fluid" alt=""/>
                                                                            <p>mSense’s Machine Diagnostics uses Deep
                                                                                Learning to predict potential machine
                                                                                stoppages 15 minutes in advance. The
                                                                                model further employs Explainable AI
                                                                                techniques to give you a pivotal
                                                                                understating of the reasons for the
                                                                                stoppage, thus giving you enough room to
                                                                                fix the problem permanently.</p>
                                                                        </div>
                                                                        :
                                                                        active == 4
                                                                            ?
                                                                            <div class="hexa-div-4">
                                                                                <h5>Predictive Quality and Controlled
                                                                                    Release</h5>
                                                                                <p>Quality testing is a very manual and
                                                                                    laborious task in a lot of scenarios
                                                                                    for the manufactures. This result in
                                                                                    high failure cost including raise in
                                                                                    appraisal costs and decreased time
                                                                                    to market. </p>
                                                                                <p>Our solution uses Deep Learning
                                                                                    models to predict exactly when the
                                                                                    production batches need testing for
                                                                                    a specific test. It also helps you
                                                                                    understand why a particular quality
                                                                                    issue occurred so that you can take
                                                                                    corrective steps to fix the problem
                                                                                    in the long run.</p>
                                                                                <img loading="lazy" src="hex-4.jpg"
                                                                                     class="img-fluid" alt=""/>
                                                                            </div>
                                                                            :
                                                                            active == 5
                                                                                ?
                                                                                <div class="hexa-div-5">
                                                                                    <h5>Feedback to Platform
                                                                                        Design </h5>
                                                                                    <p>Predictive Maintenance platform
                                                                                        connects the industrial unit
                                                                                        floor with design and
                                                                                        manufacturing engineers. The
                                                                                        feedback from the platform will
                                                                                        not only help in predicting
                                                                                        faults, but also crucial in
                                                                                        product design and manufacturing
                                                                                        advancement.</p>
                                                                                    <img loading="lazy" src="hex-7.jpg"
                                                                                         class="img-fluid" alt=""/>
                                                                                </div>
                                                                                :
                                                                                active == 6
                                                                                    ?
                                                                                    <div class="hexa-div-6 ">
                                                                                        <h5>Connect and Collaborate</h5>
                                                                                        <p>Typically manufacturing
                                                                                            platforms are constructed
                                                                                            from the same design
                                                                                            specifications but perform
                                                                                            very differently from one
                                                                                            another. Keeping this in
                                                                                            mind, mSense uses local and
                                                                                            global Deep Learning models
                                                                                            to predict events that occur
                                                                                            across variants of the same
                                                                                            manufacturing platforms.
                                                                                            Further, Explainable AI is
                                                                                            used to understand why the
                                                                                            negative events are
                                                                                            happening.</p>
                                                                                        <img loading="lazy"
                                                                                             src="hex-3.jpg"
                                                                                             class="img-fluid" alt=""/>
                                                                                    </div>
                                                                                    :
                                                                                    active == 7
                                                                                        ?
                                                                                        <div class="hexa-div-7">
                                                                                            <h5>Defect modelling</h5>
                                                                                            <p>Once defect analysis
                                                                                                works to acceptable
                                                                                                accuracy, we can
                                                                                                correlate defects to
                                                                                                sensor data. This
                                                                                                process allows the
                                                                                                prediction of defects in
                                                                                                advance, along with
                                                                                                actionable insights to
                                                                                                solve defects before
                                                                                                they happen.</p>
                                                                                            <img loading="lazy"
                                                                                                 src="hex-6.jpg"
                                                                                                 class="img-fluid"
                                                                                                 alt=""/>
                                                                                        </div>
                                                                                        :
                                                                                        null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a5" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5 class="border-left">What Does the MindSense Platform do?</h5>
                                        {/* <img loading="lazy" src="Group 3700.png" class="img-fluid" alt="" /> */}
                                        <div className='row'>
                                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                                <div className='boxes'>
                                                    <div>
                                                        <img src="automation-1-4-1.png"></img>
                                                        <div>Increase OEE</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                                <div className='boxes'>
                                                    <div>
                                                        <img src="automation-1-4-2.png"></img>
                                                        <div>Reduce Downtime</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                                <div className='boxes'>
                                                    <div>
                                                        <img src="automation-1-4-3.png"></img>
                                                        <div>Reduce Quality Defects</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                                <div className='boxes'>
                                                    <div>
                                                        <img src="automation-1-4-4.png"></img>
                                                        <div>Reduce Manual Labor</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-3 col-sm-6'>
                                                <div className='boxes'>
                                                    <div>
                                                        <img src="automation-1-4-5.png"></img>
                                                        <div>Remove Long Term Issues</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img loading="lazy" src="Group 3701.png" class="img-fluid mt-4" alt="" /> */}

                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box.map((el, i) => {
                                                        return (
                                                            <div className='col-md-4' key={i}>
                                                                <div className='smallBoxes'>
                                                                    <h6>{el.title}</h6>
                                                                    {
                                                                        el.list.length &&
                                                                        <ul>
                                                                            {
                                                                                el.list.map((a, index) => {
                                                                                    return (<li key={index}>
                                                                                        {/* <IoCheckmarkCircleOutline size={15} className="icon-orange" /> */}
                                                                                        <img src="tick.png"/>
                                                                                        {a.p}
                                                                                        {
                                                                                            a.sub && a.sub.length &&
                                                                                            <ul>
                                                                                                {
                                                                                                    a.sub.map((b) => {
                                                                                                        return (
                                                                                                            <li key={index}>
                                                                                                                <IoArrowForward
                                                                                                                    size={15}
                                                                                                                    className="icon-orange"/>{b.p}
                                                                                                                {
                                                                                                                    b.sublist && b.sublist.length &&
                                                                                                                    <ul>
                                                                                                                        {
                                                                                                                            b.sublist.map((c) => {
                                                                                                                                return (
                                                                                                                                    <li key={index}>
                                                                                                                                        <IoArrowForward
                                                                                                                                            size={15}
                                                                                                                                            className="icon-orange"/>{c.p}
                                                                                                                                    </li>)
                                                                                                                            })
                                                                                                                        }
                                                                                                                    </ul>
                                                                                                                }
                                                                                                            </li>)
                                                                                                    })
                                                                                                }
                                                                                            </ul>
                                                                                        }
                                                                                    </li>)
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                        <h5 class="border-left">What is the value add of AI in Manufacturing? What can
                                            we expect?</h5>
                                        {/* <img loading="lazy" src="Group 3702.png" class="img-fluid" alt="" /> */}
                                        <div className='col-md-12 automationPage box4'>
                                            <div className='row'>
                                                <div className='col-md-5'>
                                                    <div className='box4boxLeft'>
                                                        <div className='icon icon1'>
                                                            <img src="automation-144-1.png"></img>
                                                        </div>
                                                        <div className='icon icon2'>
                                                            <img src="automation-144-3.png"></img>
                                                        </div>
                                                        <div className='icon icon3'>
                                                            <img src="automation-144-2.png"></img>
                                                        </div>
                                                        <h3>What is hapening now?</h3>
                                                        <ol>
                                                            <li>Is there a defect in our product?</li>
                                                            <li>Is the line failing?</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <div className='col-md-7'>
                                                    <div className='box4boxRight'>
                                                        <div className='icon icon1'>
                                                            <img src="automation-144-4.png"></img>
                                                        </div>
                                                        <div className='icon icon2'>
                                                            <img src="automation-144-5.png"></img>
                                                        </div>
                                                        <h3>What is going to happen?</h3>
                                                        <ol>
                                                            <li>When is a failure going to happen?</li>
                                                            <li>Where will the failure happen?</li>
                                                            <li>When will there be a defect in our product?</li>
                                                            <li>when will a part expire?</li>
                                                            <li>How long will a part last within our tolerance range?
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="border-left">What is the value add of Interpretability in
                                            Manufacturing?MindSense’s unique value add</h5>
                                        {/* <img loading="lazy" src="Group 3702 (1).png" class="img-fluid" alt="" /> */}
                                        <div className='col-md-12 automationPage box5'>
                                            <div className='row'>
                                                <div className='col-md-5'>
                                                    <div className='box4boxLeft'>
                                                        <div className='icon icon1'>
                                                            <img src="automation-144-1.png"></img>
                                                        </div>
                                                        <div className='icon icon2'>
                                                            <img src="automation-144-3.png"></img>
                                                        </div>
                                                        <div className='icon icon3'>
                                                            <img src="automation-144-2.png"></img>
                                                        </div>
                                                        <h3>What is hapening now?</h3>
                                                        <ol>
                                                            <li>Is there a defect in our product?
                                                                <div>why is there a defect</div>
                                                            </li>
                                                            <li>is the line failing?
                                                                <div>why is it failing</div>
                                                            </li>
                                                            <li>How can i fix the problems to keep
                                                                <div>the line up?</div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <div className='col-md-7'>
                                                    <div className='box4boxRight'>
                                                        <div className='icon icon1'>
                                                            <img src="automation-144-4.png"></img>
                                                        </div>
                                                        <div className='icon icon2'>
                                                            <img src="automation-144-5.png"></img>
                                                        </div>
                                                        <h3>What is going to happen?</h3>
                                                        <ol>
                                                            <li>When is a failure going to happen?
                                                                <div>Why? How can i fix it?</div>
                                                            </li>
                                                            <li>Where will the failure happen?
                                                                <div>How do i fix it?</div>
                                                            </li>
                                                            <li>When there will be a defect in our product?
                                                                <div>Why? how can i fix it?</div>
                                                            </li>
                                                            <li>When will a part expire?
                                                                <div>Why? How can i fix it?</div>
                                                            </li>
                                                            <li>How long will a part last within our tolerance range
                                                                <div>Why? how can i fix it?</div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="border-left">MindSense Architecture Schema How do we integrate?</h5>
                                        <img loading="lazy" src="Group 3702 (2).png" class="img-fluid" alt=""/>
                                        <h5 class="border-left"><b>MindSense - Line Startup Platform</b> <br/> Speed up
                                            time to production significally</h5>
                                        {/* <img loading="lazy" src="Group 3702 (3).png" class="img-fluid" alt="" /> */}
                                        <div className='col-lg-12 my-4 automationPage box6'>
                                            <div className='row top-right-radius' style={{background: "#f1f8fe"}}>
                                                <div className='col-lg-3 col-md-3 showMobileOnly'>
                                                    <div className='img'>
                                                        <img loading="lazy" src="Line Startup Platform-img.jpg"
                                                             class="img-fluid my-xs-4" alt=""/>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9 col-md-9'>
                                                    <div className='content'>
                                                        <h6>Line Startup Platform</h6>
                                                        <p>MD Sense is our unique platform designed for intelligent
                                                            asset management, monitoring and control, predictive
                                                            analytics, computer vision, safety, and reliability of
                                                            manufacturing plants. With MindSense, all your plant
                                                            managers, maintenance crew, and reliability engineers can
                                                            rapidly investigate and share analyses from plant data to
                                                            find insights and answer questions from real-time data and
                                                            workflows. Using AI to analyze millions of data points, we
                                                            help you move from reactive maintenance to predictive
                                                            maintenance giving you complete operational</p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-3 hideMobileOnly'>
                                                    <div className='img'>
                                                        <img loading="lazy" src="Line Startup Platform-img.jpg"
                                                             class="img-fluid my-xs-4" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="border-left">MindSense – Inventory Prediction Platform </h5>
                                        {/* <img loading="lazy" src="Group 3702 (4).png" class="img-fluid" alt="" /> */}
                                        <div className='col-lg-12 my-4 automationPage box6'>
                                            <div className='row top-left-radius' style={{background: "#f1f8fe"}}>
                                                <div className='col-lg-3 col-md-3'>
                                                    <div className='img'>
                                                        <img loading="lazy" src="Inventory Prediction Platform-img2.jpg"
                                                             class="img-fluid my-xs-4" alt=""/>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9 col-md-9'>
                                                    <div className='content'>
                                                        <h6>Inventory Predictions </h6>
                                                        <p>Maintaining a full inventory of raw materials or spare parts
                                                            is difficult for manufactures. Our Deep Learning models are
                                                            used to predict when the inventory is needed while helping
                                                            you understand why the inventory is in more demand and plan
                                                            for long-term remedies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="border-left">On-Shelf Availability</h5>
                                        {/* <img loading="lazy" src="Group 3703.png" class="img-fluid" alt="" /> */}
                                        <div className='col-lg-12 my-4 automationPage box6'>
                                            <div className='row top-right-radius' style={{background: "#f1f8fe"}}>
                                                <div className='col-lg-3 col-md-3 showMobileOnly'>
                                                    <div className='img'>
                                                        <img loading="lazy" src="On-Shelf Availability-img.jpg"
                                                             class="img-fluid my-xs-4" alt=""/>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9 col-md-9'>
                                                    <div className='content'>
                                                        <h6>On Shelf Availability</h6>
                                                        <p>Running out of stock is costly, affects brands' reputation
                                                            and loss of customers. Nevertheless, having stock that is
                                                            overproduced is also expensive. Our Deep Learning models can
                                                            predict on-shelf availability in stores and understand why
                                                            out-of-stock errors are happening.</p>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-3 hideMobileOnly'>
                                                    <div className='img'>
                                                        <img loading="lazy" src="On-Shelf Availability-img.jpg"
                                                             class="img-fluid my-xs-4" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="border-left">What do we need to be successful?</h5>
                                        {/* <img loading="lazy" src="Group 3704.png" class="img-fluid" alt="" /> */}
                                        <div className='automationPage box7'>
                                            <ul className='box7List'>
                                                <li><img src="tick.png"/> Collect sensor data in a tag-based Historian
                                                </li>
                                                <li><img src="tick.png"/> Collect labeled manufacturing platform data in
                                                    a Line Event Detection System (LEDS, CMMS), or similar systems
                                                </li>
                                                <li><img src="tick.png"/> Share Historian settings</li>
                                                <li><img src="tick.png"/> Data-driven cultural, willing to support the
                                                    integrity of the collected data and action based on predictions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a6" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5 class="border-left">Industries</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div
                                                    className="row justify-content-between flex-wrap automationPage box8">
                                                    <div className="col-lg-4">
                                                        <Link to="/engergy">
                                                            {/* <img loading="lazy" src="c-1.png" class="img-fluid" alt="" /> */}
                                                            <div className='whatWeOffer'>
                                                                <img src="Energy and Utilities-icon.png"></img>
                                                                <h6>Energy and Utilities </h6>
                                                                <p>Analyze historical and real-time data to monitor
                                                                    asset health, warn of impendent failures, plan
                                                                    maintenance procedures and schedules. Use analytics
                                                                    to get information in the context of grid
                                                                    operations. Estimate impending effects on the grid
                                                                    by aggregating and analyzing asset performance
                                                                    data.</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link to="/manufacturing">
                                                            {/* <img loading="lazy" src="c-2.png" class="img-fluid" alt="" /> */}
                                                            <div className='whatWeOffer'>
                                                                <img src="manufacturing-icon.png"></img>
                                                                <h6>Manufacturing</h6>
                                                                <p>Improve visibility of asset performance to achieve
                                                                    safety, reliability, and productivity improvements.
                                                                    Use AI-driven insights to identify quality issues
                                                                    and prioritize maintenance to stop failures before
                                                                    they occur.</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link to="/transport">
                                                            {/* <img loading="lazy" src="c-3.png" class="img-fluid" alt="" /> */}
                                                            <div className='whatWeOffer'>
                                                                <img src="Travel and transportation-icon.png"></img>
                                                                <h6>Travel and transportation</h6>
                                                                <p>Manage and maintain critical assets to improve asset
                                                                    life, and plan maintenance procedures and schedules
                                                                    more effectively to meet safety, regulatory, and
                                                                    customer demands.</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* <img loading="lazy" src="Group 3706.png" class="img-fluid" alt="" /> */}
                                                <div className='caseSudies'
                                                     style={{backgroundImage: "url(appolinary-kalashnikova-WYGhTLym344-unsplash1.jpg)"}}>
                                                    <div className='textBox'>
                                                        <span className='subs'>Case Studies</span>
                                                        <h3>What technologies are driving Industry 4.0?</h3>
                                                        <Link to={"/contact"}>
                                                            Talk to our Expert <IoArrowForward size={25}
                                                                                               className="caseSudies-icon"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a8" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Industrial Internet of Things (IIoT)</h1>
                                        <h5 class="border-left">Build a resilient, adaptive, and intelligent neural
                                            manufacturing enterprise</h5>
                                        <div class="row">
                                            <div class="col-lg-9">
                                                <p>The impact of digital technologies like AI, cloud, and automation to
                                                    achieve new levels of agility, efficiency, quality, and
                                                    sustainability in the manufacturing industry will create a value
                                                    chain that operates like a neural network - An intensely networked
                                                    set of collaborative partners aligned to a purpose-driven ecosystem.
                                                    This will make the future manufacturing enterprise -</p>
                                                {/* <img loading="lazy" src="Group 3707.png" class="img-fluid" alt="" /> */}
                                                <div className='automationPage box7'>
                                                    <ul className='box7List'>
                                                        <li><img src="tick.png"/> Resilient through connected,
                                                            cognitive, and collaborative supply chains.
                                                        </li>
                                                        <li><img src="tick.png"/> Adaptive through an agile response to
                                                            market demand by personalizing products and services.
                                                        </li>
                                                        <li><img src="tick.png"/> Driven by engaging with partners
                                                            across industries to deliver a frictionless experience to
                                                            end customers.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <img loading="lazy" src="Rectangle 550.jpg" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <img loading="lazy" src="Group 3708.png" class="img-fluid my-4" alt=""/>
                                        <p>Mindgrpah works with you to co-create a roadmap to custom solutions which
                                            help you – set your direction based on a proven Industry 4.0 architecture;
                                            achieve scale by consistently deploying advanced shop floor technologies;
                                            and maximize value by process improvement.</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a9" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <h1>Industrial Internet of Things (IIoT)</h1>
                                    <h5 class="border-left">Our Solutions</h5>
                                    {/* <img loading="lazy" src="Group 3709.png" class="img-fluid" alt="" /> */}
                                    <div className='automationPage box7'>
                                        <ul className='box7List'>
                                            <li><img src="tick.png"/> Resilient through connected, cognitive, and
                                                collaborative supply chains.
                                            </li>
                                            <li><img src="tick.png"/> Adaptive through an agile response to market
                                                demand by personalizing products and services.
                                            </li>
                                            <li><img src="tick.png"/> Driven by engaging with partners across industries
                                                to deliver a frictionless experience to end customers.
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <img loading="lazy" src="Group 3706.png" class="img-fluid" alt="" /> */}
                                    <div className='caseSudies'
                                         style={{backgroundImage: "url(appolinary-kalashnikova-WYGhTLym344-unsplash1.jpg)"}}>
                                        <div className='textBox'>
                                            <span className='subs'>Case Studies</span>
                                            <h3>What technologies are driving Industry 4.0?</h3>
                                            <Link to={"/contact"}>
                                                Talk to our Expert <IoArrowForward size={25}
                                                                                   className="caseSudies-icon"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-10" role="tabpanel"
                                     aria-labelledby="v-pills-a10-tab">
                                    <div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <p>Robotic Process Automation (RPA) is transforming the world of
                                                    business applications from simple, back-office task automation to
                                                    handling complex, real-time business processes. Coupling RPA with a
                                                    blend of AI technologies, such as computer vision, speech
                                                    recognition, and Natural language processing, organizations can
                                                    automate higher-order tasks that in the past required the perceptual
                                                    and judgment capabilities of a human. </p>
                                            </div>
                                            <div class="col-lg-6">
                                                <img loading="lazy" src="Robotic process Automation-img.jpg"
                                                     class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <h5 class="border-left">How AI powered automation will benefit your
                                            business </h5>
                                        {/* <img loading="lazy" src="Group 3710.png" class="img-fluid" alt="" /> */}
                                        <div className='automationPage box7'>
                                            <ul className='box7List'>
                                                <li><img src="tick.png"/> Augment workforce with digital works</li>
                                                <li><img src="tick.png"/> Automate your core operations to improve
                                                    efficiency and productivity
                                                </li>
                                                <li><img src="tick.png"/> Create business applications easily to
                                                    delivery better customer experience
                                                </li>
                                                <li><img src="tick.png"/> Apply actionable insights using deep learning
                                                    to obtain AI powered recommendations for shared data
                                                </li>
                                                <li><img src="tick.png"/> Apply AI to process and task for more agile
                                                    operations and continuous improvement
                                                </li>
                                                <li><img src="tick.png"/> Measure impact with intelligent analytics</li>
                                            </ul>
                                            <div className='automationPage tagLine'>
                                                {`{It is estimated that enterprises currently implementing intelligent automation achieved an average cost reduction of 27% and an increase in revenue of 11% }`}
                                            </div>
                                        </div>
                                        <p class="my-4">Organizations adopting intelligent automation usually face three
                                            biggest barriers to implementation - the identification of appropriate use
                                            cases, data quality, and preparing the workforce for the impact of
                                            automation</p>
                                        {/* <img loading="lazy" src="Group 3711.png" class="img-fluid" alt="" /> */}
                                        <div className='row automationPage box9'>
                                            <div className='col-md-4'>
                                                <div className='whatWeOffer'>
                                                    <img src="Move forward with some help-icon.png"></img>
                                                    <h6>Move forward with some help</h6>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='whatWeOffer'>
                                                    <img src="Move forwardGroup 3666.png"></img>
                                                    <h6>Move forward by letting us do it for you</h6>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='whatWeOffer'>
                                                    <img src="industry partners-icon.png"></img>
                                                    <h6>Move forward with industry partners</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Mindgraph RPA vertical excels in delivering the next generation of scalable
                                            and sustainable automation solutions. We can help you streamline operations
                                            and reduce costs by automating tedious rules-based processes. We integrate
                                            custom-built components for data extraction, content processing, and
                                            decision models by deploying RPA, cognitive process automation, and dynamic
                                            workflows to leverage AI-driven decisions. The result is the ability for
                                            your organization to deliver smarter business processes efficiently through
                                            simplification, AI-infused orchestration, content automation, and cognitive
                                            decisions.</p>
                                        <h5 class="border-left">Key customer Benefits </h5>
                                        {/* <img loading="lazy" src="Group 3712.png" class="img-fluid" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb1'>
                                                                <p>Intelligence with built-in explainable AI to look
                                                                    across your events and data to discover patterns</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb2'>
                                                                <p>One architecture for IT and business automation </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb3'>
                                                                <p>Defined deliverables to meet your needs</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb4'>
                                                                <p>Easy to Integrate across the functions</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='keyBoxes customBoxes cb5'>
                                                                <p>Flexible pricing model tuned for enterprises</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="my-4">If you are planning to start your RPA journey or trying to
                                            implement automation into your existing RPA systems – our Experts can help
                                            you.</p>
                                        {/* <img loading="lazy" src="Group 3706.png" class="img-fluid" alt="" /> */}
                                        <div className='caseSudies'
                                             style={{backgroundImage: "url(appolinary-kalashnikova-WYGhTLym344-unsplash1.jpg)"}}>
                                            <div className='textBox'>
                                                <span className='subs'>Case Studies</span>
                                                <h3>What technologies are driving Industry 4.0?</h3>
                                                <Link to={"/contact"}>
                                                    Talk to our Expert <IoArrowForward size={25}
                                                                                       className="caseSudies-icon"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Automation;
