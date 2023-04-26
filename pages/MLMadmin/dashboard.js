import { withSessionSsrMLM } from '@/helper/session'
import React from 'react'

export default function dashboard() {
  return (
      <div className="">
          <div className="page-header">
              <div className="page-block">
                  <div className="row align-items-center">
                      <div className="col-md-8">
                          <div className="page-header-title">
                              <h5 className="m-b-10">Dashboard</h5>
                              <p className="m-b-0">Welcome to Mega Able</p>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <ul className="breadcrumb-title">
                              <li className="breadcrumb-item">
                                  <a href="index.html"> <i className="fa fa-home"></i> </a>
                              </li>
                              <li className="breadcrumb-item"><a href="#!">Dashboard</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="pcoded-inner-content">
              <div className="main-body">
                  <div className="page-wrapper">
                      <div className="page-body">
                          <div className="row">
                              <div className="col-xl-3 col-md-6">
                                  <div className="card">
                                      <div className="card-block">
                                          <div className="row align-items-center">
                                              <div className="col-8">
                                                  <h4 className="text-c-purple">$30200</h4>
                                                  <h6 className="text-muted m-b-0">All Earnings</h6>
                                              </div>
                                              <div className="col-4 text-right">
                                                  <i className="fa fa-bar-chart f-28"></i>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-footer bg-c-purple">
                                          <div className="row align-items-center">
                                              <div className="col-9">
                                                  <p className="text-white m-b-0">% change</p>
                                              </div>
                                              <div className="col-3 text-right">
                                                  <i className="fa fa-line-chart text-white f-16"></i>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                  <div className="card">
                                      <div className="card-block">
                                          <div className="row align-items-center">
                                              <div className="col-8">
                                                  <h4 className="text-c-green">290+</h4>
                                                  <h6 className="text-muted m-b-0">Page Views</h6>
                                              </div>
                                              <div className="col-4 text-right">
                                                  <i className="fa fa-file-text-o f-28"></i>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-footer bg-c-green">
                                          <div className="row align-items-center">
                                              <div className="col-9">
                                                  <p className="text-white m-b-0">% change</p>
                                              </div>
                                              <div className="col-3 text-right">
                                                  <i className="fa fa-line-chart text-white f-16"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                  <div className="card">
                                      <div className="card-block">
                                          <div className="row align-items-center">
                                              <div className="col-8">
                                                  <h4 className="text-c-red">145</h4>
                                                  <h6 className="text-muted m-b-0">Task Completed</h6>
                                              </div>
                                              <div className="col-4 text-right">
                                                  <i className="fa fa-calendar-check-o f-28"></i>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-footer bg-c-red">
                                          <div className="row align-items-center">
                                              <div className="col-9">
                                                  <p className="text-white m-b-0">% change</p>
                                              </div>
                                              <div className="col-3 text-right">
                                                  <i className="fa fa-line-chart text-white f-16"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                  <div className="card">
                                      <div className="card-block">
                                          <div className="row align-items-center">
                                              <div className="col-8">
                                                  <h4 className="text-c-blue">500</h4>
                                                  <h6 className="text-muted m-b-0">Downloads</h6>
                                              </div>
                                              <div className="col-4 text-right">
                                                  <i className="fa fa-hand-o-down f-28"></i>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-footer bg-c-blue">
                                          <div className="row align-items-center">
                                              <div className="col-9">
                                                  <p className="text-white m-b-0">% change</p>
                                              </div>
                                              <div className="col-3 text-right">
                                                  <i className="fa fa-line-chart text-white f-16"></i>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-xl-8 col-md-12">
                                  <div className="card table-card">
                                      <div className="card-header">
                                          <h5>Projects</h5>
                                          <div className="card-header-right">
                                              <ul className="list-unstyled card-option">
                                                  <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                  <li><i className="fa fa-window-maximize full-card"></i></li>
                                                  <li><i className="fa fa-minus minimize-card"></i></li>
                                                  <li><i className="fa fa-refresh reload-card"></i></li>
                                                  <li><i className="fa fa-trash close-card"></i></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="card-block">
                                          <div className="table-responsive">
                                              <table className="table table-hover">
                                                  <thead>
                                                      <tr>
                                                          <th>
                                                              <div className="chk-option">
                                                                  <div className="checkbox-fade fade-in-primary">
                                                                      <label className="check-task">
                                                                          <input type="checkbox" value=""/>
                                                                              <span className="cr">
                                                                                  <i className="cr-icon fa fa-check txt-default"></i>
                                                                              </span>
                                                                      </label>
                                                                  </div>
                                                              </div>
                                                              Assigned</th>
                                                          <th>Name</th>
                                                          <th>Due Date</th>
                                                          <th className="text-right">Priority</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>
                                                              <div className="chk-option">
                                                                  <div className="checkbox-fade fade-in-primary">
                                                                      <label className="check-task">
                                                                          <input type="checkbox" value=""/>
                                                                              <span className="cr">
                                                                                  <i className="cr-icon fa fa-check txt-default"></i>
                                                                              </span>
                                                                      </label>
                                                                  </div>
                                                              </div>
                                                              <div className="d-inline-block align-middle">
                                                                  <img src="/assets/MLMadmin/images/avatar-4.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                                      <div className="d-inline-block">
                                                                          <h6>John Deo</h6>
                                                                          <p className="text-muted m-b-0">Graphics Designer</p>
                                                                      </div>
                                                              </div>
                                                          </td>
                                                          <td>Able Pro</td>
                                                          <td>Jun, 26</td>
                                                          <td className="text-right"><label className="label label-danger">Low</label></td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div className="chk-option">
                                                                  <div className="checkbox-fade fade-in-primary">
                                                                      <label className="check-task">
                                                                          <input type="checkbox" value=""/>
                                                                              <span className="cr">
                                                                                  <i className="cr-icon fa fa-check txt-default"></i>
                                                                              </span>
                                                                      </label>
                                                                  </div>
                                                              </div>
                                                              <div className="d-inline-block align-middle">
                                                                  <img src="/assets/MLMadmin/images/avatar-5.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                                      <div className="d-inline-block">
                                                                          <h6>Jenifer Vintage</h6>
                                                                          <p className="text-muted m-b-0">Web Designer</p>
                                                                      </div>
                                                              </div>
                                                          </td>
                                                          <td>Mashable</td>
                                                          <td>March, 31</td>
                                                          <td className="text-right"><label className="label label-primary">high</label></td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div className="chk-option">
                                                                  <div className="checkbox-fade fade-in-primary">
                                                                      <label className="check-task">
                                                                          <input type="checkbox" value=""/>
                                                                              <span className="cr">
                                                                                  <i className="cr-icon fa fa-check txt-default"></i>
                                                                              </span>
                                                                      </label>
                                                                  </div>
                                                              </div>
                                                              <div className="d-inline-block align-middle">
                                                                  <img src="/assets/MLMadmin/images/avatar-3.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                                      <div className="d-inline-block">
                                                                          <h6>William Jem</h6>
                                                                          <p className="text-muted m-b-0">Developer</p>
                                                                      </div>
                                                              </div>
                                                          </td>
                                                          <td>Flatable</td>
                                                          <td>Aug, 02</td>
                                                          <td className="text-right"><label className="label label-success">medium</label></td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <div className="chk-option">
                                                                  <div className="checkbox-fade fade-in-primary">
                                                                      <label className="check-task">
                                                                          <input type="checkbox" value=""/>
                                                                              <span className="cr">
                                                                                  <i className="cr-icon fa fa-check txt-default"></i>
                                                                              </span>
                                                                      </label>
                                                                  </div>
                                                              </div>
                                                              <div className="d-inline-block align-middle">
                                                                  <img src="/assets/MLMadmin/images/avatar-2.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                                      <div className="d-inline-block">
                                                                          <h6>David Jones</h6>
                                                                          <p className="text-muted m-b-0">Developer</p>
                                                                      </div>
                                                              </div>
                                                          </td>
                                                          <td>Guruable</td>
                                                          <td>Sep, 22</td>
                                                          <td className="text-right"><label className="label label-primary">high</label></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <div className="text-right m-r-20">
                                                  <a href="#!" className=" b-b-primary text-primary">View all Projects</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-md-12">
                                  <div className="card ">
                                      <div className="card-header">
                                          <h5>Team Members</h5>
                                          <div className="card-header-right">
                                              <ul className="list-unstyled card-option">
                                                  <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                  <li><i className="fa fa-window-maximize full-card"></i></li>
                                                  <li><i className="fa fa-minus minimize-card"></i></li>
                                                  <li><i className="fa fa-refresh reload-card"></i></li>
                                                  <li><i className="fa fa-trash close-card"></i></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="card-block">
                                          <div className="align-middle m-b-30">
                                              <img src="/assets/MLMadmin/images/avatar-2.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                  <div className="d-inline-block">
                                                      <h6>David Jones</h6>
                                                      <p className="text-muted m-b-0">Developer</p>
                                                  </div>
                                          </div>
                                          <div className="align-middle m-b-30">
                                              <img src="/assets/MLMadmin/images/avatar-1.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                  <div className="d-inline-block">
                                                      <h6>David Jones</h6>
                                                      <p className="text-muted m-b-0">Developer</p>
                                                  </div>
                                          </div>
                                          <div className="align-middle m-b-30">
                                              <img src="/assets/MLMadmin/images/avatar-3.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                  <div className="d-inline-block">
                                                      <h6>David Jones</h6>
                                                      <p className="text-muted m-b-0">Developer</p>
                                                  </div>
                                          </div>
                                          <div className="align-middle m-b-30">
                                              <img src="/assets/MLMadmin/images/avatar-4.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                  <div className="d-inline-block">
                                                      <h6>David Jones</h6>
                                                      <p className="text-muted m-b-0">Developer</p>
                                                  </div>
                                          </div>
                                          <div className="align-middle m-b-10">
                                              <img src="/assets/MLMadmin/images/avatar-5.jpg" alt="user image" className="img-radius img-40 align-top m-r-15"/>
                                                  <div className="d-inline-block">
                                                      <h6>David Jones</h6>
                                                      <p className="text-muted m-b-0">Developer</p>
                                                  </div>
                                          </div>
                                          <div className="text-center">
                                              <a href="#!" className="b-b-primary text-primary">View all Projects</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="styleSelector"> </div>
              </div>
          </div>
      </div>
  )
}
export const getServerSideProps = withSessionSsrMLM(async function getServerSideProps({ req }) {

    if (req.session.loginSession == undefined || req.session.loginSession == '') {
        return {
            props: { title: "Sign Up" },
            redirect: {
                destination: '/MLMadmin',
                permanent: false,
            },
        }
    } else {
        return {
            props: { title: "Manage Coin" }
        }
    }
})