import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
const Header = dynamic(() => import('../MLMuser/userheaderMLM'))
const Footer = dynamic(() => import('../MLMuser/userfooterMLM'))
const Sidebar = dynamic(() => import('../MLMuser/usersidebarMLM'))

export default function adminlayoutMLM(props) {
    const router = useRouter()
    const title = props?.children?.props?.title ? props.children.props.title : ''

    return (
        <>

            <Head>
                <title>{title}</title>

                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <meta name="description" content="CoreUI - Open Source Bootstrap Admin Template" />
                <meta name="author" content="Łukasz Holeczek" />
                <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,jQuery,CSS,HTML,RWD,Dashboard" />

                <link rel="apple-touch-icon" sizes="57x57" href="/assets/MLMuser/assets/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/MLMuser/assets/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/MLMuser/assets/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/MLMuser/assets/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/MLMuser/assets/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/MLMuser/assets/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/MLMuser/assets/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/MLMuser/assets/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/MLMuser/assets/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/MLMuser/assets/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/MLMuser/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/MLMuser/assets/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/MLMuser/assets/favicon/favicon-16x16.png" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/icon/font-awesome/css/font-awesome.min.css" />

                <link rel="manifest" href="/assets/MLMuser/assets/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/assets/MLMuser/assets/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="stylesheet" href="/assets/MLMuser/vendors/simplebar/css/simplebar.css" />
                <link rel="stylesheet" href="/assets/MLMuser/css/vendors/simplebar.css" />
                <link href="/assets/MLMuser/css/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css" />
                <link href="/assets/MLMuser/css/examples.css" rel="stylesheet" />
                <link href="/assets/MLMuser/vendors/@coreui/chartjs/css/coreui-chartjs.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

                <script src="/assets/MLMuser/vendors/@coreui/coreui/js/coreui.bundle.min.js"></script>
                <script src="/assets/MLMuser/vendors/simplebar/js/simplebar.min.js"></script>
                <script src="/assets/MLMuser/vendors/chart.js/js/chart.min.js"></script>
                <script src="/assets/MLMuser/vendors/@coreui/chartjs/js/coreui-chartjs.js"></script>
                <script src="/assets/MLMuser/vendors/@coreui/utils/js/coreui-utils.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                {
                    router.pathname == "/MLMuser/packagelist" &&
                        <>
                        
                        <link href="/assets/css/cust.css" rel="stylesheet" />
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

                        </>
                }

            </Head>
            
            <div className=' bg-white'>
                    {props.children}
                </div>
                
            
        </>
    )
}
