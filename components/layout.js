import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
const Header = dynamic(() => import('../components/header'))
const Footer = dynamic(() => import('../components/footer'))


export default function layout(props) {
    const router = useRouter()
    return (
        <>

            <Head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Impact Bootstrap Template - Index</title>
                <meta content="" name="description" />
                <meta content="" name="keywords" />

                {/* <!-- Favicons --> */}
                <link href="assets/img/favicon.png" rel="icon" />
                <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                {/* <!-- Google Fonts --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

                {/* <!-- Vendor CSS Files --> */}
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

                {/* <!-- Template Main CSS File --> */}




                <div id="preloader"></div>

                {/* <!-- Vendor JS Files --> */}
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>

                {/* <!-- Template Main JS File --> */}
                <script src="assets/js/main.js"></script>
                {
                    router.pathname == "/burger" || router.pathname == "/crude" ?
                        <>
                            <link href="assets/css/cust.css" rel="stylesheet" />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
                            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

                            <script src="jquery-3.5.1.min.js"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></script>
                            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

                        </> :
                        <>
                            <link href="assets/css/main.css" rel="stylesheet" />
                            <link href="assets/css/cust165.css" rel="stylesheet" />
                            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
                        </>
                }

            </Head>
            {router.pathname == "/" || router.pathname == "/404" || router.pathname == "/redux" || router.pathname == "/burger" || router.pathname == "/crude"
                ?
                <div>
                    {props.children}
                </div>
                :
                <div>
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            }
        </>
    )
}
