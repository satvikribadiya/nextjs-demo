import React, { useEffect } from 'react'

export default function section4() {
    useEffect(() => {

        $(document).ready(function () {
            $("#news-slider").owlCarousel({
                loop: true,
                margin: 5,
                nav: false,
                responsiveClass: true,
                autoplay: false,
                center: true,
                responsive: {
                    0: {
                        items: 1.5,
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        });
    }, [])

    return (
        <div className='sec4main'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 slidercolpadding">
                        <div id="news-slider" class="owl-carousel">
                            <div class="post-slide">
                                <div class="post-img">
                                    <img src="assets/img/burger/sec3-1.png" className='sliderimage' alt="" />
                                </div>
                                <div class="post-content mt-3">
                                    <h3 class="post-title">
                                        hamburger1
                                    </h3>
                                    <div className='pb-3'>
                                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <h5 href="#" class="read-more">Order Now</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="post-slide">
                                <div class="post-img">
                                    <img src="assets/img/burger/sec3-2.png" className='sliderimage' alt="" />
                                </div>
                                <div class="post-content mt-3">
                                    <h3 class="post-title">
                                        hamburger2
                                    </h3>
                                    <div className='pb-3'>
                                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <h5 href="#" class="read-more">Order Now</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="post-slide">
                                <div class="post-img">
                                    <img src="assets/img/burger/sec3-3.png" className='sliderimage' alt="" />
                                </div>
                                <div class="post-content mt-3">
                                    <h3 class="post-title">
                                        hamburger3
                                    </h3>
                                    <div className='pb-3'>
                                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        <h5 href="#" class="read-more">Order Now</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
