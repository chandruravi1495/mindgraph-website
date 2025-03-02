import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

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

function Terms() {

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

    const tabData = [
        {
            id: "v-pills-a1",
            heading: "1. Ownership and Use of Site Contents",
            title: "Site Contents",
        },
        {
            id: "v-pills-a2",
            title: "Use of Site and Restrictions",
        },
        {
            id: "v-pills-a3",
            title: "Online Conduct",
        },
        {
            id: "v-pills-a4",
            title: "Accuracy of Information",
        },
        {
            id: "v-pills-a5",
            title: "Links to Third-Party Sites",
        },
        {
            id: "v-pills-a6",
            title: "Disclaimer of Warranties and Limitations of Liability",
        },
        {
            id: "v-pills-a7",
            title: "Indemnification",
        },
    ];

    return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header height={55} title="Terms & Conditions – MindGraph"
            />
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 nav-main">
                            <h1>Terms & Condition - Mindgraph</h1>
                            <p>This Policy applies to all users and visitors of the website www.mind-graph.com, owned
                                and operated by Mindgraph Technologies Private Limited, Mindgraph Solutions Sdn. Bhd.,
                                Mindgraph Pte. Ltd., and Mindgraph LLC (Hereinafter collectively referred to as
                                “Mindgraph”).
                                Mindgraph offers software and other related technology services (referred to
                                collectively as the "Services") through its www.mind-graph.com This document delineates
                                the policies governing how Mindgraph gathers and manages your personal information when
                                you engage with our website (www.mind-graph.com), By accessing the Site, you implicitly
                                agree to uphold and be legally bound by the stipulations articulated within these Terms
                                of Service ("Terms"). These Terms regulate your usage of the Site and Services,
                                including all Collective Content, as well as your involvement in any related Program.
                                They establish a legally binding agreement between you and Mindgraph. Failure to comply
                                with these Terms may incur civil and criminal consequences.
                                These Terms and Conditions (the “Terms”) delineate the rights and responsibilities of an
                                unregistered website user or visitor (“user” or “you”) regarding your use of the Site.
                                By accessing or using the Site, including as an unregistered website visitor, you agree
                                to comply with these Terms, our Privacy Policy, and our Cookies Policy, accessible on
                                the Site. These Terms solely apply to your use of the Site and the content available on
                                or through the Site as an unregistered website user or visitor. If you use or access any
                                of our physical spaces, restricted-access web-based services (requiring a login), broker
                                or referral programs, or other services, your usage is subject to the terms and
                                conditions provided or accepted during your sign-up. Additionally, if you book or avail
                                any products or services through our partners or other service providers, you are
                                subject to their respective terms and conditions. We may periodically make
                                modifications, deletions, or additions to the Site or these Terms, and your continued
                                use of the Site constitutes acceptance of such changes.
                                We reserve the right to modify our Terms and Conditions at any time without prior
                                notice. To stay informed about any changes, please periodically review this policy. By
                                visiting this Website, you agree to be bound by these terms and conditions. If you
                                disagree, please refrain from using or accessing our Website. #Terms and Conditions</p>
                        </div>
                    </div>
                    <div class="mt-5 row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>Terms & Condition</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                {tabData.map((tab, index) => (
                                    <React.Fragment key={index}>
                                        {tab.heading &&
                                            <button
                                                onClick={() => matches === false ? window.scrollTo(100, 800) : window.scrollTo(0, 0)}
                                                id={`${tab.id}-tab`}
                                                data-bs-toggle="pill"
                                                data-bs-target={`#${tab.id}`}
                                                type="button"
                                                role="tab"
                                                aria-controls={tab.id}
                                                aria-selected="false"
                                                className="nav-heading">{tab.heading}</button>}
                                        <button
                                            className={`nav-link nav-main-link ${index === 0 ? 'active' : ''}`}
                                            onClick={() => document.getElementById(tab.id).scrollIntoView({behavior: 'smooth'})
                                            }
                                            id={`${tab.id}-tab`}
                                            data-bs-toggle="pill"
                                            data-bs-target={`#${tab.id}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={tab.id}
                                            aria-selected="false"
                                        >
                                            {tab.title}
                                        </button>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-8 nav-main">
                            <div class="tab-content" id="v-pills-tabContent ">
                                <div class="tab-pane fade show active" id="v-pills-a1" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div className="">
                                        <h1>Ownership and Use of Site Contents</h1>
                                        <h5>Site Contents</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>All materials, including but not limited to images, details, data,
                                                    illustrations, designs, icons, photographs, video clips, text,
                                                    software, graphics, scripts, logos, and other materials
                                                    (collectively, the "Contents") displayed on this site are
                                                    exclusively owned (either directly or indirectly) by Mindgraph
                                                    and/or its content providers. The Contents are protected by
                                                    copyrights, trademarks, service marks, trade dress, and other
                                                    intellectual or ownership rights owned by the Company. Any rights
                                                    not expressly granted in these Terms and Conditions are reserved for
                                                    the Company. </p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a2">Use of Site and Restrictions</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>The site and its Contents are intended for your personal,
                                                    non-commercial use only. Any other use, including modification,
                                                    removal, deletion, transmission, publication, distribution, proxy
                                                    cashing, uploading, posting, redistribution, re-licensing, selling,
                                                    duplicating, republication, or any other dissemination without the
                                                    express written permission of the Company is strictly
                                                    prohibited.</p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a3">Online Conduct</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>You agree to use the site for lawful purposes only. Prohibited
                                                    activities include posting or transmitting unlawful, harmful,
                                                    threatening, abusive, harassing, defamatory, vulgar, obscene,
                                                    profane, or hateful material.</p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a4">Accuracy of Information</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>While the Company makes reasonable efforts to provide accurate and
                                                    up-to-date information, it does not guarantee the accuracy,
                                                    completeness, reliability, or error-free nature of the site. Users
                                                    use the information at their own risk, and the Company is not liable
                                                    for any loss or damages resulting from such use.</p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a5">Links to Third-Party Sites</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>Links on this site may lead to services or sites not controlled or
                                                    operated by the Company. The Company assumes no responsibility or
                                                    liability for other sites or services. Any use of any linked site or
                                                    service is at your own risk.</p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a6">Disclaimer of Warranties and Limitations of Liability</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>The site and its Contents are provided "as is" and "as available"
                                                    without any representation or warranty. The Company disclaims all
                                                    express and implied warranties and shall not be liable for any
                                                    damages of any kind whatsoever.</p>
                                            </div>
                                        </div>
                                        <h5 id="v-pills-a7">Indemnification</h5>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <p>You agree to indemnify and hold harmless the Company from any
                                                    third-party claim, action, demand, loss, or damages arising out of
                                                    or relating to your violation of these Terms and Conditions or your
                                                    use of the site.</p>
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

export default Terms;
