import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Navigation() {
    const [scrollStyle, setScrollStyle] = useState('')
    const [collap, setCollap] = useState(false)
    const path = window.location.pathname;
    let history = useHistory();
//---------------------------------------
    const handleClickLink = (route) => {
        history.push(route);
    }

    const handleClick = () => {
        setCollap(!collap)
    }

    window.addEventListener('scroll', () => {
        const y = (window.scrollY || window.pageYOffset)
        if (y >= 1) { setScrollStyle('navbar-scrolled') }
        else setScrollStyle('')
    })
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrollStyle}`} id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/">Huy's portfolio</a>
                    <button className={`navbar-toggler navbar-toggler-right`} type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={collap} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${collap ? 'show' : ''}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <div onClick={()=>handleClickLink("/")} className={`speak two ${path === "/" ? "active" : ""} `}><span>
                                <li className="nav-item">
                                    <a className={` nav-link js-scroll-trigger ${path === "/" ? "active" : ""}`} >Home</a>
                                </li>
                            </span></div>
                            <div onClick={()=>handleClickLink("/about")} className={`speak two ${path === "/about" ? "active" : ""} `}><span>
                                <li className="nav-item ">
                                    <a className={`nav-link js-scroll-trigger ${path === "/about" ? "active" : ""}`} >About</a>
                                </li>
                            </span></div>
                            <div onClick={()=>handleClickLink("/project")} className={`speak two ${path === "/project" ? "active" : ""} `}><span>
                                <li className="nav-item">
                                    <a  className={`nav-link js-scroll-trigger ${path === "/project" ? "active" : ""}`}>Project</a>
                                </li>
                            </span></div>
                            <div onClick={()=>handleClickLink("/contact")} className={`speak two ${path === "/contact" ? "active" : ""} `}><span>
                                <li className="nav-item">
                                    <a className={`nav-link js-scroll-trigger ${path === "/contact" ? "active" : ""}`}>Contact</a>
                                </li>
                            </span></div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
