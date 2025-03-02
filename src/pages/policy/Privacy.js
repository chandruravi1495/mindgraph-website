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

function Privacy() {

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
            heading: "1. Introduction",
        }, {
            id: "v-pills-a2",
            heading: "2. Information We Collect",
        }, {
            id: "v-pills-a3",
            heading: "3. How We Use Your Information",
        }, {
            id: "v-pills-a4",
            heading: "4. Sharing Your Information",
        }, {
            id: "v-pills-a5",
            heading: "5. Cookies and Other Tracking Technologies",
        }, {
            id: "v-pills-a6",
            heading: "6. Data Security",
        }, {
            id: "v-pills-a7",
            heading: "7. Your Privacy Rights",
        }, {
            id: "v-pills-a8",
            heading: "8. How long we retain your personal data",
        }, {
            id: "v-pills-a9",
            heading: "9. Updates to This Policy",
        }, {
            id: "v-pills-a10",
            heading: "10. Contact Us",
        },
    ];

    return (
        <div className="page" style={{backgroundColor: "#0C1733"}}>
            <Header height={55} title="Privacy Policy"
            />
            <section className="automation bg-white">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 border-end nav-main">
                            <h1>Privacy Policy</h1>
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
                                        <h1>1. Introduction</h1>
                                        <p>This Policy applies to all information provided to, collected, processed and
                                            otherwise utilised by Mindgraph Technologies Private Limited, Mindgraph
                                            Solutions Sdn. Bhd., Mindgraph Pte. Ltd., and Mindgraph LLC (Hereinafter
                                            collectively referred to as “Mind-Graph”).
                                            Welcome to Mind-Graph. We are committed to protecting your personal
                                            information and your right to privacy. we want to ensure you're informed
                                            about the information we gather, how it's utilized, and how it may be
                                            shared. We encourage you to review our Privacy Policy, which is designed to
                                            help you use our services in a way that suits you best. In this Privacy
                                            Policy, we detail our practices for collecting, using, sharing, retaining,
                                            and transferring information, as well as your rights in these matters. If
                                            you have any questions or concerns about our policy, or our practices
                                            regarding your personal information, please get in touch with us at
                                            info@mind-graph.com.</p>
                                    </div>
                                    <div id="v-pills-a2">
                                        <h1>2. Information We Collect</h1>
                                        <p>We collect personal information that you voluntarily provide to us when you
                                            register on the website, express an interest in obtaining information about
                                            us or our products and services, when you participate in activities on the
                                            website, or otherwise when you contact us. The types of information we
                                            collect could include:</p>
                                        <ol type={"1"}>
                                            <li><p>1. Voluntarily provided information which may include your name,
                                                address, email address, billing and/or credit card information etc.,
                                                which may be used when you purchase products and/or services and to
                                                deliver the services you have requested.
                                            </p></li>
                                            <li><p>2. Information automatically collected when visiting our website,
                                                which
                                                may include cookies, third party tracking technologies and server logs.
                                            </p></li>
                                        </ol>
                                        <p>Please be rest assured that we shall only collect personal information that
                                            you knowingly and willingly provide by way of surveys, completed membership
                                            forms, and emails. It is the intent of this site to use personal information
                                            only for the purpose for which it was requested and any additional uses
                                            specifically provided on this site.
                                            It is highly recommended and suggested that you review the privacy policies
                                            and statements of any website you choose to use or frequent as a means to
                                            better understand the way in which other websites garner, make use of and
                                            share information collected.
                                            We may collect and may make use of personal information to assist in the
                                            operation of our website and to ensure delivery of the services you need and
                                            request. At times, we may find it necessary to use personally identifiable
                                            information as a means to keep you informed of other
                                            possible products and/or services that may be available to you from
                                            MindGraph. We may also be in contact with you with regards to completing
                                            surveys and/or research questionnaires related to your opinion of current or
                                            potential future services that may be offered.</p>
                                    </div>
                                    <div id="v-pills-a3">
                                        <h1>3. How We Use Your Information</h1>
                                        <p>We use personal information collected via our website for various business
                                            purposes described below. We process your personal information for these
                                            purposes in reliance on our legitimate business interests, in order to enter
                                            into or perform a contract with you, with your consent, and/or for
                                            compliance with our legal obligations.
                                            We may deem it necessary to follow websites and/or pages that our users may
                                            frequent in an effort to glean what types of services and/or products may be
                                            the most popular to customers or the general public.</p>

                                    </div>
                                    <div id="v-pills-a4">
                                        <h1>4. Sharing Your Information</h1>
                                        <p>We only share and disclose your information in the following situations:
                                        </p>
                                        <ol type={"1"}>
                                            <li><p>1. Compliance with Laws</p></li>
                                            <li><p>2. Vital Interests and Legal Rights
                                            </p></li>
                                            <li><p>3 .Vendors, Consultants, and Other Third-Party Service Providers</p>
                                            </li>
                                            <li><p>4. Business Transfer</p></li>
                                            <li><p>5. Affiliates</p></li>
                                            <li><p>6. Business Partners</p></li>
                                            <li><p>7. With your Consent</p></li>
                                        </ol>
                                        <p>MindGraph does not now, nor will it in the future, sell, rent or lease any of
                                            our customer lists and/or names to any third parties.
                                            We may disclose your personal information, without prior notice to you, only
                                            after entering into an agreement of non-disclosure only if required to do so
                                            in accordance with applicable laws and/or in a good faith belief that such
                                            action is deemed necessary or is required in an effort to remain in
                                            conformance with any decrees, laws and/or statutes or in an effort to comply
                                            with any process which may be served upon MindGraph.</p>

                                    </div>
                                    <div id="v-pills-a5">
                                        <h1>5. Cookies and Other Tracking Technologies</h1>
                                        <p>We are dedicated to protecting your personal information and employ a variety
                                            of security measures to safeguard your data. This includes using
                                            industry-standard encryption technologies to protect sensitive information
                                            during transmission and while stored.
                                            Access to your personal data is restricted to authorized personnel who have
                                            a legitimate need to access such information to perform their duties. All
                                            personnel are required to adhere to strict confidentiality obligations.
                                            We regularly review our security practices and update them as necessary to
                                            ensure the ongoing protection of your information, and, we also take steps
                                            to mitigate any potential harm and prevent any unauthorized access.
                                            While we take extensive measures to protect your information, it is also
                                            important that you take precautions, such as keeping your login credentials
                                            secure and not sharing them with others.
                                            We ensure that any third-party service providers who handle your data on our
                                            behalf are bound by strict contractual obligations to maintain the
                                            confidentiality and security of your information.</p></div>
                                    <div id="v-pills-a6">
                                        <h1>6. Data Security</h1>
                                        <p>We are dedicated to protecting your personal information and employ a variety
                                            of security measures to safeguard your data. This includes using
                                            industry-standard encryption technologies to protect sensitive information
                                            during transmission and while stored.
                                            Access to your personal data is restricted to authorized personnel who have
                                            a legitimate need to access such information to perform their duties. All
                                            personnel are required to adhere to strict confidentiality obligations.
                                            We regularly review our security practices and update them as necessary to
                                            ensure the ongoing protection of your information, and, we also take steps
                                            to mitigate any potential harm and prevent any unauthorized access.
                                            While we take extensive measures to protect your information, it is also
                                            important that you take precautions, such as keeping your login credentials
                                            secure and not sharing them with others.
                                            We ensure that any third-party service providers who handle your data on our
                                            behalf are bound by strict contractual obligations to maintain the
                                            confidentiality and security of your information.</p>
                                    </div>
                                    <div id="v-pills-a7">
                                        <h1>7. Your Privacy Rights</h1>
                                        <p>In some regions, such as the European Economic Area (EEA), you have rights
                                            that allow you greater access to and control over your personal information.
                                            You may review, change, or terminate your account at any time.</p>
                                    </div>
                                    <div id="v-pills-a8">
                                        <h1>8. How long we retain your personal data</h1>
                                        <p>We will retain your personal data only for as long as we need it for
                                            MindGraph’s legitimate business interest in accordance with applicable laws,
                                            to perform services as you have opted for or to meet legal requirements,
                                            after which we will take steps to delete your personal data or hold it in a
                                            form that no longer identifies you.</p>
                                    </div>
                                    <div id="v-pills-a9">
                                        <h1>9. Updates to This Policy</h1>
                                        <p>We may update this privacy policy from time to time in order to reflect new
                                            updates, for example, changes to our practices or for other operational,
                                            legal, or regulatory reasons.
                                            On some occasions, we may also actively advise you of specific data handling
                                            activities or significant changes to this Privacy Policy, as required by the
                                            applicable law.</p>
                                    </div>
                                    <div id="v-pills-a10">
                                        <h1>10. Contact Us</h1>
                                        <p>If you have questions or comments about this policy, you may email us at
                                        </p></div>
                                </div>
                                {/*<div className="tab-pane fade" id="v-pills-a2" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>2. Information We Collect</h1>*/}
                                {/*        <p>We collect personal information that you voluntarily provide to us when you*/}
                                {/*            register on the website, express an interest in obtaining information about*/}
                                {/*            us or our products and services, when you participate in activities on the*/}
                                {/*            website, or otherwise when you contact us. The types of information we*/}
                                {/*            collect could include:</p>*/}
                                {/*        <ol type={"1"}>*/}
                                {/*            <li><p>1. Voluntarily provided information which may include your name,*/}
                                {/*                address, email address, billing and/or credit card information etc.,*/}
                                {/*                which may be used when you purchase products and/or services and to*/}
                                {/*                deliver the services you have requested.*/}
                                {/*            </p></li>*/}
                                {/*            <li><p>2. Information automatically collected when visiting our website,*/}
                                {/*                which*/}
                                {/*                may include cookies, third party tracking technologies and server logs.*/}
                                {/*            </p></li>*/}
                                {/*        </ol>*/}
                                {/*        <p>Please be rest assured that we shall only collect personal information that*/}
                                {/*            you knowingly and willingly provide by way of surveys, completed membership*/}
                                {/*            forms, and emails. It is the intent of this site to use personal information*/}
                                {/*            only for the purpose for which it was requested and any additional uses*/}
                                {/*            specifically provided on this site.*/}
                                {/*            It is highly recommended and suggested that you review the privacy policies*/}
                                {/*            and statements of any website you choose to use or frequent as a means to*/}
                                {/*            better understand the way in which other websites garner, make use of and*/}
                                {/*            share information collected.*/}
                                {/*            We may collect and may make use of personal information to assist in the*/}
                                {/*            operation of our website and to ensure delivery of the services you need and*/}
                                {/*            request. At times, we may find it necessary to use personally identifiable*/}
                                {/*            information as a means to keep you informed of other*/}
                                {/*            possible products and/or services that may be available to you from*/}
                                {/*            MindGraph. We may also be in contact with you with regards to completing*/}
                                {/*            surveys and/or research questionnaires related to your opinion of current or*/}
                                {/*            potential future services that may be offered.</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a3" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>3. How We Use Your Information</h1>*/}
                                {/*        <p>We use personal information collected via our website for various business*/}
                                {/*            purposes described below. We process your personal information for these*/}
                                {/*            purposes in reliance on our legitimate business interests, in order to enter*/}
                                {/*            into or perform a contract with you, with your consent, and/or for*/}
                                {/*            compliance with our legal obligations.*/}
                                {/*            We may deem it necessary to follow websites and/or pages that our users may*/}
                                {/*            frequent in an effort to glean what types of services and/or products may be*/}
                                {/*            the most popular to customers or the general public.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a4" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>4. Sharing Your Information</h1>*/}
                                {/*        <p>We only share and disclose your information in the following situations:*/}
                                {/*        </p>*/}
                                {/*        <ol type={"1"}>*/}
                                {/*            <li><p>1. Compliance with Laws</p></li>*/}
                                {/*            <li><p>2. Vital Interests and Legal Rights*/}
                                {/*            </p></li>*/}
                                {/*            <li><p>3 .Vendors, Consultants, and Other Third-Party Service Providers</p>*/}
                                {/*            </li>*/}
                                {/*            <li><p>4. Business Transfer</p></li>*/}
                                {/*            <li><p>5. Affiliates</p></li>*/}
                                {/*            <li><p>6. Business Partners</p></li>*/}
                                {/*            <li><p>7. With your Consent</p></li>*/}
                                {/*        </ol>*/}
                                {/*        <p>MindGraph does not now, nor will it in the future, sell, rent or lease any of*/}
                                {/*            our customer lists and/or names to any third parties.*/}
                                {/*            We may disclose your personal information, without prior notice to you, only*/}
                                {/*            after entering into an agreement of non-disclosure only if required to do so*/}
                                {/*            in accordance with applicable laws and/or in a good faith belief that such*/}
                                {/*            action is deemed necessary or is required in an effort to remain in*/}
                                {/*            conformance with any decrees, laws and/or statutes or in an effort to comply*/}
                                {/*            with any process which may be served upon MindGraph.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a5" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>5. Cookies and Other Tracking Technologies</h1>*/}
                                {/*        <p>We are dedicated to protecting your personal information and employ a variety*/}
                                {/*            of security measures to safeguard your data. This includes using*/}
                                {/*            industry-standard encryption technologies to protect sensitive information*/}
                                {/*            during transmission and while stored.*/}
                                {/*            Access to your personal data is restricted to authorized personnel who have*/}
                                {/*            a legitimate need to access such information to perform their duties. All*/}
                                {/*            personnel are required to adhere to strict confidentiality obligations.*/}
                                {/*            We regularly review our security practices and update them as necessary to*/}
                                {/*            ensure the ongoing protection of your information, and, we also take steps*/}
                                {/*            to mitigate any potential harm and prevent any unauthorized access.*/}
                                {/*            While we take extensive measures to protect your information, it is also*/}
                                {/*            important that you take precautions, such as keeping your login credentials*/}
                                {/*            secure and not sharing them with others.*/}
                                {/*            We ensure that any third-party service providers who handle your data on our*/}
                                {/*            behalf are bound by strict contractual obligations to maintain the*/}
                                {/*            confidentiality and security of your information.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a6" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>6. Data Security</h1>*/}
                                {/*        <p>We are dedicated to protecting your personal information and employ a variety*/}
                                {/*            of security measures to safeguard your data. This includes using*/}
                                {/*            industry-standard encryption technologies to protect sensitive information*/}
                                {/*            during transmission and while stored.*/}
                                {/*            Access to your personal data is restricted to authorized personnel who have*/}
                                {/*            a legitimate need to access such information to perform their duties. All*/}
                                {/*            personnel are required to adhere to strict confidentiality obligations.*/}
                                {/*            We regularly review our security practices and update them as necessary to*/}
                                {/*            ensure the ongoing protection of your information, and, we also take steps*/}
                                {/*            to mitigate any potential harm and prevent any unauthorized access.*/}
                                {/*            While we take extensive measures to protect your information, it is also*/}
                                {/*            important that you take precautions, such as keeping your login credentials*/}
                                {/*            secure and not sharing them with others.*/}
                                {/*            We ensure that any third-party service providers who handle your data on our*/}
                                {/*            behalf are bound by strict contractual obligations to maintain the*/}
                                {/*            confidentiality and security of your information.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a7" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>7. Your Privacy Rights</h1>*/}
                                {/*        <p>In some regions, such as the European Economic Area (EEA), you have rights*/}
                                {/*            that allow you greater access to and control over your personal information.*/}
                                {/*            You may review, change, or terminate your account at any time.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a8" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>8. How long we retain your personal data</h1>*/}
                                {/*        <p>We will retain your personal data only for as long as we need it for*/}
                                {/*            MindGraph’s legitimate business interest in accordance with applicable laws,*/}
                                {/*            to perform services as you have opted for or to meet legal requirements,*/}
                                {/*            after which we will take steps to delete your personal data or hold it in a*/}
                                {/*            form that no longer identifies you.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a9" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>9. Updates to This Policy</h1>*/}
                                {/*        <p>We may update this privacy policy from time to time in order to reflect new*/}
                                {/*            updates, for example, changes to our practices or for other operational,*/}
                                {/*            legal, or regulatory reasons.*/}
                                {/*            On some occasions, we may also actively advise you of specific data handling*/}
                                {/*            activities or significant changes to this Privacy Policy, as required by the*/}
                                {/*            applicable law.</p>*/}

                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="tab-pane fade" id="v-pills-a10" role="tabpanel"*/}
                                {/*     aria-labelledby="v-pills-home-tab">*/}
                                {/*    <div className="">*/}
                                {/*        <h1>10. Contact Us</h1>*/}
                                {/*        <p>If you have questions or comments about this policy, you may email us at*/}
                                {/*            info@mind-graph.com</p>*/}

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

export default Privacy;
