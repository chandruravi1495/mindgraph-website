import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const box3 = [
    {
        "title": "Drive app-centric ITOps",
        "icon": "enter-Group(2).png",
        "p": "Defining applications and deployment policies consistently across environments creates a single source of truth. This allows teams to agree on facts about the system, how to manage it, and bring processes together into DevSecOps workflow "
    },
    {
        "title": "Deliver targeted insights ",
        "icon": "enter-Group(1).png",
        "p": "Deliver insights where your operations team work using predictive modeling to alert the Ops team to incidents. Delivering those alerts in real-time via slack or ChatOps allows incidents to be resolved before they impact the end-user."
    },
    {
        "title": "Incorporating AI across all IT operations ",
        "icon": "enter-Group.png",
        "p": "With AI at the core of your IT operations, you can apply it across all of your business workflows including, incident management, security governess, cost and asset management, and others. "
    },
]

function Enterprises() {

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
            <Header image="ent.jpg" height={55} title="enterprise SOLUTIONS & PRODUCTS"/>
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>Enterprise SOLUTIONS & PRODUCTS</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button class="nav-heading"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a2"
                                        type="button" role="tab" aria-controls="v-pills-a2" aria-selected="false">1.
                                    Mathops
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a3"
                                        type="button" role="tab" aria-controls="v-pills-a3" aria-selected="false">2.
                                    Customer Success
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a4"
                                        type="button" role="tab" aria-controls="v-pills-a4"
                                        aria-selected="false">Omnichannel Customer experience
                                </button>
                                <button class="nav-link nav-main-link "
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a5"
                                        type="button" role="tab" aria-controls="v-pills-a5"
                                        aria-selected="false">Digital Customer Onboarding
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a6"
                                        type="button" role="tab" aria-controls="v-pills-a6" aria-selected="false">3.
                                    Blockchain/Smart Operations
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a7"
                                        type="button" role="tab" aria-controls="v-pills-a7" aria-selected="false">4.
                                    Cybersecurity
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a8"
                                        type="button" role="tab" aria-controls="v-pills-a8" aria-selected="false">5.
                                    Talent Management
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a9-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a9"
                                        type="button" role="tab" aria-controls="v-pills-a9" aria-selected="false">6.
                                    Mindgraph Academy
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8 nav-main">
                            <div class="tab-content" id="v-pills-tabContent ">
                                <div class="tab-pane fade show active" id="v-pills-a2" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Mathops</h1>
                                        <h5 className="border-left">Our IT ops expert AI is shaping the future of IT
                                            operations</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>Leverage AI to simplify IT operations and to speed-up and automate
                                                    problem resolution in a complex modern IT environment. When AI is
                                                    applied to IT operations, AIOps develops advanced search
                                                    capabilities and provides teams with the ability to generate
                                                    extensive analysis from IT data like topology and logs. AIOps
                                                    enables IT operations teams to respond more quickly—even
                                                    proactively—reducing human error and downtime while optimizing cost,
                                                    improving application resiliency, and managing risk more
                                                    efficiently.</p>
                                            </div>
                                            <div class="col-lg-12">
                                                <img loading="lazy" src="map-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <h5 className="border-left">Mindgraph’s MathOps helps you to confidently
                                            identify anomalies and solve incidents across mission-critical
                                            workloads.</h5>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>Mindgraph can help enterprises deploy advanced, explainable AI across
                                                    the ITOps toolchain to maximize efficiency, reduce cost, and
                                                    increase the resiliency and security you need to drive meaningful
                                                    end-user experience. So that can transform your IT maturity from
                                                    reactive to intelligent, proactive, self-healing, and outcome
                                                    driven. </p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>Our MathOps platform collects and interprets data across your IT
                                                    estate within a single system of record. The data is collected from
                                                    IT infrastructure, cloud and complex container-based resources,
                                                    vulnerabilities, logs, metrics, traces, and events. MathOps platform
                                                    with integrated machine learning capabilities helps you turn noise
                                                    alerts into actions, reduce tickets, and find anomalies with less
                                                    guesswork. With MathOps you can accelerate incident resolutions by
                                                    automating cross-team workflows, eliminating unnecessary manual
                                                    processes and multiple handoffs for DevOps and SRE teams.</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <img loading="lazy" src="map-2.jpg" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <img loading="lazy" src="map-3.png" alt="" className="img-fluid"/>
                                        <h5 className="border-left">MathOps – You Can Use It To</h5>
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box3.map((el, i) => {
                                                        return (
                                                            <div className='col-md-4' key={i}>
                                                                <div className='whatWeOffer'>
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
                                        <h5 className="border-left">Key customer Benefits </h5>
                                        <div className='col-md-12 enterpriseBoxes'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb3'>
                                                                <p>Predict future state with deep and cognitive learning
                                                                    capabilities</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb4'>
                                                                <p>Deep visualization</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='keyBoxes customBoxes cb5'>
                                                                <p>Eliminate tedious and manual tasks through
                                                                    automation</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb1'>
                                                                <p>Advanced search capabilities and extensive
                                                                    analysis</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb2'>
                                                                <p>Easy to Integrate across the functions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a3" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Customer Success</h1>
                                        <h5 class="border-left">Ensure customer happiness every time to drive your
                                            growth</h5>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <p>Customer retention is the critical aspect of differentiation for the
                                                    technology and SaaS companies, separating the top performers from
                                                    their competitors. Companies with strong customer success grow
                                                    faster by efficiently fighting off the revenue headwinds caused by
                                                    the churn. We at Mindgraph made predicting your customer churn
                                                    easier than ever before. We employ advanced data-driven AI-powered
                                                    solutions to help you program manage all accounts and users with a
                                                    personalized touch. Our systems monitor your product usage and alert
                                                    you to a potential future churn risk so that you can timely
                                                    intervene to take measures for saving the account.</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <img loading="lazy" src="ct-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div className="col-lg-12">
                                                <p>Your success managers will be notified if the customer stops logging
                                                    in, an account ceases to use a module, use of a feature falls lower
                                                    than the threshold, overdue of renewal or payments, and many
                                                    more.</p>
                                            </div>
                                        </div>
                                        {/* <h5 class="border-left">Ensure customer happiness every time to drive your growth</h5> */}
                                        <h5 class="border-left">Key Customer Benefits</h5>
                                        {/* <img loading="lazy" src="ct-2.png" class="img-fluid" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb3'>
                                                                <p>Send customer regular notifications on product
                                                                    usage </p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb4'>
                                                                <p>Creates a health score</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='keyBoxes customBoxes cb5'>
                                                                <p>Create templates or automation tools </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb1'>
                                                                <p>Points you to areas where your attention is needed
                                                                    the most</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='keyBoxes customBoxes cb2'>
                                                                <p>Conduct regular training materials or programs with
                                                                    users</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a4" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Customer Success</h1>
                                        <h5 class="border-left">Omnichannel Customer Experience </h5>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <p>The post-covid world requires organizations to make themselves widely
                                                    available and knowledgeable of their customers. However, many
                                                    companies grapple to develop and implement a digital customer
                                                    service strategy that truly meets customers on their terms. This
                                                    strategy would necessitate driving customer satisfaction and loyalty
                                                    at all times and the omnichannel approach is a way forward for
                                                    achieving it.</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <img loading="lazy" src="exp-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div className="col-lg-12">
                                                <p>However, omnichannel is more than communicating with your customers
                                                    on every single channel. For instance - Just adding more channels
                                                    and integrating them with existing setups to keep up with customers’
                                                    channel preferences or to keep pace with competitors’ service
                                                    offerings has not proven to be very beneficial for the organizations
                                                    to improve customer satisfaction or the company’s bottom line. </p>
                                                <img loading="lazy" src="exp-2.png" alt="" className="img-fluid mt-3"/>
                                            </div>
                                            <img loading="lazy" src="exp-3.jpg" alt="" className="img-fluid mt-3"/>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p>At Mindgraph, we help organizations rethink their overall digital
                                                        customer service strategy. We collaborate with you to develop a
                                                        true omnichannel dominant approach that prioritizes resolutions
                                                        across channels and ensures seamless transitions from one
                                                        channel to the next, providing consistent experiences across all
                                                        of them. </p>
                                                    <p>We help your customer service managers to identify the bullseye
                                                        with the right approach, advanced technologies, and relevant
                                                        tools.</p>
                                                </div>
                                                <div className="col-lg-12">
                                                    {/* <img loading="lazy" src="exp-4.png" alt="" className="img-fluid mt-3" /> */}
                                                    <div className='row'>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <div className='boxes'>
                                                                <div>
                                                                    <img src="enterprise-1-2-1.png"></img>
                                                                    <div>Channel Technologies</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <div className='boxes'>
                                                                <div>
                                                                    <img src="enterprise-1-2-2.png"></img>
                                                                    <div>Customer Analytics</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <div className='boxes'>
                                                                <div>
                                                                    <img src="enterprise-1-2-3.png"></img>
                                                                    <div>Infrastructure Technology</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <div className='boxes'>
                                                                <div>
                                                                    <img src="enterprise-1-2-4.png"></img>
                                                                    <div>Customer Enagagement tools</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <div className='boxes'>
                                                                <div>
                                                                    <img src="enterprise-1-2-5.png"></img>
                                                                    <div>Employee Engagement tools</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>AI-powered advanced data and analytics solutions are engaged for
                                                        collecting and harnessing the information gained in every
                                                        interaction across channels and are made available to the agents
                                                        in a single dashboard view. This helps deliver contextual and
                                                        targeted hyper personalization along with quick and smart
                                                        resolutions. With a strong understating of customer preferences,
                                                        companies can go a step further to explore the Proactive
                                                        Customer Service Model. </p>
                                                    <p>Mindgraph omnichannel strategy approach revolves around building
                                                        a futuristic contact center by using automation, cloudification,
                                                        and digital transformation to deliver quick and consistent
                                                        solutions by leveraging an ideal combination of human-bot
                                                        capabilities. Our AI and analytic tools help you drive smooth
                                                        transitions across various touchpoints and channels while
                                                        enhancing personalization and elevating experience through
                                                        contextual interactions.</p>
                                                    <img loading="lazy" src="exp-5.png" alt=""
                                                         className="img-fluid mt-3"/>
                                                    <p>A true omnichannel service strategy drives stronger, consistent,
                                                        more meaningful customer relationships, increases revenue
                                                        opportunity, and improves operational performance. Let us assist
                                                        you to delight your customers <b>Get in touch</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a5" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <h1>Customer Success</h1>
                                    <h5 class="border-left">Digital customer onboarding</h5>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p>Technology advances have changed the way businesses interact with their
                                                customers. Apart from the time, cost, and compliance challenges of
                                                traditional onboarding processes - the moment of introducing a company’s
                                                products and services to its customers has become extremely vital. This
                                                moment could have a profound impact on the customers’ relationship with
                                                the company, and their likelihood of renewing the relationship whilst
                                                recommending the company’s products and services to others.</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <img loading="lazy" src="onboard-1.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-12">
                                            <p>Mindgraph aims to make your user’s first experience with your product
                                                unforgettable. We developed a 4A strategy framework for our clients to
                                                begin a smooth digital transformation journey. By keeping data at the
                                                heart of the digital onboarding of customers, we segmented the
                                                end-to-end process into four key functions – Accumulation, Absorption,
                                                Augmentation, and Account creation. Our framework is designed to deliver
                                                results across the lifecycle of customer management. </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <img loading="lazy" src="onboard-2.png" alt="" className="img-fluid my-3"/>
                                            <p>Customer experience is the key and therefore seamless transition of user
                                                navigation and omnichannel capabilities are important. Easy to use
                                                app-based, online, and mobile channel compatibility and 24/7 access are
                                                some of the customer's basic expectations. </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 class="border-left">Benefits of partnering with Mindgraph </h5>
                                                {/* <img loading="lazy" src="onboard-3.png" alt="" className="img-fluid mt-3" /> */}
                                                <div className='col-md-12 enterprisePage boxKB'>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='keyBoxes customBoxes cb1'>
                                                                        <p>Increase in conversation rate from trial
                                                                            users to paid customers, </p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='keyBoxes customBoxes cb2'>
                                                                        <p>Reduce customer acquisition costs and create
                                                                            customer loyalty</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='keyBoxes customBoxes cb3'>
                                                                        <p>Demonstrate the value of your product </p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <div className='keyBoxes customBoxes cb4'>
                                                                        <p>Helps you focus on your core activity by
                                                                            automating repetitive tasks </p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-12'>
                                                                    <div className='keyBoxes customBoxes cb5'>
                                                                        <p>Deliver a unified customer view across the
                                                                            organization </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='keyBoxes customBoxes cb6'>
                                                                <p>Advanced analytics help you identify the week and
                                                                    critical areas of service delivery </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a6" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Blockchain</h1>
                                        <h5 class="border-left">Making sense of blockchain in real-world
                                            applications </h5>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <p>Blockchain technology has emerged as a key business enabler for
                                                    organizations in industries, including consumer products,
                                                    manufacturing, financial services, health care, life sciences, and
                                                    the public sector. Mindgraph’s integrated blockchain solutions help
                                                    companies critically evaluate the value of blockchain to their
                                                    business, and ensure smooth strategic deployment, prototyping, and
                                                    product development. We work with industry leading blockchain
                                                    platform and service providers to facilitate quick provisioning of
                                                    networks and underlying infrastructure that accelerates the
                                                    development lifecycle. </p>
                                            </div>
                                            <div className="col-lg-4">
                                                <img loading="lazy" src="bc-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 class="border-left">Our Services </h5>
                                                    <p>1. Blockchain technology – We help our clients design distributed
                                                        ledger technology for both public and private blockchains,
                                                        including custom tokens, individual nodes, hash algorithms, and
                                                        architectures.</p>
                                                    <img loading="lazy" src="bc-2.png" alt=""
                                                         className="img-fluid my-3"/>
                                                    <p>2. Smart Contracts – We program smart contracts for blockchain
                                                        networks, providing decentralized network solutions for the
                                                        power & utility, banking, real estate, and supply chain
                                                        industries. We design smart contracts to register loan
                                                        management and intellectual property, validate insurance
                                                        eligibility, e-KYC, Online mart investment products, Digital
                                                        Payments for Enterprise Business, and Trade Finance
                                                        platforms. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a7" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <div>
                                        <h1>Cyber Security </h1>
                                        <h5>It’s time to create a Cyber Security Advantage </h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>The impact of digital technologies like AI, cloud, and automation to
                                                    achieve new levels of agility, efficiency, quality, and
                                                    sustainability in the manufacturing industry will create a value
                                                    chain that operates like a neural network - An intensely networked
                                                    set of collaborative partners aligned to a purpose-driven ecosystem.
                                                    This will make the future manufacturing enterprise -</p>
                                                {/* <img loading="lazy" src="sc-1.png" class="img-fluid" alt="" /> */}
                                                <div class="col-lg-12 enterprisePage box4 ">
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <div className='list'>
                                                                <img src="Enter-Rectangle536.jpg"/>
                                                                <div className='text'>
                                                                    Manufacturing, Finance & Insurance, Government
                                                                    Agencies, and Utilities are highly vulnerable to
                                                                    cyber attacks
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className='list'>
                                                                <img src="Enter-Rectangle627.jpg"/>
                                                                <div className='text'>
                                                                    Attackers exploit security vulnerabilities,
                                                                    Scan-and-exploit and phishing among top attack
                                                                    vectors
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className='list'>
                                                                <img src="Enter-Rectangle628.jpg"/>
                                                                <div className='text'>
                                                                    Cybercriminals are Increasingly moving to the cloud
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <p>The everything-connected world is constantly changing the threat
                                                    landscape as well. Digitalization and the growing network of
                                                    machines, systems, and devices mean an increased risk of
                                                    cyberattacks. That’s why organizations need to expand security
                                                    programs to reliably protect critical infrastructure facilities by
                                                    using defense-in-depth (DID) strategies, monitoring, analysis, and
                                                    reporting. </p>
                                                <p>Mindgraph’s Cybersecurity services can help you stay ahead of the
                                                    threats. Our integrated approach to security not only prioritizes
                                                    prevention but also minimizes risk and control losses. Our expert
                                                    team will provide the right solutions for your needs to keep your
                                                    company protected and resilient at all times. </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h5>Our Solutions</h5>
                                                <p>Datacenter protection, Malware protection, Network risk assessment,
                                                    Cloud security, Cybersecurity Device, Identity Management, Firewall
                                                    management, and Mobile security</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a8" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <h1>Talent Management </h1>
                                    <h5>We have the right team at the right moment for your technology needs</h5>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <p>We support our clients to quickly scale and stay agile while meeting its
                                                requirements for top-notch talent in advanced technologies. We inspire
                                                confidence in our clientele by offering expert talent services and
                                                supporting advanced delivery capabilities in the changing business
                                                environment. </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <img loading="lazy" src="tl-1.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-12">
                                            <h5>Benefits of partnering with Mindgraph </h5>
                                            <p>In the fast pace of the post-covid world, the luxury of time seems to
                                                have disappeared completely. It is further accompanied by falling
                                                barriers to improvisation and experimentation among organizations. In
                                                this unique moment, companies need partners who are trusted to deliver
                                                at-scale responses. At Mindgraph, we embrace the challenges with you. We
                                                offer our clients immediate access to experienced experts specifically
                                                tailored to their requirements. We are dedicated to serving you with at
                                                most honesty, transparency, and accountability.</p>
                                            <img loading="lazy" src="tl-2.png" class="img-fluid mx-auto d-block my-3"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a9" role="tabpanel"
                                     aria-labelledby="v-pills-a9-tab">
                                    <div>
                                        <h1>Mindgraph Academy</h1>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <p>Mindgraph has embarked upon a journey to help our talent pool embrace
                                                    shifts in the dynamic workforce landscape and lays out a road map
                                                    for navigating the new ones.</p>
                                                <p>The rising uncertainty on what skills will be needed in current and
                                                    future jobs due to more frequent and disruptive technological
                                                    breakthroughs has left our talent pool in the lurch. A 2019 survey
                                                    of 3,500 managers by Gartner found that only 29% of new hires have
                                                    all the skills required for their current roles, let alone for
                                                    future ones.</p>
                                            </div>
                                            <div class="col-lg-4">
                                                <img loading="lazy" src="mg-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div className="col-lg-12">
                                                <p>Digitalization is one such area that has recently created enormous
                                                    demand for next-generation talent who are equipped with skills to
                                                    manage data and technology. We at Mindgraph, have come up with
                                                    curated programs on various data skills appropriate for different
                                                    kinds of audiences viz. Students, Technologists, Leaders, and Data
                                                    Professionals.</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <h5 className="border-left">What we offer</h5>
                                                {/* <img loading="lazy" src="mg-2.png" alt="" className="img-fluid my-3" /> */}
                                                <div className='enterprisePage box5'>
                                                    <h6>Domain-specific Data Science Training</h6>
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer.png"></img>
                                                                <p>Cybersecurity</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-2.png"></img>
                                                                <p>Audit</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-3.png"></img>
                                                                <p>HR</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-4.png"></img>
                                                                <p>Finance</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-5.png"></img>
                                                                <p>Risk & Technology</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='enterprisePage box5 my-4'>
                                                    <h6>Advanced Training </h6>
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-6.png"></img>
                                                                <p>Explainable AI </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-7.png"></img>
                                                                <p>ML Deployment</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-8.png"></img>
                                                                <p>NLP</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <img src="Group-enter-offer-9.png"></img>
                                                                <p>Chatbot</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
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

export default Enterprises;
