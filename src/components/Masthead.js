import React, { useEffect } from 'react'

export default function Masthead() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    function textRun() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    const path = window.location.pathname;
    useEffect(() => {
        textRun();    
    }, [path])
    
    
    return (
        <div>
            {/* <header className="masthead"> */}
            <header className="head">
                <div className="overlay"></div>
                <video className="VideoPlayer-video show" loop="loop" playsinline="playsinline" muted="muted" preload="auto" autoplay="autoplay">
                    <source data-src="https://www.leafworks.com/catalog/view/theme/default/media/leafworks-movie.1570140678.mp4" type="video/mp4" src="https://www.leafworks.com/catalog/view/theme/default/media/leafworks-movie.1570140678.mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <div className="container h-100">
                                <div className="row h-100 align-items-center justify-content-center text-center">
                                    <div className="col-lg-10 align-self-end">
                                        <h1 className=" text-white font-weight-bold test" className="typewrite" data-period="2000"
                                            data-type={`[ "Welcome to Huy's portfolio!","I'm a software developer" ]`} alt="#">
                                            <span class="wrap"></span>
                                        </h1>
                                        <hr className="divider my-4" />
                                    </div>
                                    <div className="col-lg-8 align-self-baseline">
                                        <p className="text-white-75 font-weight-light mb-5">“Experience is the name everyone gives to their mistakes.” – Oscar Wilde</p>
                                        <p className="text-white-75 font-weight-light mb-5">Feel free to take a look through my projects in past.</p>
                                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="project">Projects</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* </header> */}
        </div>
    )
}

