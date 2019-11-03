import React from 'react'
import PortfolioSection from './PortfolioSection'

export default function AboutSection() {
    return (
        <>

            <div className="aboutComponent">
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-3">
                                <nav className="navbar navbar-expand-lg navbar-dark bg-primary-leftBar fixed-top-mini" id="sideNav">
                                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                                        <span className="d-none d-lg-block">
                                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/huy.jpg" alt="" />
                                        </span>
                                    </a>
                                    <button id='buttonAbout' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                                            </li> */}
                                            <li className="nav-item">
                                                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div className="col-lg-9 text-left" id="textCV">

                                <div className="container-fluid p-0">

                                    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                                        <div className="w-100">
                                            <h1 className="mb-0">Huy
                                            <span className="text-primary"> Ben</span>
                                            </h1>
                                            <div className="subheading mb-5">Ho Chi Minh city · VietNam · (84) 77 8697 924 ·
                                            <a href="mailto:name@email.com">thanhhuy0611@gmail.com</a>
                                            </div>
                                            <p className="lead mb-5">I am currently looking for a full-stack or front-end
                                                position to contribute and improve my
                                                programming knowledge and skills. I am always
                                                willing to break through challenges and learning
                                                along the way.
                                            </p>
                                            <div className="social-icons">
                                                <a href="https://www.linkedin.com/in/thanh-huy-tr%E1%BA%A7n-762953145/" target="_blank">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href="https://github.com/thanhhuy0611" target="_blank">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                                <a href="https://www.facebook.com/tran.huy.39108" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                    <hr className="m-0" />

                                    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                                        <div className="w-100">
                                            <h2 className="mb-5">Skills</h2>

                                            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                                            <ul className="list-inline dev-icons">
                                                <li className="list-inline-item">
                                                    <i className="fab fa-html5"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fab fa-css3-alt"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fab fa-js-square"></i>
                                                </li>
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-angular"></i>
                                                </li> */}
                                                <li className="list-inline-item">
                                                    <i className="fab fa-react"></i>
                                                </li>
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-node-js"></i>
                                                </li> */}
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-sass"></i>
                                                </li> */}
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-less"></i>
                                                </li> */}
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-wordpress"></i>
                                                </li> */}
                                                {/* <li className="list-inline-item">
                                                    <i className="fab fa-gulp"></i>
                                                </li> */}
                                                <li className="list-inline-item">
                                                    <i className="fab fa-python"></i>
                                                </li>
                                            </ul>

                                            <div className="subheading mb-3">My projects</div>
                                            {/* <ul className="fa-ul mb-0">
                                                <li>
                                                    <i className="fa-li fa fa-check"></i>
                                                    Mobile-First, Responsive Design</li>
                                                <li>
                                                    <i className="fa-li fa fa-check"></i>
                                                    Cross Browser Testing &amp; Debugging</li>
                                                <li>
                                                    <i className="fa-li fa fa-check"></i>
                                                    Cross Functional Teams</li>
                                                <li>
                                                    <i className="fa-li fa fa-check"></i>
                                                    Agile Development &amp; Scrum</li>
                                            </ul> */}
                                            <PortfolioSection/>
                                        </div>
                                    </section>
                                    <hr className="m-0" />

                                    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                                        <div className="w-100">
                                            <h2 className="mb-5">Education</h2>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Coder School</h3>
                                                    <div className="subheading mb-3">Full-stack web development bootcamp</div>
                                                    <p>HTML/CSS, Javascript, React, Python</p>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">September 2019 - December 2019</span>
                                                </div>
                                            </div>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Finance and Marketing University</h3>
                                                    <div className="subheading mb-3">Finance</div>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">August 2014 - May 2017</span>
                                                </div>
                                            </div>

                                        </div>
                                    </section>

                                    
                                    <hr className="m-0" />
                                    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                                        <div className="w-100">
                                            <h2 className="mb-5">Interests</h2>
                                            <p>Apart from being a web developer, I enjoy most of my time being outdoors. I enjoy playing football, go to workshops, english club or meet friends.</p>
                                            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows,  and I spend a large amount of my free time exploring the latest technology advancements in the web development world.</p>
                                        </div>
                                    </section>


                                    {/* <hr className="m-0" /> */}

                                    {/* <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                                        <div className="w-100">
                                            <h2 className="mb-5">Experience</h2>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Senior Web Developer</h3>
                                                    <div className="subheading mb-3">Intelitec Solutions</div>
                                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">March 2013 - Present</span>
                                                </div>
                                            </div>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Web Developer</h3>
                                                    <div className="subheading mb-3">Intelitec Solutions</div>
                                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">December 2011 - March 2013</span>
                                                </div>
                                            </div>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Junior Web Designer</h3>
                                                    <div className="subheading mb-3">Shout! Media Productions</div>
                                                    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">July 2010 - December 2011</span>
                                                </div>
                                            </div>

                                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                                <div className="resume-content">
                                                    <h3 className="mb-0">Web Design Intern</h3>
                                                    <div className="subheading mb-3">Shout! Media Productions</div>
                                                    <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                                                </div>
                                                <div className="resume-date text-md-right">
                                                    <span className="text-primary">September 2008 - June 2010</span>
                                                </div>
                                            </div>

                                        </div>

                                    </section> */}

                                    
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
