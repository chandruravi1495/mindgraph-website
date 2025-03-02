import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IoCheckmarkCircleOutline,IoArrowForward } from 'react-icons/io5';
import {Link} from 'react-router-dom';

const keyBenfits = [
    {
        "p":"Integrate, standardize, and prioritize structured and unstructured processes into workflows for easier access across the business functions "
    },
    {
        "p":"Automate at scale while delivering a consistent experience with reusable workflows"
    },
    {
        "p":"Improve customer service and speedup transactional workflows and case resolutions."
    },
    {
        "p":"Improve decision making with advanced analytics to identify the best action to resolve cases quickly and improve collaboration between teams "
    },
]
const box3 = [
    {
        "title":"Rapid Development",
        "icon":"Rapid-Development-icon.png",
        "p":"From development to deployment, our focus is on simplicity and reduced development effort, which results in fewer trouble tickets, reducing operational risks, and lowering long-term operating costs. "
    },
    {
        "title":"Operational Excellence",
        "icon":"Operational-Excellence-icon.png",
        "p":"Mindgraph’s BFO (Business Flow Orchestrator) uses partner Integration Engine back-office framework for Data, Process Application, and API integration with automatic error handling, which provides full scalability, reduced order-to-cash cycle, and very low costs. "
    },
    {
        "title":"Agile Process Orchestration",
        "icon":"Agile-Process-Orchestration-icon.png",
        "p":"Our focus on real automatic error handling of technical errors along with complete operational transparency results in increased business flexibility and resources optimization with high process quality."
    },
    {
        "title":"Scalable & Future-Proof operations",
        "icon":"Scalable&Future-Proof-operations-icon.png",
        "p":"Designed for maximum business flexibility and tailored to the user’s needs, our solutions enable GDPR, IoT, and Industry 4.0-compliant processing."
    },
]
const box2 = [
    {
        "title":"Digital Marketing Touchpoints",
        "list":[
            {"p":"Predictive marketing automation"},
            {"p":"Personalized Campaign"},
            {"p":"Advertising"},
            {"p":"Influencer"},
            {"p":"Relevance"},
            {"p":"Engagement"},
            {"p":"UX / UI"},
            {"p":"Recommendation"},
            {"p":"Promotion"},
            {"p":"Filtering Fake reviews"},
            {"p":"AI-powered social listening"},
            {"p":"Social Media"},
            {"p":"Influencer"},
            {"p":"Blogs"},
            {"p":"Ratings"},
            {"p":"Comments"},
        ]
    },
    {
        "title":"Personalized buying experience",
        "list":[
            {"p":"Omnichannel"},
            {"p":"Customized Customer Experience Management"},
            {"p":"Personalized product experience"},
            {"p":"Smart Relevant Reviews"},
            {"p":"Tailored Product Information"},
            {"p":"Mirroring the Instore-experience online"},
            {"p":"Flexible & Automated Pricing"},
            {"p":"Cross-selling / Upselling"},
            {"p":"Cart / Order Management"},
            {"p":"Closing the returns loop"},
            {"p":"Customer Service BOTS"},
        ]
    },
    {
        "title":"Customer Data Analytics",
        "list":[
            {"p":"Customer Retention"},
            {"p":"Customer Retargeting"},
            {"p":"Customer Journey Analytics "},
            {"p":"Customer Buying Behaviour"},
            {"p":"Loyalty Management"},
            {"p":"Customer Survey and Data Analytics"},
            {"p":"Sales Forecasting"}
        ]
    },
    {
        "title":"Security and Supply Chain",
        "list":[
            {"p":"Portfolio or Executive View"},
            {"p":"Story Telling Dashboard"},
            {"p":"Geospatial Intelligence"},
            {"p":"Entity 360 Degree Analysis"},
            {"p":"Statistical Analysis of Data"},
            {"p":"Outlier Analysis"},
            {"p":"Scenario Analysis – If Else"},
        ]
    },
]
function Digitalization() {

    const [matches,setMatches] = React.useState(window.matchMedia("(min-width: 768px)").matches)

    React.useEffect(() => {
        const handler = e => setMatches(e.matches);
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler)
        window.scrollTo(0,0)
    },[])


  return (
    <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header image="digi-bnr.jpg" height={55} title="Reimagine Possibilities with Digital-Led Growth"  />
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-3 border-end nav-main">
                            <h1>Digitalization</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button class="nav-heading mt-4" onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}  id="v-pills-a1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a1" type="button" role="tab" aria-controls="v-pills-a1" aria-selected="false">1. Digital Commerce </button>
                                <button class="nav-heading mt-4" onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}  id="v-pills-a2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a2" type="button" role="tab" aria-controls="v-pills-a2" aria-selected="false">2. Digital Process Automation  </button>
                                <button class="nav-heading mt-4" onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}  id="v-pills-a3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a3" type="button" role="tab" aria-controls="v-pills-a3" aria-selected="false">3. Automation and Chatbots </button>
                            </div>
                        </div>
                        <div className="col-lg-9 nav-main">
                            <div class="tab-content" id="v-pills-tabContent ">
                                <div class="tab-pane fade show active" id="v-pills-a1" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Digital Commerce </h1>
                                        <h5>Finding customers through the doors of social distancing   </h5>
                                        <p>Unlock the value of your data in new ways and accelerate your journey to AI with our proven Data Science powered toolkit MADI. Mindgraph Advanced-Data Innovation (MADI) approach is a confluence of Innovation, Algorithms, and Experience designed to exhibit newer values that businesses would have never imagined. Our strength lies in packaging clustered values together as Product which is more manageable and shareable. In the process, we open opportunities to Co-Innovate and develop Intellectual Property (Patents, Trademarks & Copyright) for the organization. We have delivered several such successful engagements across industries such as Airport, Telecom, Banks, Microfinance, Airlines, and Healthcare </p>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>The COVID-19 pandemic has created a fundamental and long-term shift in consumer behavior. As the Next Normal is being established, enterprises are reimagining their entire e-commerce ecosystem with a heightened focus on the digital capabilities of the customer journey. </p>
                                            </div>
                                            <div class="col-lg-8">
                                                <p>Mindgraph, with a deep understanding of the consumer in a digital world, provides integrated digital commerce transformation services using emerging technologies like AI, Machine Learning, Bot Automation, and Analytics. Our integrated set of services and solutions for Digital commerce enables enterprises to turn shopping applications into a hyper-personalized emotional shopping experience to deepen customer engagement and increase loyalty. Additionally, our Explainable AI services provide explainability and transparency in marketing and campaigns, reasons for predicted outcomes, and scenario simulations.  Mindgraph’s digital commerce services can be tailored to accelerate your journey, and offer a never-before-seen experience to your customers.</p>
                                            </div>
                                            <div class="col-lg-4">
                                                <img loading="lazy" src="Digital Commerce-img.jpg" class="img-fluid my-4" alt="" />
                                            </div>
                                        </div>
                                        <h5 class="border-left">What we offer </h5>
                                        <img loading="lazy" src="Our Approach Model-img.png" class="img-fluid my-4" alt="" />
                                        {/* <img loading="lazy" src="Group 3729.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box2.map((el,i)=>{
                                                        return(
                                                            <div className='col-md-3' key={i}>
                                                                <div className='smallBoxes'>
                                                                    <h6>{el.title}</h6>
                                                                    {
                                                                        el.list.length &&
                                                                        <ul>
                                                                            {
                                                                                el.list.map((e,i)=>{
                                                                                    return(
                                                                                        <li><IoCheckmarkCircleOutline size={15} className="icon-orange" />{e.p}</li>
                                                                                    )
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
                                        <h5 class="border-left">Key customer  Benefits </h5>
                                        {/* <img loading="lazy" src="Group 3730.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb1'>
                                                            <p>Service offerings to suit every stage of digital commerce transformation</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb2'>
                                                            <p>Scalable solutions creating a meaningful and measurable impact on your business</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb3'>
                                                            <p>Functional expertise across the digital commerce lifecycle journey</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb4'>
                                                            <p>Responsibly harnessed data with  our Explainable AI </p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='keyBoxes customBoxes cb5'>
                                                            <p>Strategic partnership with leading digital commerce technology product vendors</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='keyBoxes customBoxes cb6'>
                                                    <p>We take a human-centered approach by keeping your people top of mind and the experience of your users first. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='caseSudies' style={{backgroundImage:"url(appolinary-kalashnikova-WYGhTLym344-unsplash1.jpg)"}}>
                                                <div className='textBox'>
                                                    <span className='subs'>Case Studies</span>
                                                    <h3>Get Started With Datatization</h3>
                                                    <Link to={"/contact"}>
                                                        TALK TO OUR DATA SCIENCE EXPERT <IoArrowForward size={25} className="caseSudies-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a2" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Digital Process Automation  </h1>
                                        <h5>Scale your process transformation with data-driven insights and automation   </h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>Digital Process Automation (DPA) is a key for today’s organizations to optimize business processes, innovate, and become adaptive. It enables hyper-productivity among the digital workforce, transforming the organization into digital, data-driven businesses through flexible and fluid strategies                        </p>
                                            </div>
                                            <div class="col-lg-8">
                                                <p>At Mindgraph, our solutions are designed to re-engineer processes around customer needs, deliver seamless customer experience, empower your workforce to make data-driven decisions, and quickly adapt to changing expectations while improving efficiency, reducing cost, and managing risk. We help you automate your repetitive tasks, process orchestration across multiple systems, and rapidly build user-centric applications. Our intelligent DPA solutions deliver valuable insights with predictive analytics and help you build a responsive business value chain. </p>
                                            </div>
                                            <div class="col-lg-4">
                                                <img loading="lazy" src="Rectangle 550.jpg" class="img-fluid my-4" alt="" />
                                            </div>
                                        </div>
                                        <h5 class="border-left">Our Focus </h5>
                                        <img loading="lazy" src="Our Focus-img.png" class="img-fluid my-4" alt="" />
                                        <h5 class="border-left">Why Us  </h5>
                                        {/* <img loading="lazy" src="Group 3731.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box3.map((el,i)=>{
                                                        return(
                                                            <div className='col-md-3' key={i}>
                                                                <div className='whatWeOffer digitalOffer'>
                                                                    <img src={el.icon}></img>
                                                                    <h6>{el.title}</h6>
                                                                    <p>{el.p}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h5 class="border-left">Key customer  Benefits  </h5>
                                        {/* <img loading="lazy" src="Group 3732.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                {
                                                    keyBenfits.map((el,i)=>{
                                                        return(
                                                            <div className='col-md-3' key={i}>
                                                                <div className='keyBoxes digiKB'>
                                                                <p>{el.p}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='caseSudies' style={{backgroundImage:"url(appolinary-kalashnikova-WYGhTLym344-unsplash1.jpg)"}}>
                                                <div className='textBox'>
                                                    <span className='subs'>Case Studies</span>
                                                    <h3>Get Started With Digitalization</h3>
                                                    <Link to={"/contact"}>
                                                        TALK TO OUR DATA SCIENCE EXPERT <IoArrowForward size={25} className="caseSudies-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a3" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Automation and Chatbots   </h1>
                                        <h5>Amplify Human Ingenuity with Technology for Flexibility, Effectiveness, and Reliability </h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>Chatbots or conversation AI is a gamechanger for customer experience and corporate support functions in the organization. Customer service space was already going through a transformation, but it has witnessed a multi-fold acceleration over the last couple of years. Further to this, the addition of new dimensions such as employees experience and partner experience has made CX services one of the most important aspects of a business strategy. AI-driven Chatbots can make automating CX services effortless, scalable, and cost-effective while having minimal human interference from the organization’s end. </p>
                                            </div>
                                            <div class="col-lg-8">
                                                <p>At Mindgraph, we partnered with industry-leading CX automation platform providers to offer cognitive, customized, and scalable solutions to our customers. Our 5-step framework is a simple and intuitive process for developing chatbot solutions allowing business to transform their tasks into value-added work</p>
                                            </div>
                                            <div class="col-lg-4">
                                                <img loading="lazy" src="Automation and Chatbots-img.jpg" class="img-fluid my-4" alt="" />
                                            </div>
                                        </div>
                                        <img loading="lazy" src="Automation and Chatbots-img-flow.jpg" class="img-fluid my-4" alt="" />
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

export default Digitalization;
