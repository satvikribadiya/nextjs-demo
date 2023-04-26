import { withSessionSsr } from '@/helper/session';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function index() {
    const router = useRouter()
    let defaultobject = { username: "", password: "", confirmpass: "" }
    const [first, setfirst] = useState({ ...defaultobject })

    const submitdata = async () => {
        if (first.username === "") {
            toast.error("Enter username", { autoClose: 1500 })
            return false
        }
        if (first.password === "") {
            toast.error("Enter password", { autoClose: 1500 })
            return false
        }
        if (first.username.length < 3) {
            toast.error("Enter valid username", { autoClose: 1500 })
            return false
        }
        if (first.password.length < 3) {
            toast.error("Enter valid password", { autoClose: 1500 })
            return false
        }
        if (first.password != first.confirmpass) {
            toast.error("Password not match", { autoClose: 1500 })
            return false
        }
        else {
            const response = await fetch('/api/signup', {
                method: "POST",
                body: JSON.stringify({ username: first.username, password: first.password })
            })
            let resp = await response.json()
            if (resp.status == true) {

                localStorage.setItem("username", first.username)
                localStorage.setItem("password", first.password)
                localStorage.setItem("twofa", resp.data.secret)
                localStorage.setItem("qrcode", resp.data.qr)
                setfirst(defaultobject)
                router.push('/backadm/login')

            } else {
                toast.error(resp.oth)
            }
        }

    }
    return (
        <div className="container">

            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div className="d-flex justify-content-center py-4">
                                <a href="index.html" className="logo d-flex align-items-center w-auto">
                                    <img src="/assets/admin/img/logo.png" alt="" />
                                    <span className="d-none d-lg-block">NiceAdmin</span>
                                </a>
                            </div>

                            <div className="card mb-3">

                                <div className="card-body">

                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Register to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form className="row g-3 needs-validation" noValidate>

                                        <div className="col-12">
                                            <label htmlFor="yourUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="username" className="form-control" id="yourUsername" onChange={e => setfirst({ ...first, username: e.target.value })} value={first.username} required />
                                                <div className="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                            <input type="password" name="password" className="form-control" id="yourPassword" onChange={e => setfirst({ ...first, password: e.target.value })} value={first.password} required />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Confirm Password</label>
                                            <input type="password" name="password" className="form-control" id="yourcPassword" onChange={e => setfirst({ ...first, confirmpass: e.target.value })} value={first.confirmpass} required />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="button" onClick={() => submitdata()}>Register</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">Don't have account? <Link href="/backadm/login">Create an account</Link></p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
    if (req.session.loginSession != '' && req.session.loginSession != undefined && req.session.loginSession != 'undefined') {
        return {
            redirect: {
                destination: '/backadm/dashboard',
                permanent: false,
            },
            props: { title: "Login" }
        }
    } else {
        return { props: { title: "Login" } };

    }
})
