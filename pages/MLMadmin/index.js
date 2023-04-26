import { email, number } from '@/helper/fns';
import { withSessionSsrMLM } from '@/helper/session';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function index() {
    const router = useRouter()
    let defaultobj = {email:"", password:""}
    const [user, setuser] = useState({ ...defaultobj })
    const submitdata = async () =>{
        if (user.email === "") {
            toast.error("Enter email", { autoClose: 1500 })
            return false
        }
        if (!email(user.email)) {
            toast.error("Enter valid email", { autoClose: 1500 })
            return false
        }
        if (user.password === "") {
            toast.error("Enter 2FA OTP", { autoClose: 1500 })
            return false
        }
        if (user.password.length < 6) {
            toast.error("2FA OTP must be 6 digits", { autoClose: 1500 })
            return false
        }
        if (!number(user.password)) {
            toast.error("OTP must be number", { autoClose: 1500 })
            return false
        }
        else {

            const response = await fetch(process.env.API_BASE_UPL + '/MLMadmin/adminlogin', {
                method: "POST",
                body: JSON.stringify({ email: user.email, password: user.password })
            });
            let resp = await response.json();

            if (resp.status == true) {
                toast.success(resp.oth, { autoClose: 1500 })
                router.reload(process.env.MLM_BASEURL + 'dashboard')
                setuser(defaultobj)
            } else {
                toast.error(resp.oth, { autoClose: 1500 })
            }
        }
    }   

  return (
       <section className="login-block">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">

                      <form className="md-float-material form-material">
                          <div className="text-center">
                              <img src="/assets/MLMadmin/images/logo.png" alt="logo.png"/>
                          </div>
                          <div className="auth-box card">
                              <div className="card-block">
                                  <div className="row m-b-20">
                                      <div className="col-md-12">
                                          <h3 className="text-center">Sign In</h3>
                                      </div>
                                  </div>
                                  <div className="form-group form-primary">
                                      <input type="email" name="email" className="form-control" required onChange={e => setuser({ ...user, email : e.target.value})}/>
                                          <span className="form-bar"></span>
                                          <label className="float-label">Your Email Address</label>
                                  </div>
                                  <div className="form-group form-primary">
                                      <input type="password" name="password" className="form-control" required onChange={e => setuser({ ...user, password: e.target.value })} />
                                          <span className="form-bar"></span>
                                          <label className="float-label">Password</label>
                                  </div>
                                  <div className="row m-t-25 text-left">
                                      <div className="col-12">
                                          <div className="checkbox-fade fade-in-primary d-">
                                              <label>
                                                  <input type="checkbox" value=""/>
                                                      <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                      <span className="text-inverse">Remember me</span>
                                              </label>
                                          </div>
                                          <div className="forgot-phone text-right f-right">
                                              <a href="#" className="text-right f-w-600"> Forgot Password?</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row m-t-30">
                                      <div className="col-md-12">
                                          <button type="button" className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20" onClick={() => submitdata()}>Sign in</button>
                                      </div>
                                  </div>
                                  <hr />
                                  
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}
export const getServerSideProps = withSessionSsrMLM(async function getServerSideProps({ req }) {
    if (req.session.loginSession != '' && req.session.loginSession != undefined && req.session.loginSession != 'undefined') {
        return {
            redirect: {
                destination: '/MLMadmin/dashboard',
                permanent: false,
            },
            props: { title: "Login" }
        }
    } else {
        return { props: { title: "Login" } };

    }
})