import { withSessionSsrMLM } from '@/helper/session'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Flatpickr from "react-flatpickr";
import ReactPaginate from 'react-paginate';
import { alphabet, email, password } from '@/helper/fns';
import { toast } from 'react-toastify';

const moment = require('moment');

export default function manageuser() {
    const [show, setShow] = useState(false);
    const [pageCount, setpageCount] = useState(0)
    const [page, setpage] = useState(1)
    const [userdata, setuserdata] = useState([])
    const [user, setuser] = useState([])
    const [userid, setuserid] = useState("")
    const [status, setstatus] = useState(2)
    const [search, setsearch] = useState("")
    const handlePageClick = (e) => {
        setpage(e.selected + 1)
    }
    let defaultobj = {
        firstname: "",
        lastname: "",
        email: '',
        status: 0
    }
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true), setonchange(defaultobj), setuserid(""), getalluserforsponser() };
    const [sponserId, setsponserId] = useState('')
    const [passeye, setPassEye] = useState(false)
    const date = moment(new Date()).subtract(1, 'month');
    const [dateRange, setDateRange] = useState([date['_d'], date['_i']])
    const [startDate, endDate] = dateRange
    var st = new Date(moment(startDate).format('MM/DD/YYYY')).getTime() / 1000;
    var ed = new Date(moment(moment(endDate).format('MM/DD/YYYY')).add(23, 'h').add(59, 'm').add(59, 's')).getTime() / 1000;

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
        if (onchange.firstname === "") {
            toast.error("Enter first name", { autoClose: 1500 })
            return false
        }
        if (onchange.firstname.length < 2) {
            toast.error("First name must be > 1 latters", { autoClose: 1500 })
            return false
        }
        if (!alphabet(onchange.firstname)) {
            toast.error("First must be without space letters", { autoClose: 1500 })
            return false
        }
        if (onchange.lastname === "") {
            toast.error("Enter first name", { autoClose: 1500 })
            return false
        }
        if (onchange.lastname < 3) {
            toast.error("Last name must be > 2 latters", { autoClose: 1500 })
            return false
        }
        if (!alphabet(onchange.lastname)) {
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
        if (onchange.status === "") {
            toast.error("Select user status", { autoClose: 1500 })
            return false
        }
        else {
            let submitdata = {
                ...onchange,
                id: userid,
                referralCode: referralCode,
                sponserId: sponserId
            }

            const response = await fetch(process.env.MLM_API_BASEURL + 'user/adduser', {
                method: "POST",
                headers: {
                    Accept: "Multipart/form-data",
                },
                body: JSON.stringify(submitdata)
            })
            let resp = await response.json()
            if (resp.status == true) {
                toast.success(resp.oth, { autoClose: 1500 })
                setonchange(defaultobj)
                getdata()
                handleClose()
            } else {
                toast.error(resp.oth, { autoClose: 1500 })
            }
        }
    }
    const getdata = async () => {
        const response = await fetch(process.env.MLM_API_BASEURL + 'user/getuserdata', {
            method: "POST",
            body: JSON.stringify({
                startdate: st,
                enddate: ed,
                search: search,
                status: status,
                page: page
            })
        })
        let resp = await response.json();
        if (resp.status == true) {

            setuserdata(resp.data.data)
            setpageCount(resp.data.totalpage)
        }

    }
    const editdata = async (id) => {
        handleShow()
        const response = await fetch(process.env.MLM_API_BASEURL + 'user/geteditdata', {
            method: "POST",
            body: JSON.stringify({ id: id })
        })
        let resp = await response.json();
        if (resp.status == true) {
            setonchange(resp.data)
            setuserid(resp.data._id)
        }
    }
    const switchstatuschange = async (id, status) => {

        const response = await fetch(process.env.MLM_API_BASEURL + 'user/statuschange', {
            method: "POST",
            body: JSON.stringify({ id: id, status: status })
        })
        let resp = await response.json();
        if (resp.status == true) {
            toast.success(resp.oth, { autoClose: 1500 })
            getdata()
        } else {
            toast.error(resp.oth, { autoClose: 1500 })
        }
    }
    const getalluserforsponser = async (id, status) => {

        const response = await fetch(process.env.MLM_API_BASEURL + 'user/alluser', {
            method: "POST",
            body: JSON.stringify({ id: 0 })
        })
        let resp = await response.json();
        if (resp.status == true) {
            setuser(resp.data)
        } else {
            toast.error(resp.oth, { autoClose: 1500 })
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className="pcoded-inner-content">
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-body">
                        <div className="card">
                            <div className="card-header">
                                <h5>Manage User</h5>
                            </div>
                            <div className='card-block'>
                                <div className='row justify-content-end'>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                        <div className='row justify-content-between'>
                                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4'>
                                                <Form.Select aria-label="Default select example " className='waves-effect waves-light btn-grd-primary mr-4 border-0 form-control' onChange={(e) => setstatus(e.target.value)}>
                                                    <option value={2}>All</option>
                                                    <option value={0}>Active User</option>
                                                    <option value={1}>Deactive User</option>
                                                </Form.Select>
                                            </div>

                                            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-12 userdate margintop">
                                                <Flatpickr
                                                    className='form-control flatpickerpadding'
                                                    options={{
                                                        defaultDate: [startDate, endDate],
                                                        altInput: true,
                                                        altFormat: "j, M Y",
                                                        dateFormat: "Y-m-d",
                                                        showMonths: 1,
                                                        mode: "range"
                                                    }
                                                    }
                                                    onChange={(update) => {
                                                        if (update.length > 1) {
                                                            setDateRange(update);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop'>
                                                <div class="main-search morphsearch-search">
                                                    <div class="input-group mb-0">
                                                        <input type="text" class="form-control searchinput" placeholder='search' onChange={(e) => setsearch(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0'>
                                                <button class="btn waves-effect waves-light btn-grd-primary" onClick={() => getdata()}>Submit</button>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0 ft-right'>
                                                <button class="btn waves-effect waves-light btn-grd-primary float-right" onClick={handleShow}>Add User</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-block table-border-style">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>email</th>
                                                <th>Referral Code</th>
                                                <th>Status</th>
                                                <th>Created On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userdata.length > 0 && userdata.map((post, da) => {
                                                return (
                                                    <tr key={da}>
                                                        <th>{((page - 1) * Number(process.env.PERPAGE_DATA)) + da + 1}</th>
                                                        <td>{post.firstName}</td>
                                                        <td>{post.lastName}</td>
                                                        <td>{post.email}</td>
                                                        <td>{post.referralCode}</td>
                                                        <td>
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked={post.status == 0 ? true : false} value={post.status == 0 ? 1 : 0} onClick={e => switchstatuschange(post._id, e.target.value)} />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td>{moment(post.createdOn * 1000).format('DD/MM/YYYY')}</td>
                                                        <td className='icon-list-demo editicon'><i className="ti-pencil" onClick={(e) => { editdata(post._id) }}></i></td>
                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null}
                                    className="react-paginate"
                                />
                            </div>
                            <Modal show={show} onHide={handleClose}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>{userid === "" ? "Add" : "Edit"} User</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">User first name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" placeholder="User first name" name='firstname' value={onchange.firstname} onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/ig, '').replace(/(\..*)\./g, "$1")} onChange={(e) => onchangedata(e)} />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">User last name</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" placeholder="User last name" name='lastname' value={onchange.lastname} onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/ig, '').replace(/(\..*)\./g, "$1")} onChange={(e) => onchangedata(e)} />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">Email</label>
                                        <div class="col-sm-12">
                                            <input type="email" class="form-control" placeholder="Email" name='email' value={onchange.email} onChange={(e) => onchangedata(e)} />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-12">
                                            <label className='mb-1'>Password</label>
                                            <input type={!passeye ? 'password' : 'text'} className='form-control password' placeholder='Password' name='password' onChange={(e) => onchangedata(e)} value={onchange.password} />
                                            <i className={!passeye ? "fa fa-eye-slash globleicon" : "fa fa-eye globleicon"} onClick={() => setPassEye(!passeye)}></i>
                                            <p className='mt-1'>1 Uppercase,1 Lowercase,1 Number,1 Special character,8-32 length</p>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">Sponser (optional)</label>
                                        <div class="col-sm-12">
                                            <Form.Select aria-label="Default select example " className='waves-effect waves-light sponser mr-4 border-0 form-control' onChange={(e) => setsponserId(e.target.value)}>
                                                <option value='none'>None</option>
                                                {user.length > 0 && user.map((x, y) => {
                                                    return (<option value={x._id} key={y}>{x.firstName}</option>)
                                                })}
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <fieldset>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label as="legend" column sm={2}>
                                                Status
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Active"
                                                    value={0}
                                                    name="status"
                                                    id="formHorizontalRadios1"
                                                    onChange={(e) => onchangedata(e)}
                                                    checked={onchange.status == 0}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Deactive"
                                                    value={1}
                                                    name="status"
                                                    id="formHorizontalRadios2"
                                                    onChange={(e) => onchangedata(e)}
                                                    checked={onchange.status == 1}
                                                />

                                            </Col>
                                        </Form.Group>
                                    </fieldset>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="btn waves-effect waves-light btn-grd-secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="btn waves-effect waves-light btn-grd-primary" onClick={() => { handleClose, submitdata() }}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = withSessionSsrMLM(async function getServerSideProps({ req }) {
    if (req.session.loginSession == undefined || req.session.loginSession == '') {
        return {
            props: { title: "Login" },
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