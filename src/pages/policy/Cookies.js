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

function Cookies() {

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
            heading: "1. Objective",
        }, {
            id: "v-pills-a2",
            heading: "2. Applicability",
        }, {
            id: "v-pills-a3",
            heading: "3. Purpose",
        }, {
            id: "v-pills-a4",
            heading: "4. Definitions",
        }, {
            id: "v-pills-a5",
            heading: "5. Data Usage",
        }, {
            id: "v-pills-a6",
            heading: "6. Cookie Consent",
        }, {
            id: "v-pills-a7",
            heading: "7. Customising The Cookie Consent",
        }, {
            id: "v-pills-a8",
            heading: "8. Managing Cookies",
        }, {
            id: "v-pills-a9",
            heading: "9. Third-Party Cookies",
        }, {
            id: "v-pills-a10",
            heading: "10. Compliance with Law",
        }, {
            id: "v-pills-a11",
            heading: "11. Data Retention",
        }, {
            id: "v-pills-a12",
            heading: "12. Contact Information",
        }, {
            id: "v-pills-a13",
            heading: "13. Popup Window Content",
        },
    ];

    return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header height={55} title="COOKIES POLICY"
            />
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>Cookies Policy</h1>
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                {tabData.map((tab, index) => (
                                    <React.Fragment key={index}>
                                        {tab.heading &&
                                            <button
                                                onClick={() => document.getElementById(tab.id).scrollIntoView({behavior: 'smooth'})}
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
                                            onClick={() => document.getElementById(tab.id).scrollIntoView({behavior: 'smooth'})}
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
                            <div className="tab-content" id="v-pills-tabContent ">
                                <div className="tab-pane fade show active" id="v-pills-a1" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <div id="v-pills-a1">
                                        <h1>1. Objective</h1>
                                        <p>The Cookies policy (‘Policy’) of Mindgraph Technologies Private Limited,
                                            Mindgraph Solutions Sdn. Bhd., Mindgraph Pte. Ltd., and Mindgraph LLC
                                            (Hereinafter collectively referred to as “Mind-Graph” or “Company”),
                                            provides external users with detailed information about the cookies that the
                                            Company’s website uses and how users can control cookie placement by
                                            limiting or forbidding a website to place cookies on various electronic
                                            devices. The cookies Policy will help the Company maintain full disclosure
                                            with its users and create transparency in the collection and tracking of the
                                            user information including private information to provide the user with a
                                            more personalized and responsive service, the Company needs to remember and
                                            store information about how the user interacts with the website of the
                                            Company. Whenever the user uses the website of the Company, information may
                                            be collected, tracked and stored by cookies and other technologies of the
                                            Company. By using the website, the user agrees to the Company's use of
                                            cookies as described in this Cookie Policy.</p>
                                    </div>
                                    <div id="v-pills-a2">
                                        <h1>2. Applicability</h1>
                                        <p>The Policy applies to the external users and visitors who visit the websites
                                            of the Company.</p>

                                    </div>
                                    <div id="v-pills-a3">
                                        <h1>3. Purpose</h1>
                                        <p>The purpose of the Policy is to ensure the use of cookies which are necessary
                                            to enable the user to move around the Website and use its features. The
                                            company also use functional cookies to record and track the information
                                            about the choices the user has made and to allow the Company to modify the
                                            website accordingly. In addition, the Company may use web beacons, tracking
                                            pixels and similar services to understand more about the visitors to the
                                            Company website and to count visitor numbers and performance cookies to
                                            track how many individual users access the Company website and how often.
                                            This information is used for statistical purposes and to improve the
                                            workability of the website.</p>
                                    </div>
                                    <div id="v-pills-a4">
                                        <h1>4. Definition</h1>
                                        <p>Cookies are unique identifiers that are stored on the hard disks of
                                            electronic devices. While opening or searching for content on the browser,
                                            cookies recognize the data and keep track of the content which will get
                                            saved, and how long the stored data without the website owner’s knowledge
                                            that might impact the business
                                        </p>
                                    </div>
                                    <div id="v-pills-a5">
                                        <h1>5. Data usage</h1>
                                        <p>The company uses different kinds of cookies used in digital marketing while
                                            marketing the business of the company. Advertising and retargeting Cookies
                                            save information from the user’s browsing history to record the Company's
                                            interests and browsing path on the website. The Company uses advertising and
                                            targeting cookies enabling the Company to target advertising based on the
                                            user’s activity on the Website.</p>
                                    </div>
                                    <div id="v-pills-a6">
                                        <h1>6. Cookie Consent</h1>
                                        <p>Users must provide explicit consent to cookies code while opening the website
                                            of the Company of their choice. This consent is collected via a cookie
                                            banner or pop-up that appears upon accessing the website.</p>
                                    </div>
                                    <div id="v-pills-a7">
                                        <h1>7. Customising the cookie consent</h1>
                                        <p>Users can customize their cookie preferences via the website’s cookie consent
                                            manager. When the website is accessed, a pop-up window allows users to
                                            select their preferred cookie settings, ensuring they have control over
                                            which cookies are enabled.</p>
                                    </div>
                                    <div id="v-pills-a8">
                                        <h1>8. Managing cookies</h1>
                                        <p>The Company collects Personal data via cookies and other similar tracking
                                            technologies with prior consent from the user. The Company will maintain a
                                            record of the types of cookies that the user has authorized the Company to
                                            use and ensure adherence to the user preferences. Users who do not wish to
                                            accept cookies may leave the website or adjust their browser settings to
                                            block cookies.</p>
                                    </div>
                                    <div id="v-pills-a9">
                                        <h1>9. Third-Party Cookies</h1>
                                        <p>The Company may allow third-party service providers, such as analytics
                                            providers or advertisers, to place cookies on your device when you visit our
                                            website. These cookies are governed by the third parties’ privacy policies,
                                            and we encourage you to review them. The Company does not have control over
                                            the information collected by these cookies. However, we ensure that third
                                            parties comply with relevant data protection regulations when processing
                                            your data.</p>
                                    </div>
                                    <div id="v-pills-a10">
                                        <h1>10. Compliance with Law</h1>
                                        <p>The Company uses all the collected information (including the personal
                                            information) through cookies in compliance with the Information Technology
                                            Act, 2000, the Information Technology (Reasonable Security Practices and
                                            Procedures and Sensitive Personal Data or Information) Rules, 2011 and any
                                            other applicable laws, including the Digital Personal Data Protection Act
                                            2023. The Company ensures that data is processed fairly, lawfully, and in a
                                            transparent manner.</p>

                                    </div>
                                    <div id="v-pills-a11">
                                        <h1>11. Data Retention</h1>
                                        <p>Data collected via cookies will only be retained for as long as necessary to
                                            fulfil the purpose outlined in this Policy, or as required by the law. The
                                            Company periodically reviews the necessity of retaining this data, ensuring
                                            compliance with legal requirements and user preferences.</p>
                                    </div>
                                    <div id="v-pills-a12">
                                        <h1>12. Contact Information</h1>
                                        <p>Users can contact the Company at the information provided below in case of
                                            any issue or for any detailed information on the Company’s Cookie Policy.
                                            Review and Amendments to this Policy
                                            The Cookie Policy is subject to periodic reviews and updates from time to
                                            time or in case of a change in the business requirements or a change in the
                                            applicable regulations and legislation.</p>
                                    </div>
                                    <div id="v-pills-a13">
                                        <h1>13. Popup Window Content</h1>
                                        <p>Mindgraph uses cookies and similar technologies to operate this website and
                                            to provide you with a more personalized user experience and track, conduct
                                            analytics such as count visits and traffic sources, provide advertisements,
                                            and interact with third parties.
                                            By clicking "Accept cookies" you agree to the placement of cookies on your
                                            device. You can manage your cookie preferences or withdraw your consent to
                                            the use of cookies at any time by clicking the "Customize cookies" on your
                                            device.
                                            For more information, please review our Cookie Policy.</p>
                                    </div>
                                </div>
                                {/*<div className="tab-pane fade" id="v-pills-a2" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>2. Applicability</h1>*/}
                                {/*        <p>The Policy applies to the external users and visitors who visit the websites*/}
                                {/*            of the Company.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a3" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>3. Purpose</h1>*/}
                                {/*        <p>The purpose of the Policy is to ensure the use of cookies which are necessary*/}
                                {/*            to enable the user to move around the Website and use its features. The*/}
                                {/*            company also use functional cookies to record and track the information*/}
                                {/*            about the choices the user has made and to allow the Company to modify the*/}
                                {/*            website accordingly. In addition, the Company may use web beacons, tracking*/}
                                {/*            pixels and similar services to understand more about the visitors to the*/}
                                {/*            Company website and to count visitor numbers and performance cookies to*/}
                                {/*            track how many individual users access the Company website and how often.*/}
                                {/*            This information is used for statistical purposes and to improve the*/}
                                {/*            workability of the website.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a4" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>4. Definition</h1>*/}
                                {/*        <p>Cookies are unique identifiers that are stored on the hard disks of*/}
                                {/*            electronic devices. While opening or searching for content on the browser,*/}
                                {/*            cookies recognize the data and keep track of the content which will get*/}
                                {/*            saved, and how long the stored data without the website owner’s knowledge*/}
                                {/*            that might impact the business*/}
                                {/*        </p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a5" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>5. Data usage</h1>*/}
                                {/*        <p>The company uses different kinds of cookies used in digital marketing while*/}
                                {/*            marketing the business of the company. Advertising and retargeting Cookies*/}
                                {/*            save information from the user’s browsing history to record the Company's*/}
                                {/*            interests and browsing path on the website. The Company uses advertising and*/}
                                {/*            targeting cookies enabling the Company to target advertising based on the*/}
                                {/*            user’s activity on the Website.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a6" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>6. Cookie Consent</h1>*/}
                                {/*        <p>Users must provide explicit consent to cookies code while opening the website*/}
                                {/*            of the Company of their choice. This consent is collected via a cookie*/}
                                {/*            banner or pop-up that appears upon accessing the website.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a7" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>7. Customising the cookie consent</h1>*/}
                                {/*        <p>Users can customize their cookie preferences via the website’s cookie consent*/}
                                {/*            manager. When the website is accessed, a pop-up window allows users to*/}
                                {/*            select their preferred cookie settings, ensuring they have control over*/}
                                {/*            which cookies are enabled.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a8" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>8. Managing cookies</h1>*/}
                                {/*        <p>The Company collects Personal data via cookies and other similar tracking*/}
                                {/*            technologies with prior consent from the user. The Company will maintain a*/}
                                {/*            record of the types of cookies that the user has authorized the Company to*/}
                                {/*            use and ensure adherence to the user preferences. Users who do not wish to*/}
                                {/*            accept cookies may leave the website or adjust their browser settings to*/}
                                {/*            block cookies.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a9" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>9. Third-Party Cookies</h1>*/}
                                {/*        <p>The Company may allow third-party service providers, such as analytics*/}
                                {/*            providers or advertisers, to place cookies on your device when you visit our*/}
                                {/*            website. These cookies are governed by the third parties’ privacy policies,*/}
                                {/*            and we encourage you to review them. The Company does not have control over*/}
                                {/*            the information collected by these cookies. However, we ensure that third*/}
                                {/*            parties comply with relevant data protection regulations when processing*/}
                                {/*            your data.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a10" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>10. Compliance with Law</h1>*/}
                                {/*        <p>The Company uses all the collected information (including the personal*/}
                                {/*            information) through cookies in compliance with the Information Technology*/}
                                {/*            Act, 2000, the Information Technology (Reasonable Security Practices and*/}
                                {/*            Procedures and Sensitive Personal Data or Information) Rules, 2011 and any*/}
                                {/*            other applicable laws, including the Digital Personal Data Protection Act*/}
                                {/*            2023. The Company ensures that data is processed fairly, lawfully, and in a*/}
                                {/*            transparent manner.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a11" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>11. Data Retention</h1>*/}
                                {/*        <p>Data collected via cookies will only be retained for as long as necessary to*/}
                                {/*            fulfil the purpose outlined in this Policy, or as required by the law. The*/}
                                {/*            Company periodically reviews the necessity of retaining this data, ensuring*/}
                                {/*            compliance with legal requirements and user preferences.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a10" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>12. Contact Information</h1>*/}
                                {/*        <p>Users can contact the Company at the information provided below in case of*/}
                                {/*            any issue or for any detailed information on the Company’s Cookie Policy.*/}
                                {/*            Review and Amendments to this Policy*/}
                                {/*            The Cookie Policy is subject to periodic reviews and updates from time to*/}
                                {/*            time or in case of a change in the business requirements or a change in the*/}
                                {/*            applicable regulations and legislation.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a13" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>13. Popup Window Content</h1>*/}
                                {/*        <p>Mindgraph uses cookies and similar technologies to operate this website and*/}
                                {/*            to provide you with a more personalized user experience and track, conduct*/}
                                {/*            analytics such as count visits and traffic sources, provide advertisements,*/}
                                {/*            and interact with third parties.*/}
                                {/*            By clicking "Accept cookies" you agree to the placement of cookies on your*/}
                                {/*            device. You can manage your cookie preferences or withdraw your consent to*/}
                                {/*            the use of cookies at any time by clicking the "Customize cookies" on your*/}
                                {/*            device.*/}
                                {/*            For more information, please review our Cookie Policy.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Cookies;
