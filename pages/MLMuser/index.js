import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { email, password } from '@/helper/fns'
import { toast } from 'react-toastify'
import { withSessionSsrMLMuser } from '@/helper/session'

export default function index() {
    const router = useRouter()
    const sidgnupclick = ()=>{
        router.push(process.env.MLM_USER_BASEURL + 'signup')
    }
    let defaultobj = {
        email: "",
        password: ""
    }
    const [onchange, setonchange] = useState({ ...defaultobj })
    const onchangedata = (e) => {
        setonchange({ ...onchange, [e.target.name]: e.target.value })
    }
   
    const submitdata = async () => {
        if (onchange.email === "") {
            toast.error("Enter email", { autoClose: 1500 })
            return false
        }
        if (!email(onchange.email)) {
            toast.error("Invalid email", { autoClose: 1500 })
            return false
        }
        if (onchange.password === "") {
            toast.error("Enter password", { autoClose: 1500 })
            return false
        }
        if (!password(onchange.password)) {
            toast.error("Password mustbe 1 Uppercase,1 Lowercase,1 Number,1 Special character,8-32 length", { autoClose: 1500 })
            return false
        }
        else {
            const response = await fetch(process.env.MLM_USER_API_BASEURL + 'userlogin', {
                method: "POST",
                body: JSON.stringify(onchange)
            })
            let resp = await response.json()
            
            if (resp.status == true) {
                toast.success(resp.oth, { autoClose: 1500 })
                router.push(process.env.MLM_USER_BASEURL + 'packagelist')
            } else {
                toast.error(resp.oth, { autoClose: 1500 })
            }
        }
    }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className="card-group d-block d-md-flex row">
                          <div className="card col-md-7 p-4 mb-0">
                              <div className="card-body">
                                  <h1>Login</h1>
                                  <p className="text-medium-emphasis">Sign In to your account</p>
                                  <div className="input-group mb-3"><span className="input-group-text">
                                      <i className='fa fa-envelope'></i></span>
                                      <input className="form-control" type="text" placeholder="Email" name='email' onChange={(e) => onchangedata(e)}/>
                                  </div>
                                  <div className="input-group mb-4"><span className="input-group-text">
                                      <i className='fa fa-lock'></i></span>
                                      <input className="form-control" type="password" placeholder="Password" name='password' onChange={(e) => onchangedata(e)} />
                                  </div>
                                  <div className="row">
                                      <div className="col-6">
                                          <button className="btn btn-primary px-4" type="button" onClick={() => submitdata()}>Login</button>
                                      </div>
                                      <div className="col-6 text-end">
                                          <button className="btn btn-link px-0" type="button">Forgot password?</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card col-md-5 text-white bg-primary py-5">
                              <div className="card-body text-center">
                                  <div>
                                      <h2>Sign up</h2>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                      <button className="btn btn-lg btn-outline-light mt-3" type="button" onClick={()=> sidgnupclick()}>Register Now!</button>
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

export const getServerSideProps = withSessionSsrMLMuser(async function getServerSideProps({ req }) {
    if (req.session.usersession != '' && req.session.usersession != undefined && req.session.usersession != 'undefined') {
        return {
            props: { title: "Package" },
            redirect: {
                destination: '/MLMuser/packagelist',
                permanent: false,
            },
        }
    } else {
        return {
            props: { title: "Package" }
        }
    }
})
