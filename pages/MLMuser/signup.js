import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { alphabet, email, password } from '../../helper/fns'

export default function signup() {
    const router = useRouter()
    let defaultobj = {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        referralCode : ""
    }
    const [onchange, setonchange] = useState({ ...defaultobj })
    const onchangedata = (e) => {
        setonchange({ ...onchange, [e.target.name]: e.target.value })
    }
    function randomString(length, chars) {
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    let referralCode = randomString(6, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

    const submitdata = async () => {
        if (onchange.firstName === "") {
            toast.error("Enter first name", { autoClose: 1500 })
            return false
        }
        if (onchange.firstName.length < 2) {
            toast.error("First name must be > 1 latters", { autoClose: 1500 })
            return false
        }
        if (!alphabet(onchange.firstName)) {
            toast.error("First must be without space letters", { autoClose: 1500 })
            return false
        }
        if (onchange.lastName === "") {
            toast.error("Enter first name", { autoClose: 1500 })
            return false
        }
        if (onchange.lastName < 3) {
            toast.error("Last name must be > 2 latters", { autoClose: 1500 })
            return false
        }
        if (!alphabet(onchange.lastName)) {
            toast.error("Last must be without space letters", { autoClose: 1500 })
            return false
        }
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
        if (onchange.referralCode !== "" && onchange.referralCode.length != 6) {
            toast.error("Invalid raferral code", { autoClose: 1500 })
            return false
        }
        else {
            let submitdata = {
                ...onchange,
                referrerperson: onchange.referralCode,
                referralCode: referralCode,
            }

            const response = await fetch(process.env.MLM_USER_API_BASEURL + 'usersignup', {
                method: "POST",
                body: JSON.stringify(submitdata)
            })
            let resp = await response.json()
            if (resp.status == true) {
                toast.success(resp.oth, { autoClose: 1500 })
                router.push(process.env.MLM_USER_BASEURL)
            } else {
                toast.error(resp.oth, { autoClose: 1500 })
            }
        }
    }
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4 mx-4">
                            <div className="card-body p-4">
                                <h1>Register</h1>
                                <p className="text-medium-emphasis">Create your account</p>
                                <div className="input-group mb-3"><span className="input-group-text">
                                    <i className='fa fa-user'></i>
                                </span>
                                    <input className="form-control" type="text" placeholder="First name" name='firstName' onChange={(e) => onchangedata(e)} />
                                </div>
                                <div className="input-group mb-3"><span className="input-group-text">
                                    <i className='fa fa-user'></i>
                                </span>
                                    <input className="form-control" type="text" placeholder="Last name" name='lastName' onChange={(e) => onchangedata(e)} />
                                </div>
                                <div className="input-group mb-3"><span className="input-group-text">
                                    <i className='fa fa-envelope'></i>
                                </span>
                                    <input className="form-control" type="text" placeholder="Email" name='email' onChange={(e) => onchangedata(e)} />
                                </div>
                                <div className="input-group mb-3"><span className="input-group-text">

                                    <i className='fa fa-lock'></i>
                                </span>
                                    <input className="form-control" type="password" placeholder="Password" name='password' onChange={(e) => onchangedata(e)} />
                                </div>
                                    <p className='mt-1'>1 Uppercase,1 Lowercase,1 Number,1 Special character,8-32 length</p>
                                <div className="input-group mb-4"><span className="input-group-text">
                                    <i className='fa fa-user'></i>
                                </span>
                                    <input className="form-control" type="text" placeholder="Referral code (optional)" name='referralCode' onChange={(e) => onchangedata(e)} />
                                </div>
                                <button className="btn btn-block btn-success" type="button" onClick={() => { submitdata() }}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
