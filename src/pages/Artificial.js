import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { IoCheckmarkCircleOutline,IoArrowForward } from 'react-icons/io5';
import Footer from '../components/Footer';
import Header from '../components/Header';

const content = [
    {
        "title":"Sophisticated Active Learning Module ",
        "text":"Your AI Strategy hinges on the ability to capitalize on what data has to offer. At Mindgraph, we developed an Active Learning module for your AI solutions to significantly reduce this data dependency before kickstarting your AI. This proprietary model actively eliminates the constraint of requiring a large volume of data to successfully begin your AI journey across various use cases. Our test results have proved that we can deliver similar accuracy and performance as a traditional AI implementation with only about 20-25% of data, especially in Computer Vision Applications.",
        "img":"Sophisticated-Active-Learning-Module-img.jpg"
    },
    {
        "title":"Advanced Model Compression Feature ",
        "text":"AI/ML Models in the deep learning space are huge with millions of parameters to train the massive models to achieve ever-so-slightly higher accuracy and efficiency on various benchmarks. But having these huge models causes problems like restricted scale. They won’t fit on small devices and require huge amounts of computing power and training time, while also reducing the inference time. Advantageously, our state-of-the-art Model Compression module is equipped to eliminate any laggy experience with the application, to provide you with a smooth inference time in a matter of few seconds without sacrificing accuracy.",
        "img":"manufacturing-technology-factory-automation----.jpg"
    },
    {
        "title":"Built-in Explainable AI ",
        "text":"Explanations increase Trust in the AI application so that it’s no longer a black box. Our unique Fairness/bias test ensures your compliance with governance, societal and regulatory standards. We test and correct our models for Fairness with our Concept Extraction service. It aims to extract higher-level, human-friendly concepts from a trained neural network model instead of giving importance to input features. For example, an understandable explanation of why an image classifier outputs the label 'zebra' would ideally relate to concepts such as 'stripes' rather than a specific set of pixel values.",
        "img":"Built-in-Explainable-AI-img.jpg"
    },
    {
        "title":"Advanced Monitoring tools ",
        "text":"Our Monitoring tools help to detect outliers, which otherwise would be classified into one of the existing classes due to the maximum likelihood principle used to classify the test point. These are the mislabeled data that needs to be excluded from model training. Also, uncertainty modeling helps in identifying uncertain points, for which the model fails to make the correct prediction. These are data points for which human intervention is needed to label them correctly and retrain the model for better decision-making capabilities.",
        "img":"Advanced-Monitoring tools-img.jpg"
    },
];
const box = [
    {
        "title":"PMS",
        "list":[
            {"p":"Define business objectivies"},
            {"p":"Assess Situation"},
            {"p":"Determine Data mining Goals and Criteria"},
            {"p":"Produce project plan with initial Assessment of Tools and Techniques"}
        ]
    },
    {
        "title":"Explore",
        "list":[
            {"p":"Described Data"},
            {"p":"Explore Data"},
            {"p":"Construct Data"}
        ]
    },
    {
        "title":"Clarity",
        "list":[
            {"p":"Verified Data Quality"},
            {"p":"Data Preperation",
            "sub":[
                {"p":"Select Data"},
                {"p":"Clean Data"},
                {"p":"Construct Data",
                "sublist":[
                    {"p":"Derived attributes"},
                    {"p":"Generated Records"},
                ]}
            ]}
        ]
    },
    {
        "title":"Integrate",
        "list":[
            {"p":"Merge Data"},
        ]
    },
    {
        "title":"Feature Box",
        "list":[
            {"p":"Format Data- Reformateed Data"},
            {"p":"Mindgrapgh’s Adversarial Auto Augmnet - No need for Hard code augmentations for image based deep nueral networks"},
        ]
    },
    {
        "title":"Decision Box",
        "list":[
            {"p":"Selecting Modeling Techniques and assumptions"},
            {"p":"Generate Test Design"},
            {"p":"Build Models",
            "sub":[
                {"p":"Parameter Settings"},
                {"p":"Models"},
                {"p":"Model Description"}
            ]},
            {"p":"Assess Models",
            "sub":[
                {"p":"Model Assessment"},
                {"p":"Revised Parameter Settings"}
            ]},
        ]
    },
    {
        "title":"Hyper Opt",
        "list":[
            {"p":"Optimization - Based on the findings of the monitoring, improvement measures, as well as specifications for the design of new business processes, can be derived. For optimization of processes, solutions can be designed and tested through a simulation."},
        ]
    },
    {
        "title":"Evaluation",
        "list":[
            {"p":"Evaluate Reults",
            "sub":[
                {"p":"Assessment of Data Mining Results w.r.t Business Success Criteria"}
            ]},
            {"p":"Review Process"},
            {"p":"Determine next steps",
            "sub":[
                {"p":"List of possible actions"},
                {"p":"Decision"},
            ]},
            {"p":"Mindgraph’s Signal Estimation and Attribution- Insights about what features are affecting the output and by how much"}
        ]
    },
    {
        "title":"Deploy",
        "list":[
            {"p":"Plan Deployment"},
            {"p":"Plan Monitoring & Maintenance"},
            {"p":"Product final report and presentation"},
            {"p":"Review project and documentation"},
            {"p":"Mindgraph’s uncertainty modeling and ranking - Helps detect outliers"},
            {"p":"Mindgraph’s Concept extraction - Extract higher - level, human - friendly concepts from a trained nueral network."},
        ]
    },
    {
        "title":"XAI",
        "list":[
            {"p":"Monitoring tools"},
            {"p":"Explainable tools"},
        ]
    },
]

function Artificial() {
  React.useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header image="digi-bnr.jpg" height={55} title="Reimagine Possibilities with Digital-Led Growth"  />
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>Artificial <br /> Intelligence</h1>
                        </div>
                        <div className="col-lg-8 nav-main">
                            <h1>Artificial Intelligence</h1>
                            <h5>Applying AI the right way to revolutionize business operations   </h5>
                            <p>As organizations compete in the era of data and advanced analytics, Artificial Intelligence and Machine Learning have become the preferred choice of the arsenal for today’s businesses. AI & ML  has the potential to transform the organization's capabilities, and power sustainable, value-driving activities. But generating scalable value through AI/ML would require more than technical implementation capabilities – it notably requires a partner who is invested in the success of its clientele and has in-depth expertise in data infrastructure, technology, and other enablers. </p>
                            <p>Mindgraph’s Enterprise AI and ML vertical provides a focused approach to AI implementation with end-to-end AI solutions to help our customers navigate the complex business challenges and dramatically accelerate value capture from AI from start to scale. We help organizations swiftly align to the AI adoption journey through our agile Mindgraph Standard Process for AI framework called MGThink.  Our MGThink is a unique and customizable framework that is designed to monitor and control the project implementation with Active Learning, Model Compression, and Fairness and Bias models incorporated at every stage to check for model accuracy, consistency, and unwanted results. </p>
                            <h5 class="border-left">How MGThink is unique compare to other AI partners</h5>

                            {
                                content.map((item,index)=>{
                                    return(
                                        <div className='row my-4' style={{background:"#f1f8fe"}}>
                                            <div className='col-lg-4 col-md-4 showMobileOnly'>
                                                <img loading="lazy" src={item.img} class="img-fluid my-4" alt="" />
                                            </div>
                                            {
                                                (index % 2 !== 0) ?
                                                    <div className='col-lg-4 col-md-4 hideMobileOnly'>
                                                        <img loading="lazy" src={item.img} class="img-fluid my-4" alt="" />
                                                    </div>
                                                : null
                                            }
                                            <div className='col-lg-8 col-md-8'>
                                                <h6>{item.title}</h6>
                                                <p>{item.text}</p>
                                            </div>
                                            {
                                                (index % 2 === 0) ?
                                                    <div className='col-lg-4 col-md-4 hideMobileOnly'>
                                                        <img loading="lazy" src={item.img} class="img-fluid my-4" alt="" />
                                                    </div>
                                                : null
                                            }
                                        </div>
                                    )
                                })
                            }

                            {/* <img loading="lazy" src="Group 3733.png" class="img-fluid my-4" alt="" /> */}

                            <h5 class="border-left">What is MGThink</h5>
                            <img loading="lazy" src="Group 3734.png" class="img-fluid my-4" alt="" />

                            <div className='col-lg-12'>
                                <div className='row'>
                                    {
                                        box.map((el,i)=>{
                                            return(
                                                <div className='col-md-4' key={i}>
                                                    <div className='smallBoxes artifiList'>
                                                    <h6>{el.title}</h6>
                                                    {
                                                        el.list.length &&
                                                        <ul>
                                                            {
                                                                el.list.map((a,index)=>{
                                                                    return (<li key={index}>
                                                                        {/* <IoCheckmarkCircleOutline size={15} className="icon-orange" /> */}
                                                                        <img src="tick.png" />
                                                                        {a.p}
                                                                        {
                                                                            a.sub && a.sub.length &&
                                                                            <ul>
                                                                                {
                                                                                    a.sub.map((b)=>{
                                                                                        return (<li key={index}>
                                                                                            <IoArrowForward size={15} className="icon-orange" />{b.p}
                                                                                        {
                                                                                            b.sublist && b.sublist.length &&
                                                                                            <ul>
                                                                                                {
                                                                                                    b.sublist.map((c)=>{
                                                                                                        return (
                                                                                                        <li key={index}>
                                                                                                            <IoArrowForward size={15} className="icon-orange" />{c.p}</li>)
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

                            <h5 class="border-left">Why MGThink </h5>
                            <p>MGThink can help you to reinvent your business into a smart enterprise to operate reimagined, reinvented, focused, and more resilient business models in the post-pandemic world. Our experts will help you implement an AI-First strategy by taking advantage of our superior data expertise and advanced technologies to consistently lead, maintain and scale an impactful AI. </p>
                            <p><b>It’s time to initiate your AI with MGThink</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
  );
}

export default Artificial;
