import React, {useState} from 'react'

export default function Navigation() {
    const [scrollStyle,setScrollStyle] = useState('')
    const [collap,setCollap] = useState(false)

    const handleClick = () => {
        setCollap(!collap)
    }

    window.addEventListener('scroll', () => {
        const y = (window.scrollY || window.pageYOffset)
        if(y>=1){setScrollStyle('navbar-scrolled')}
        else setScrollStyle('')
    })
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrollStyle}`} id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    <button onClick={()=>handleClick()} className={`navbar-toggler navbar-toggler-right`} type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={collap} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${collap ? 'show':''}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
