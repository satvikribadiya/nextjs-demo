import { withSessionSsr } from '@/helper/session';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function login() {
    const router = useRouter()
    let defaultobject = { username: "", password: "" }
    const [first, setfirst] = useState({ ...defaultobject })
    const [qrcodeimg, setqrcodeimg] = useState("")
    const submitdata = async () => {
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        let twofa = localStorage.getItem("twofa")

        if (username == "") {
            toast.error("user not available in storage")
            return false
        }
        if (password == "") {
            toast.error("user not available in storage")
            return false
        }
        if (username == first.username) {
            if (first.password.length == 6) {
                const response = await fetch('/api/login', {
                    method: "POST",
                    body: JSON.stringify({ username: username, password: first.password, twofa: twofa })
                })
                let resp = await response.json()
                if (resp.status == true) {
                    router.push('/backadm/dashboard')
                } else {
                    toast.error(resp.oth, { autoClose: 1500 })
                }
            } else {
                toast.error("Otp must be 6 digit", { autoClose: 1500 })
            }
        } else {
            toast.error("User not found", { autoClose: 1500 })
        }
    }
    useEffect(() => {
        let qrcodeimg = localStorage.getItem("qrcode")
        setqrcodeimg(qrcodeimg)
    }, [])

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
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
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

                                        <div className="col-12 text-center">
                                            <div className='mb-2'>Scan this qrcode and Enter 2FA Code</div>
                                            <img src={`${qrcodeimg}`} width={50} height={50}/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="2fa" className="form-label">2FA</label>
                                            <input type="password" name="password" className="form-control" id="yourPassword" onChange={e => setfirst({ ...first, password: e.target.value })} required />
                                            <div className="invalid-feedback">Please enter your 2FA code!</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="button" onClick={() => submitdata()}>Login</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
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
