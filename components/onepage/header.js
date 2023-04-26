import Image from 'next/image'
import React, { useEffect } from 'react'

export default function header() {
    useEffect(() => {
        let header = $(".navbar");
        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll > 0) {
                header.addClass("bgnavbar");
            } else {
                header.removeClass("bgnavbar");
            }

        }
        window.addEventListener("scroll", handleScroll, { passive: true })
    }, [])
    const addbgclass = () => {
        let header = $(".navbar");
        let headernav = $(".bgnavbarclick");
        if (headernav.length == 0) {
            header.addClass("bgnavbarclick");
        } else {
            header.removeClass("bgnavbarclick");
        }
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ps-md-5 pe-md-5 pt-3 pb-3">
                <a className="navbar-brand navbarlogo" href="#">
                    <img src='/assets/img/burger/logo.png' className='me-md-4' />
                    <span className=' fw-600 font-basic-color'>BURGER HOUSE</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => addbgclass()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='ms-auto'>
                        <div className='delivery fs-17 sw-700 d-flex justify-content-end pe-2'>
                            <Image className="me-3" src='/assets/img/burger/delivery-icon.png' height={33} width={41}/>
                            <p>Call for Delivery +4 450 68 7474</p>
                        </div>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link navlinkfont font-basic font-basic-color fs-24 " aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinkfont font-basic font-basic-color fs-24 " href="#">MENU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinkfont font-basic font-basic-color fs-24 " href="#">RESERVATION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinkfont font-basic font-basic-color fs-24 " href="#">EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinkfont font-basic font-basic-color fs-24 " href="#">CONTACT US</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}
