import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function adminsidebarMLM() {
    const router = useRouter()

    return (
        <nav className="pcoded-navbar">
            <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
            <div className="pcoded-navigation-label" data-i18n="nav.category.navigation">Admin</div>
            <ul className="pcoded-item pcoded-left-item">
                <li className={router.pathname.includes("dashboard") ? "active" : ""}>
                    <Link href={process.env.MLM_BASEURL + "dashboard"} className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-home"></i><b>D</b></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
                    </Link>
                </li>  
            </ul>
            <ul className="pcoded-item pcoded-left-item">
                <li className={router.pathname.includes("managecoin") ? "active" : ""}>
                    <Link href={process.env.MLM_BASEURL + "managecoin"} className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-control-forward"></i><b>M</b></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Manage Coin</span>
                    </Link>
                </li>   
            </ul>
            <ul className="pcoded-item pcoded-left-item">
                <li className={router.pathname.includes("manageuser") ? "active" : ""}>
                    <Link href={process.env.MLM_BASEURL + "manageuser"} className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-control-forward"></i><b>M</b></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Manage User</span>
                    </Link>
                </li>   
            </ul>
            <ul className="pcoded-item pcoded-left-item">
                <li className={router.pathname.includes("managepackage") ? "active" : ""}>
                    <Link href={process.env.MLM_BASEURL + "managepackage"} className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-control-forward"></i><b>M</b></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Manage Package</span>
                    </Link>
                </li>   
            </ul>
            <ul className="pcoded-item pcoded-left-item">
                <li className={router.pathname.includes("packagehistory") ? "active" : ""}>
                    <Link href={process.env.MLM_BASEURL + "packagehistory"} className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-control-forward"></i><b>M</b></span>
                        <span className="pcoded-mtext" data-i18n="nav.dash.main">Manage User Package History</span>
                    </Link>
                </li>   
            </ul>
        </nav>
    )
}
