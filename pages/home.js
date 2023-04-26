import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
const Mainbutton = dynamic(() => import('../components/usercard/button'))
const Iconbox = dynamic(() => import('../components/usercard/iconbox'))
const Servicecard = dynamic(() => import('../components/usercard/servicecard'))
const Testimonialcard = dynamic(() => import('../components/usercard/testimonialcard'))
const Portfoliocard = dynamic(() => import('../components/usercard/portfoliocard'))
const Teamcard = dynamic(() => import('../components/usercard/teamcard'))
const Pricingcard = dynamic(() => import('../components/usercard/pricingcard'))
const Faqcard = dynamic(() => import('../components/usercard/faqcard'))
const Blogpostcard = dynamic(() => import('../components/usercard/blogpostcard'))



export default function home() {
    const defaultobj = {
        name: "",
        email: "",
        subject: "",
        Image: [],
        message: ""
    }
    const [changedata, setchangedata] = useState({ ...defaultobj })
    const onchangesdata = (e) => {
        if (e.target.type == "file") {
            setchangedata({ ...changedata, Image: e.target.files })
        } else {
            setchangedata({ ...changedata, [e.target.name]: e.target.value })
        }
    }
    const submitdata = (e) => {
        const formData = new FormData();

        for (let i = 0; i < changedata.Image.length; i++) {
            formData.append("Image", changedata.Image[i]);
        }
        formData.append("name", changedata.name);
        formData.append("email", changedata.email);
        formData.append("subject", changedata.subject);
        formData.append("message", changedata.message);

    }

    return (
        <>
            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Welcome to <span>Impact</span></h2>
                            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Mainbutton buttonname='Get Started' link="#" />
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                        </div>
                    </div>
                </div>

                <div className="icon-boxes position-relative">
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">
                            <Iconbox iconclass='bi bi-easel' boxlink='' boxname='Lorem Ipsum' />
                            <Iconbox iconclass='bi bi-gem' boxlink='' boxname='Sed ut perspiciatis' />
                            <Iconbox iconclass='bi bi-geo-alt' boxlink='' boxname='Magni Dolores' />
                            <Iconbox iconclass='bi bi-command' boxlink='' boxname='Nemo Enim' />
                        </div>
                    </div>
                </div>

            </section>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>About Us</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <h3>Voluptatem dignissimos provident quasi corporis</h3>
                            <img src="assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
                            <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                            <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>

                                <div className="position-relative mt-4">
                                    <img src="assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- ======= Clients Section ======= --> */}
            <section id="clients" className="clients">
                <div className="container" data-aos="zoom-out">

                    <div className="clients-slider swiper" >
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide "><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Clients Section --> */}

            {/* <!-- ======= Stats Counter Section ======= --> */}
            <section id="stats-counter" className="stats-counter">
                <div className="container" data-aos="fade-up">

                    <div className="row gy-4 align-items-center">

                        <div className="col-lg-6">
                            <img src="assets/img/stats-img.svg" alt="" className="img-fluid" />
                        </div>

                        <div className="col-lg-6">

                            <div className="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
                            </div>

                            <div className="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>

                            <div className="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Stats Counter Section --> */}

            {/* <!-- ======= Call To Action Section ======= --> */}
            <section id="call-to-action" className="call-to-action">
                <div className="container text-center" data-aos="zoom-out">
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                    <h3>Call To Action</h3>
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a className="cta-btn" href="#">Call To Action</a>
                </div>
            </section>
            {/* <!-- End Call To Action Section --> */}

            {/* <!-- ======= Our Services Section ======= --> */}
            <section id="services" className="services sections-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Our Services</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    </div>

                    <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                        <Servicecard icon="bi bi-activity" heading='Nesciunt Mete' content='Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' linkname='#' buttonname='Read more' />
                        <Servicecard icon="bi bi-broadcast" heading='Eosle Commodi' content='Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.' linkname='#' buttonname='Read more' />
                        <Servicecard icon="bi bi-easel" heading='Ledo Markt' content='Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' linkname='#' buttonname='Read more' />
                        <Servicecard icon="bi bi-bounding-box-circles" heading='Asperiores Commodit' content='Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.' linkname='#' buttonname='Read more' />
                        <Servicecard icon="bi bi-calendar4-week" heading='Velit Doloremque' content='Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.' linkname='#' buttonname='Read more' />
                        <Servicecard icon="bi bi-chat-square-text" heading='Dolori Architecto' content='Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.' linkname='#' buttonname='Read more' />
                    </div>

                </div>
            </section>
            {/* <!-- End Our Services Section --> */}

            {/* <!-- ======= Testimonials Section ======= --> */}
            <section id="testimonials" class="testimonials">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Testimonials</h2>
                        <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
                    </div>

                    <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">
                            <Testimonialcard personimg='testimonials-1.jpg' personname='Saul Goodman' post='Ceo &amp; Founder' ratingstars={5} content=  'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'/>
                            <Testimonialcard personimg='testimonials-2.jpg' personname='Sara Wilsson' post='Designer' ratingstars={3} content=  'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'/>
                            <Testimonialcard personimg='testimonials-3.jpg' personname='Jena Karlis' post='Store Owner' ratingstars={4} content=  'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'/>
                            <Testimonialcard personimg='testimonials-4.jpg' personname='Matt Brandon' post='Freelancer' ratingstars={2} content=  'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.'/>
                            <Testimonialcard personimg='testimonials-5.jpg' personname='John Larson' post='Entrepreneur' ratingstars={5} content=  'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.'/>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>

                </div>
            </section>
            {/* <!-- End Testimonials Section --> */}
            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" class="portfolio sections-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Portfolio</h2>
                        <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
                    </div>

                    <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                        <div>
                            <ul class="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-product">Product</li>
                                <li data-filter=".filter-branding">Branding</li>
                                <li data-filter=".filter-books">Books</li>
                            </ul>
                            {/* <!-- End Portfolio Filters --> */}
                        </div>

                        <div class="row gy-4 portfolio-container">

                            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                                <Portfoliocard imagename='app-1.jpg' heading='App 1' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                                <Portfoliocard imagename='product-1.jpg' heading='Product 1' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                                <Portfoliocard imagename='branding-1.jpg' heading='Branding 1' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                                <Portfoliocard imagename='books-1.jpg' heading='Books 1' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                                <Portfoliocard imagename='app-2.jpg' heading='App 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                                <Portfoliocard imagename='product-2.jpg' heading='Product 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                                <Portfoliocard imagename='branding-2.jpg' heading='Branding 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                                <Portfoliocard imagename='books-2.jpg' heading='Books 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                                <Portfoliocard imagename='app-3.jpg' heading='App 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                                <Portfoliocard imagename='product-3.jpg' heading='Product 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                                <Portfoliocard imagename='branding-3.jpg' heading='Branding 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                                <Portfoliocard imagename='books-3.jpg' heading='Books 2' portfoliolink='portfolio-details.html' content='Lorem ipsum, dolor sit amet consectetur' />
                            </div>
                        </div>
                        {/* <!-- End Portfolio Container --> */}

                    </div>

                </div>
            </section>
            {/* <!-- End Portfolio Section --> */}

            {/* <!-- ======= Our Team Section ======= --> */}
            <section id="team" class="team">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Our Team</h2>
                        <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                    </div>

                    <div class="row gy-4">
                        <Teamcard memberimg='team-1.jpg' membername='Walter White' memberpost='Web Development' fblink='' twitterlink='' instagramlink='' linkedinlink='' />
                        <Teamcard memberimg='team-2.jpg' membername='Sarah Jhinson' memberpost='Marketing' fblink='' twitterlink='' instagramlink='' linkedinlink='' />
                        <Teamcard memberimg='team-3.jpg' membername='William Anderson' memberpost='Content' fblink='' twitterlink='' instagramlink='' linkedinlink='' />
                        <Teamcard memberimg='team-4.jpg' membername='Amanda Jepson' memberpost='Accountant' fblink='' twitterlink='' instagramlink='' linkedinlink='' />
                    </div>

                </div>
            </section>

            {/* <!-- ======= Pricing Section ======= --> */}
            <section id="pricing" class="pricing sections-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Pricing</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    </div>

                    <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">
                        <div class="col-lg-4">
                            <div class="pricing-item">
                                <Pricingcard planname='Free Plan' icon='bi bi-box' rupees='0' fistservice=' <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>' secondservice='<li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>' thirdservice='<li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>' forthservice='<li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>' fiveservice='<li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>' />
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="pricing-item featured">
                                <Pricingcard planname='Business Plan' icon='bi bi-airplane' rupees='29' fistservice=' <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>' secondservice='<li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>' thirdservice='<li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>' forthservice='<li><i class="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>' fiveservice='<li><i class="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>' />
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="pricing-item">
                                <Pricingcard planname='Developer Plan' icon='bi bi-send' rupees='49' fistservice=' <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>' secondservice='<li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>' thirdservice='<li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>' forthservice='<li><i class="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>' fiveservice='<li><i class="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>' />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Pricing Section --> */}

            {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
            <section id="faq" class="faq">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <div class="col-lg-4">
                            <div class="content px-xl-5">
                                <h3>Frequently Asked <strong>Questions</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-8">

                            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">
                                <Faqcard faqheading='Non consectetur a erat nam at lectus urna duis?' faqnumber='1' faqcontent='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' />
                                <Faqcard faqheading='Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?' faqnumber='2' faqcontent='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.' />
                                <Faqcard faqheading='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?' faqnumber='3' faqcontent='Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' />
                                <Faqcard faqheading='Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?' faqnumber='4' faqcontent='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.' />
                                <Faqcard faqheading='Tempus quam pellentesque nec nam aliquam sem et tortor consequat?' faqnumber='5' faqcontent='Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in' />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Frequently Asked Questions Section --> */}

            {/* <!-- ======= Recent Blog Posts Section ======= --> */}
            <section id="recent-posts" class="recent-posts sections-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Recent Blog Posts</h2>
                        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                    </div>

                    <div class="row gy-4">
                        <Blogpostcard memberimg='blog-1.jpg' heading='Politics' subheading='Dolorum optio tempore voluptas dignissimos' authername='Maria Doe' date='Jan 1, 2022' />
                        <Blogpostcard memberimg='blog-2.jpg' heading='Sports' subheading='Nisi magni odit consequatur autem nulla dolorem' authername='Allisa Mayer' date='Jun 5, 2022' />
                        <Blogpostcard memberimg='blog-3.jpg' heading='Entertainment' subheading='Possimus soluta ut id suscipit ea ut in quo quia et soluta' authername='Mark Dower' date='Jun 22, 2022' />
                    </div>

                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Contact</h2>
                        <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                    </div>

                    <div className="row gx-lg-0 gy-4">

                        <div className="col-lg-4">

                            <div className="info-container d-flex flex-column align-items-center justify-content-center">
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-clock flex-shrink-0"></i>
                                    <div>
                                        <h4>Open Hours:</h4>
                                        <p>Mon-Sat: 11AM - 23PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <form action="" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={onchangesdata} required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={onchangesdata} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={onchangesdata} required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="file" className="form-control" name="Image" id="Image" placeholder="Image" onChange={onchangesdata} required multiple />
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="7" placeholder="Message" onChange={onchangesdata} required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="button" onClick={e => submitdata()}>Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
