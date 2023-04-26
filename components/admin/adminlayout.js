import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
const Header = dynamic(() => import('../admin/header'))
const Footer = dynamic(() => import('../admin/footer'))
const Sidebar = dynamic(() => import('../admin/sidebar'))


export default function layout(props) {
    const router = useRouter()
    const title = props?.children?.props?.title ? props.children.props.title : ''

    return (
        <>

            <Head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>{title != '' && process.env.SITENAME != '' ? title + ' | ' + process.env.SITENAME : ''}</title>
                <meta content="" name="description" />
                <meta content="" name="keywords" />

                {/* <!-- Favicons --> */}
                <link href="/assets/admin/img/favicon.png" rel="icon" />
                <link href="/assets/admin/img/apple-touch-icon.png" rel="apple-touch-icon" />

                {/* <!-- Google Fonts --> */}
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                {/* <!-- Vendor CSS Files --> */}
                <link href="/assets/admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/quill/quill.snow.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/quill/quill.bubble.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/remixicon/remixicon.css" rel="stylesheet" />
                <link href="/assets/admin/vendor/simple-datatables/style.css" rel="stylesheet" />

                {/* <!-- Template Main CSS File --> */}
                <link href="/assets/admin/css/style.css" rel="stylesheet" />

                <script src="/assets/admin/vendor/apexcharts/apexcharts.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
                <script src="/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/admin/vendor/chart.js/chart.umd.js"></script>
                <script src="/assets/admin/vendor/echarts/echarts.min.js"></script>
                <script src="/assets/admin/vendor/quill/quill.min.js"></script>
                <script src="/assets/admin/vendor/simple-datatables/simple-datatables.js"></script>
                <script src="/assets/admin/vendor/tinymce/tinymce.min.js"></script>
                <script src="/assets/admin/vendor/php-email-form/validate.js"></script>

                {/* <!-- Template Main JS File --> */}
                <script src="/assets/admin/js/main.js"></script>

            </Head>
            {router.pathname == "/backadm" || router.pathname == "/backadm/login"
                ?
                <div>
                    {props.children}
                </div>
                : 
                <div>
                    <Header />
                    <Sidebar />
                    {props.children}
                    <Footer />
                    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
                </div>
            }
        </>
    )
}
