import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
const Header = dynamic(() => import('../MLMadmin/adminheaderMLM'))
const Footer = dynamic(() => import('../MLMadmin/adminfooterMLM'))
const Sidebar = dynamic(() => import('../MLMadmin/adminsidebarMLM'))
const Preloader = dynamic(() => import('../MLMadmin/preloader'))

export default function adminlayoutMLM(props) {
    const router = useRouter()
    const title = props?.children?.props?.title ? props.children.props.title : ''

    return (
        <>

            <Head>
                <title>{title}</title>

                <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="Mega Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
                <meta name="keywords" content="bootstrap, bootstrap admin template, admin theme, admin dashboard, dashboard template, admin template, responsive" />
                <meta name="author" content="codedthemes" />

                <link rel="icon" href="/assets/MLMadmin/images/favicon.ico" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/MLMadmin/pages/waves/css/waves.min.css" type="text/css" media="all" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/css/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/MLMadmin/pages/waves/css/waves.min.css" type="text/css" media="all" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/icon/themify-icons/themify-icons.css" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/icon/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/css/jquery.mCustomScrollbar.css" />
                <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/css/style.css" />
                <link rel="stylesheet" type="text/css" href="/assets/MLMadmin/css/cust.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />

                <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/jquery/jquery.min.js"></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/jquery-ui/jquery-ui.min.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/popper.js/popper.min.js"></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/bootstrap/js/bootstrap.min.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/pages/widget/excanvas.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/pages/waves/js/waves.min.js"></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/jquery-slimscroll/jquery.slimscroll.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/modernizr/modernizr.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/jquery.mCustomScrollbar.concat.min.js "></script>
                <script type="text/javascript" src="/assets/MLMadmin/js/chart.js/Chart.js"></script>
                <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
                <script src="/assets/MLMadmin/pages/widget/amchart/gauge.js"></script>
                <script src="/assets/MLMadmin/pages/widget/amchart/serial.js"></script>
                <script src="/assets/MLMadmin/pages/widget/amchart/light.js"></script>
                <script src="/assets/MLMadmin/pages/widget/amchart/pie.min.js"></script>
                <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
                <script src="/assets/MLMadmin/js/pcoded.min.js"></script>
                <script src="/assets/MLMadmin/js/vertical-layout.min.js "></script>
                {/* <script type="text/javascript" src="/assets/MLMadmin/pages/dashboard/custom-dashboard.js"></script> */}
                <script type="text/javascript" src="/assets/MLMadmin/js/script.js "></script>

            </Head>
            {router.pathname == "/MLMadmin"
                ?
                <div>
                    <Preloader />
                    {props.children}
                </div>
                :
                <div>
                    <Preloader />
                    <div id="pcoded" className="pcoded">
                        <div className="pcoded-overlay-box"></div>
                        <div className="pcoded-container navbar-wrapper">
                            <Header />
                            <div className="pcoded-main-container">
                                <div className="pcoded-wrapper">
                                    <Sidebar />
                                    <div className="pcoded-content">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
