import React from 'react'

export default function Masthead() {
    return (
        <div>
            {/* <header className="masthead"> */}
            <header>
  <div className="overlay"></div>
  {/* <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://bowandarrow.com/videos/ba-homepage.mp4" type="video/mp4"/>
  </video> */}
  <video className="VideoPlayer-video show" data-loop="125" muted="muted" preload="auto" autoplay="autoplay">
          <source data-src="https://www.leafworks.com/catalog/view/theme/default/media/leafworks-movie.1570140678.mp4" type="video/mp4" src="https://www.leafworks.com/catalog/view/theme/default/media/leafworks-movie.1570140678.mp4"/>
      </video>
  <div className="container h-100">
    <div className="d-flex h-100 text-center align-items-center">
      <div className="w-100 text-white">
      <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className=" text-white font-weight-bold test" className="typewrite" data-period="2000" 
                                data-type={`[ "Welcome to Huy's Website!" ,"Have a nice day!" ]`} alt="#">
                                <span class="wrap"></span>                                       
                            </h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
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

