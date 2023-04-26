import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
const Header = dynamic(() => import('../components/onepage/header'))
const Footer = dynamic(() => import('../components/onepage/footer'))
const Section2 = dynamic(() => import('../components/onepage/section2'))
const Section3 = dynamic(() => import('../components/onepage/section3'))
const Section4 = dynamic(() => import('../components/onepage/section4'))
const Section5 = dynamic(() => import('../components/onepage/section5'))
const Section6 = dynamic(() => import('../components/onepage/section6'))

export default function burger() {
    return (
        <>
            <div className='sec1'>
                <Header />
                <div id="carouselExampleInterval" class="carousel slide align-items-center d-flex carouselheight" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1500">
                            <div className='row align-items-center'>
                                <div className='col-sm-6 col-xs-12 ps-md-5 sec1leftdiv'>
                                    <h3 className='goodtimetxt'>It is a good time for the great taste of burgers</h3>
                                    <h1 className='bannertext1'>specialll</h1>
                                    <h1 className='bannertext2'>burger</h1>
                                </div>
                                <div className='col-sm-6 col-xs-12 d-flex justify-content-end pe-md-5 sec1image order-first order-sm-last '>
                                    <img src="assets/img/burger/1.png" class="d-block img-fluid" alt="..." />
                                    <div class="banner-badge aos-init aos-animate" data-aos="fade-right">
                                        <div class="banner-price">20% <span>Off</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1500">
                            <div className='row align-items-center'>
                                <div className='col-sm-6 col-xs-12 ps-md-5 sec1leftdiv'>
                                    <h3 className='goodtimetxt'>It is a good time for the great taste of burgers</h3>
                                    <h1 className='bannertext1'>specialll</h1>
                                    <h1 className='bannertext2'>burger</h1>
                                </div>
                                <div className='col-sm-6 col-xs-12 d-flex justify-content-end pe-md-5 sec1image order-first order-sm-last '>
                                    <img src="assets/img/burger/1.png" class="d-block img-fluid" alt="..." />
                                    <div class="banner-badge aos-init aos-animate" data-aos="fade-right">
                                        <div class="banner-price">20% <span>Off</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1500">
                            <div className='row align-items-center'>
                                <div className='col-sm-6 col-xs-12 ps-md-5 sec1leftdiv'>
                                    <h3 className='goodtimetxt'>It is a good time for the great taste of burgers</h3>
                                    <h1 className='bannertext1'>specialll</h1>
                                    <h1 className='bannertext2'>burger</h1>
                                </div>
                                <div className='col-sm-6 col-xs-12 d-flex justify-content-end pe-md-5 sec1image order-first order-sm-last '>
                                    <img src="assets/img/burger/1.png" class="d-block img-fluid" alt="..." />
                                    <div class="banner-badge aos-init aos-animate" data-aos="fade-right">
                                        <div class="banner-price">20% <span>Off</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 /> 
            <Section3 /> 
            <Section4 /> 
            <Section5 /> 
            <Section6 /> 
            <Footer />
        </>
    )
}
