import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {IoArrowForward} from 'react-icons/io5';
import {Link} from 'react-router-dom';

const box = [
    {
        "title": "Business Strategy",
        "p": "A highly mature organization makes sure that data drives continuous business model innovation. "
    },
    {
        "title": "Analytics Strategy",
        "p": "More mature organization understand and treat information as an asset. Analytical insights are automated wherever possible and included in processes. Revenue lift is realized due to predictive analytics. "
    },
    {
        "title": "Data Architecture and Governance",
        "p": "Mature organization has Information architecture fully aligned with business strategies to enable complete market disruption with volume, velocity, variety and veracity specifications applied to their data assets. Information governance is integrated into all aspects of the business processes."
    },
    {
        "title": "Analytics Strategy",
        "p": "Information management strategy relates to management of information through IT infrastructure"
    },
    {
        "title": "Data Architecture and Governance",
        "p": "Leadership practices, People roles and skills, organization experimentation mindset and Data-driven culture is the key to overall."
    },
    {
        "title": "Data Architecture and Governance",
        "p": "Organizations willing to move up the AQ ladder should embrace the current advances in cloud technologies and their future potential."
    },
];
const keyBenfits = [
    {
        "p": "Flexible data environment to maximize the business impact of analytics"
    },
    {
        "p": "Create a strong bond between IT, data science, and business leadership"
    },
    {
        "p": "Improve the fluidity of data across the organization, in a secure and well-governed way"
    },
    {
        "p": "Improve the fluidity of data across the organization, in a secure and well-governed way	Have the flexibility to advance data science initiatives in on-premises, cloud, or hybrid environments"
    },
]
const keyBenfits2 = [
    {
        "icon": "a-1.png",
        "p": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "icon": "a-2.png",
        "p": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
        "icon": "a-3.png",
        "p": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "icon": "a-3.png",
        "p": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]
const box2 = [
    {
        "subtitle": "Level 1",
        "title": "Descriptive & Entity Analytics",
        "list": [
            {"p": "Portfolio or Executive View"},
            {"p": "Story Telling Dashboard"},
            {"p": "Geospatial Intelligence"},
            {"p": "Entity 360 Degree Analysis"},
            {"p": "Statistical Analysis of Data"},
            {"p": "Outlier Analysis"},
            {"p": "Scenario Analysis – If Else"},
        ]
    },
    {
        "subtitle": "Level 2",
        "title": "Deep Mining & Machine Learning Model-based Scoring Mechanism",
        "list": [
            {"p": "Time Series Forecast"},
            {
                "p": "Predictive Modelling",
                "sub": [
                    {"p": "Predictive Modelling"},
                    {"p": "Statistical Model"},
                    {"p": "Machine Learning Model"}
                ]
            },
            {"p": "Text Analytics & NLP"},
        ]
    },
    {
        "subtitle": "Level 3",
        "title": "Advanced Analytics & AI",
        "list": [
            {"p": "Deep Learning Models"},
            {"p": "Recommendation Engine"},
            {"p": "Clustering & Segmentation"},
            {"p": "Hypothesis Testing Scenarios"},
            {"p": "Robo Advisory Services"},
            {"p": "Image Science"},
        ]
    }
]
const box3 = [
    {
        "title": "Technology Research",
        "icon": "Technology-Research-icon.png",
        "list": [
            {"p": "Leverage our past studies and experience of helping organizations choose the right cloud technology for Data Lake"},
            {"p": "Share proprietary research methodology of determining data lake persona based on Data Size & Variety, Analytics Maturity, Affordability"},
            {"p": "Provide rich information on Data Lake technology comparisons based on multiple parameters and sources"}
        ]
    },
    {
        "title": "Data Lake Development Strategy",
        "icon": "Data-Lake-Development-Strategy-icon.png",
        "list": [
            {"p": "Assist in developing Data Lake based on a bottom-up approach where Lake starts as a mini data body and becomes bigger with new use cases of business relevance and priority to ensure the growth of idle data in the lake which can be an outcome of a top-down approach"},
            {"p": "We successfully implemented this approach with a client in the Airport domain where other big bang top-down approaches failed miserably"}
        ]
    },
    {
        "title": "Data Engineering Services",
        "icon": "Data-Engineering-Services-icon.png",
        "list": [
            {"p": "We take complete ownership of Data Infrastructure development. Our highly specialized Data Engineers are equipped to build Data Pipeline, develop ETL jobs, and keep Data Lake always available"},
            {"p": "Develop a data quality analytics layer based on our DQ framework Qualyzer, which is based on 5 key dimensions – Completeness, Accuracy, Domain of Values, Format & Reasonableness"}
        ]
    },
]
const box4 = [
    {
        "title": "Identify Key Data Elements",
        "p": "Identification of data elements which are key for reporting, analysis and modelling"
    },
    {
        "title": "Mapping Data Elements to DQ Dimensions",
        "p": "Map data elements to relevant data quality dimensions; not all dimensions are relevant for DQ evaluation"
    },
    {
        "title": "Measure of DQ Dimensions",
        "p": "Measure the metrics of data quality; compare current value with respect to the benchmark"
    },
    {
        "title": "Standardizing the DQ Finding via Scoring",
        "p": "DQ finding quantified via mathematical score; score across dimensions summarized for  each Key Data Element"
    }
]


function Datatization() {
    const [matches, setMatches] = React.useState(window.matchMedia("(min-width: 768px)").matches)

    React.useEffect(() => {
        const handler = e => setMatches(e.matches);
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler)
        window.scroll(0, 0)
    }, [])

    return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header image="datatization.jpg" height={55} title="Be AI-ready with the right and trusted Data"/>
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-3 border-end nav-main">
                            <h1>Datatization</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a1"
                                        type="button" role="tab" aria-controls="v-pills-a1" aria-selected="false">1.
                                    Data Innovation
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a2"
                                        type="button" role="tab" aria-controls="v-pills-a2" aria-selected="false">2.
                                    Data Science
                                </button>
                                <button class="nav-heading mt-4"
                                        onClick={() => matches == false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                        id="v-pills-a3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-a3"
                                        type="button" role="tab" aria-controls="v-pills-a3" aria-selected="false">3.
                                    Data Engineering
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9 nav-main">
                            <div class="tab-content" id="v-pills-tabContent ">
                                <div class="tab-pane fade show active" id="v-pills-a1" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Data Innovation</h1>
                                        <h5>Be AI-ready with the right and trusted Data </h5>
                                        <p>Unlock the value of your data in new ways and accelerate your journey to AI
                                            with our proven Data Science powered toolkit MADI. Mindgraph Advanced-Data
                                            Innovation (MADI) approach is a confluence of Innovation, Algorithms, and
                                            Experience designed to exhibit newer values that businesses would have never
                                            imagined. Our strength lies in packaging clustered values together as
                                            Product which is more manageable and shareable. In the process, we open
                                            opportunities to Co-Innovate and develop Intellectual Property (Patents,
                                            Trademarks & Copyright) for the organization. We have delivered several such
                                            successful engagements across industries such as Airport, Telecom, Banks,
                                            Microfinance, Airlines, and Healthcare </p>
                                        <img loading="lazy" src="Data Innovation-img.png" class="img-fluid my-4"
                                             alt=""/>
                                        <p>Data Landscape Study – Uncover every class of data in the business and
                                            categorize them as Data Under Light & Dark Data</p>
                                        <p>Analytics Culture Quotient Calculation – Quantify the maturity of the
                                            organization in terms of usage of Analytics, ML & AI – This would be a
                                            barometer to understand where the organization is and how the path will be,
                                            to move the needle</p>
                                        <h5 class="text-center">Organization Maturity Model</h5>
                                        <img loading="lazy" src="Group 3713.png" class="img-fluid my-4" alt=""/>
                                        <p>Entity Science Framework – Our proprietary framework identify high-value
                                            solutions or products in the form of IP for the business</p>
                                        {/* <img loading="lazy" src="Group 3714.png" class="img-fluid my-4" alt="" /> */}

                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box.map((el, i) => {
                                                        return (
                                                            <div className='col-md-4' key={i}>
                                                                <div className='smallBoxes min300'>
                                                                    <h6>{el.title}</h6>
                                                                    <p>{el.p}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h5 class="text-center">Data Innovation Via Entity Science</h5>
                                        <img loading="lazy" src="Group 3715.png" class="img-fluid my-4" alt=""/>
                                        <p>Business Value Map – Our unique model maps data innovation outcomes to
                                            Efforts and Business Impacts. The model simplifies the decision-making
                                            process of the organization to take innovation forward</p>
                                        <p>Product Journey – At Mindgraph, we help companies successfully develop and
                                            scale the prototype into full-fledged solutions that could be a game-changer
                                            for your business. </p>
                                        <h5 class="border-left">Key customer Benefits </h5>
                                        {/* <img loading="lazy" src="Group 3716.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                {
                                                    keyBenfits.map((el, i) => {
                                                        return (
                                                            <div className='col-md-3' key={i}>
                                                                <div className='keyBoxes'>
                                                                    <p>{el.p}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='caseSudies'
                                                 style={{backgroundImage: "url(case-studies.png)"}}>
                                                <div className='textBox'>
                                                    <span className='subs'>Case Studies</span>
                                                    <h3>Get Started With Datatization</h3>
                                                    <Link to={"/contact"}>
                                                        TALK TO OUR DATA SCIENCE EXPERT <IoArrowForward size={25}
                                                                                                        className="caseSudies-icon"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a2" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Data Science</h1>
                                        <h5>From Data to Value – bridging the data disconnect and building
                                            intelligence </h5>
                                        <p>Data Science solutions from Mindgraph empowers organizations of varied sizes
                                            to realize their dream of setting up a world-class program covering all the
                                            critical aspects of the data journey — from discovering data to developing,
                                            deploying, managing, and monitoring models. Mindgraph offers personalized
                                            solutions to cater to the needs of organization’s different kind of
                                            programs, including the ones which are already in the matured state. </p>
                                        <h5 class="border-left">What we offer </h5>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <p>Mindgrpah collaborates with you in accelerating your journey to
                                                    Machine Learning and AI with Data Science. MindScience is our
                                                    innovative Data Science Model that delivers value for our clients
                                                    right from the outset. First, we begin with the Data Landscape study
                                                    of the organization. Next, we spend a considerable amount of time
                                                    improving Data Quality - this is an essential step that determines
                                                    the reliability of decision-making. After that, we move to advance
                                                    Data Science implementation. Our systemic approach to Data Science
                                                    ensures high-quality storytelling from data, driving decisions from
                                                    multi-dimensional insights with solid industry experience. We offer
                                                    end-to-end support to our clientele, from selecting right technology
                                                    to developing talent, designing data science use-cases, and
                                                    optimizing the operations of the program</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <img loading="lazy" src="Rectangle 550.png" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <h5 class="text-center">MindScience – Our proven Data Sciences Model</h5>

                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box2.map((el, i) => {
                                                        return (
                                                            <div className='col-md-4' key={i}>
                                                                <div className='smallBoxes dataizList'>
                                                                    <h6>
                                                                        <div>
                                                                            <div className='subT'>{el.subtitle}</div>
                                                                            {el.title}</div>
                                                                    </h6>
                                                                    {
                                                                        el.list.length &&
                                                                        <ul>
                                                                            {
                                                                                el.list.map((a, index) => {
                                                                                    return (<li key={index}>
                                                                                        <img src="tick.png"/>{a.p}
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
                                        {/* <img loading="lazy" src="Group 3717.png" class="img-fluid my-4" alt="" /> */}
                                        <h5 class="border-left">Key customer Benefits </h5>
                                        {/* <img loading="lazy" src="Group 3718.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                {
                                                    keyBenfits.map((el, i) => {
                                                        return (
                                                            <div className='col-md-3' key={i}>
                                                                <div className='keyBoxes'>
                                                                    <p>{el.p}</p>
                                                                    {el.icon ?
                                                                        <img src={el.icon}></img> : null
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='caseSudies' style={{backgroundImage: "url(ent.jpg)"}}>
                                                <div className='textBox'>
                                                    <span className='subs'>Case Studies</span>
                                                    <h3>Get Started With Datatization</h3>
                                                    <Link to={"/contact"}>
                                                        TALK TO OUR DATA SCIENCE EXPERT <IoArrowForward size={25}
                                                                                                        className="caseSudies-icon"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-a3" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Data Engineering</h1>
                                        <h5>Build an AI-optimized data management environment </h5>
                                        <p>Mindgraph is your trusted data engineering partner with deep expertise in the
                                            Data Ecosystem. We offer AI-driven hybrid data engineering solutions across
                                            the entire data life cycle to monetize the asset optimally. We help you in
                                            set-up the right kind of Data Infrastructure, which is most critical towards
                                            the success of Data Investment by the CIO or CTO. By efficiently onboarding
                                            and governing large quantities of semi-structured and unstructured data,
                                            Mindgrpah ensures high processing speed, fast analytics, and improved
                                            top-line for businesses.</p>
                                        <h5 class="border-left">What we offer </h5>
                                        {/* <img loading="lazy" src="Group 3719.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box3.map((el, i) => {
                                                        return (
                                                            <div className='col-md-4' key={i}>
                                                                <div className='whatWeOffer dataizListOffer'>
                                                                    <img src={el.icon}></img>
                                                                    <h6>{el.title}</h6>
                                                                    {
                                                                        el.list.length &&
                                                                        <ul>
                                                                            {
                                                                                el.list.map((e, i) => {
                                                                                    return (
                                                                                        <li>
                                                                                            <img src="tick.png"/>{e.p}
                                                                                        </li>
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
                                        <h5 class="border-left">Qualyzer – Data Quality & Drift Analytics Tool</h5>
                                        <p>Build an analytics layer on top of the key data asset of an organization to
                                            determine scientifically the quality of data residing in the repository</p>
                                        {/* <img loading="lazy" src="Group 3720.png" class="img-fluid my-4" alt="" /> */}
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                {
                                                    box4.map((el, i) => {
                                                        return (
                                                            <div className='col-md-3' key={i}>
                                                                <div className='smallBoxes'>
                                                                    <h6>{el.title}</h6>
                                                                    <p>{el.p}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h5 class="text-center">Data Quality Dimensions</h5>
                                        <img loading="lazy" src="Group 3722.png" class="img-fluid my-4" alt=""/>
                                        <img loading="lazy" src="Group 3723.png" class="img-fluid my-4" alt=""/>
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

export default Datatization;
