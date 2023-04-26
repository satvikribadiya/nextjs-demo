import React from 'react'

export default function adminheaderMLM() {
    return (
        <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <a className="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
                        <i className="ti-menu"></i>
                    </a>
                    <div className="mobile-search waves-effect waves-light">
                        <div className="header-search">
                            <div className="main-search morphsearch-search">
                                <div className="input-group">
                                    <span className="input-group-addon search-close"><i className="ti-close"></i></span>
                                    <input type="text" className="form-control" placeholder="Enter Keyword"/>
                                        <span className="input-group-addon search-btn"><i className="ti-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img className="img-fluid" src="/assets/MLMadmin/images/logo.png" alt="Theme-Logo" />
                    </a>
                    <a className="mobile-options waves-effect waves-light">
                        <i className="ti-more"></i>
                    </a>
                </div>

                <div className="navbar-container container-fluid">
                    <ul className="nav-left">
                        <li>
                            <div className="sidebar_toggle"><a href=""><i className="ti-menu"></i></a></div>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li className="header-notification">
                            <a href="#!" className="waves-effect waves-light">
                                <i className="ti-bell"></i>
                                <span className="badge bg-c-red"></span>
                            </a>
                            <ul className="show-notification">
                                <li>
                                    <h6>Notifications</h6>
                                    <label className="label label-danger">New</label>
                                </li>
                                <li className="waves-effect waves-light">
                                    <div className="media">
                                        <img className="d-flex align-self-center img-radius" src="/assets/MLMadmin/images/avatar-2.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <h5 className="notification-user">John Doe</h5>
                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                    </div>
                                </li>
                                <li className="waves-effect waves-light">
                                    <div className="media">
                                        <img className="d-flex align-self-center img-radius" src="/assets/MLMadmin/images/avatar-4.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <h5 className="notification-user">Joseph William</h5>
                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                    </div>
                                </li>
                                <li className="waves-effect waves-light">
                                    <div className="media">
                                        <img className="d-flex align-self-center img-radius" src="/assets/MLMadmin/images/avatar-3.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <h5 className="notification-user">Sara Soudein</h5>
                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="user-profile header-notification">
                            <a href="#!" className="waves-effect waves-light">
                                <img src="/assets/MLMadmin/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image"/>
                                    <span>John Doe</span>
                                    <i className="ti-angle-down"></i>
                            </a>
                            <ul className="show-notification profile-notification">
                                <li className="waves-effect waves-light">
                                    <a href="#!">
                                        <i className="ti-settings"></i> Settings
                                    </a>
                                </li>
                                <li className="waves-effect waves-light">
                                    <a href="user-profile.html">
                                        <i className="ti-user"></i> Profile
                                    </a>
                                </li>
                                <li className="waves-effect waves-light">
                                    <a href="email-inbox.html">
                                        <i className="ti-email"></i> My Messages
                                    </a>
                                </li>
                                <li className="waves-effect waves-light">
                                    <a href="auth-lock-screen.html">
                                        <i className="ti-lock"></i> Lock Screen
                                    </a>
                                </li>
                                <li className="waves-effect waves-light">
                                    <a href="auth-normal-sign-in.html">
                                        <i className="ti-layout-sidebar-left"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
