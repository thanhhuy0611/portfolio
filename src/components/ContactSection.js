import React from 'react'
import Footer from './Footer';


export default function ContactSection() {
    return (
        <div id={'backgroundContact'}>
            <section className="page-section" id="contact" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Let's Get In Touch!</h2>
                            <hr className="divider my-4" />
                            <p className="text-muted mb-5">If you are interested in my profile don't hesitate to leave me a message or contact me directly via...</p>
                        </div>
                    </div>
                    <div id='iconSocial' className="row">
                        <a href="a"><i class="fab fa-facebook-square"></i></a>
                        <a href="a"><i class="fab fa-linkedin"></i></a>
                        <a href="a"><i class="fab fa-github-square"></i></a>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                            <div>077 8697 924</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                            <a className="d-block" href="mailto:contact@yourwebsite.com">thanhhuy0611@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
