import { withSessionSsrMLM } from '@/helper/session'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactPaginate from 'react-paginate';
import Flatpickr from "react-flatpickr";
import { toast } from 'react-toastify';
import { alphabet, alphabetwithspace, number, string } from '@/helper/fns';
import Image from 'next/image';
const moment = require('moment');

export default function managepackage() {
    const [show, setShow] = useState(false);
    const [page, setpage] = useState(1)
    const [pageCount, setpageCount] = useState(0)
    const [coindata, setcoindata] = useState([])
    const [status, setstatus] = useState(2)
    const [search, setsearch] = useState("")
    const handleClose = () => setShow(false);
    const date = moment(new Date()).subtract(1, 'month');
    const [dateRange, setDateRange] = useState([date['_d'], date['_i']])
    const [startDate, endDate] = dateRange
    var st = new Date(moment(startDate).format('MM/DD/YYYY')).getTime() / 1000;
    var ed = new Date(moment(moment(endDate).format('MM/DD/YYYY')).add(23, 'h').add(59, 'm').add(59, 's')).getTime() / 1000;

    const [userid, setuserid] = useState("")

    let defaultobj = {
        name: "",
        image: "",
        description: "",
        price: 0,
        status: '',
        theFiles: ''
    }
    const handlePageClick = (e) => {
        setpage(e.selected + 1)
    }
    const [onchange, setonchange] = useState({ ...defaultobj })
    const handleShow = () => { setShow(true), setonchange(defaultobj), setuserid("") };

    const onchangedata = (e) => {
        if (e.target.type === "file") {
            setonchange({ ...onchange, image: e.target.files[0]?.name, theFiles: e.target.files[0] })
        } else {
            setonchange({ ...onchange, [e.target.name]: e.target.value })
        }
    }

    const submitdata = async () => {
        if (onchange.name === "") {
            toast.error("Enter package name", { autoClose: 1500 })
            return false
        }
        if (onchange.name.length < 3) {
            toast.error("package name must be > 2 latters", { autoClose: 1500 })
            return false
        }
        if (!alphabetwithspace(onchange.name)) {
            toast.error("package name must be digits", { autoClose: 1500 })
            return false
        }
        if (onchange.image === "") {
            toast.error("Add package image", { autoClose: 1500 })
            return false
        }
        if (onchange.description === "") {
            toast.error("Enter package description", { autoClose: 1500 })
            return false
        }
        if (onchange.description.length < 3) {
            toast.error("Description must be > 2 latters", { autoClose: 1500 })
            return false
        }
        if (onchange.price == 0) {
            toast.error("Enter USD price", { autoClose: 1500 })
            return false
        }
        if (!number(onchange.price)) {
            toast.error("USD price must be number", { autoClose: 1500 })
            return false
        }
        if (onchange.status === "") {
            toast.error("Select package status", { autoClose: 1500 })
            return false
        }
         else {
            const formData = new FormData();
            formData.append('name', onchange.name);
            formData.append('description', onchange.description);
            formData.append('price', onchange.price);
            formData.append('image', onchange.image);
            formData.append('theFiles', onchange.theFiles);
            formData.append('status', onchange.status);
            formData.append('id', userid);

            const response = await fetch(process.env.MLM_API_BASEURL + 'package/addpackage', {
                method: "POST",
                headers: {
                    Accept: "Multipart/form-data",
                },
                body: formData
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
        const response = await fetch(process.env.MLM_API_BASEURL + 'package/getpackagedata', {
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

            setcoindata(resp.data.data)
            setpageCount(resp.data.totalpage)
        }

    }


    const editdata = async (id) => {
        handleShow()
        const response = await fetch(process.env.MLM_API_BASEURL + 'package/geteditdata', {
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

        const response = await fetch(process.env.MLM_API_BASEURL + 'package/statuschange', {
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
                              <h5>Manage Package</h5>
                          </div>
                          <div className='card-block'>
                              <div className='row justify-content-end'>
                                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                      <div className='row justify-content-between'>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4'>
                                              <Form.Select aria-label="Default select example " className='waves-effect waves-light btn-grd-primary mr-4 border-0 form-control' onChange={(e) => setstatus(e.target.value)}>
                                                  <option value={2}>All</option>
                                                  <option value={0}>Active Coin</option>
                                                  <option value={1}>Deactive Coin</option>
                                              </Form.Select>
                                          </div>

                                          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-12 userdate margintop">
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
                                              <div className="main-search morphsearch-search">
                                                  <div className="input-group mb-0">
                                                      <input type="text" className="form-control searchinput" placeholder='search' onChange={(e) => setsearch(e.target.value)} />

                                                  </div>
                                              </div>
                                          </div>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0'>
                                              <button className="btn waves-effect waves-light btn-grd-primary" onClick={() => getdata()}>Submit</button>
                                          </div>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0 ft-right'>
                                              <button className="btn waves-effect waves-light btn-grd-primary float-right" onClick={handleShow}>Add Package</button>
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
                                              <th>Name</th>
                                              <th>Image</th>
                                              <th>Description</th>
                                              <th>Price</th>
                                              <th>Status</th>
                                              <th>Created On</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>

                                          {coindata.length > 0 && coindata.map((post, da) => {
                                              return (
                                                  <tr key={da}>
                                                      <th>{((page - 1) * Number(process.env.PERPAGE_DATA)) + da + 1}</th>
                                                      <td>{post.name}</td>
                                                      <td><Image src={`/assets/MLMadmin/allimage/${post.image}`} height={50} width={50} alt="logo coin"></Image></td>
                                                      <td>{post.description}</td>
                                                      <td>{post.price}</td>
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
                                  <Modal.Title>{userid === "" ? "Add" : "Edit"} package</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Package Name</label>
                                      <div className="col-sm-12">
                                          <input type="text" className="form-control" placeholder="Enter package name" name='name' value={onchange.name} onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/ig, '').replace(/(\..*)\./g, "$1")} onChange={(e) => onchangedata(e)} />
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Package Image</label>
                                      <div className="col-sm-12">
                                          <input type="file" className="form-control" placeholder="Package Image" onChange={(e) => onchangedata(e)} />
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Package Description</label>
                                      <div className="col-sm-12">
                                          <textarea type="text" className="form-control" placeholder="Enter package description" name='description' value={onchange.description}  onChange={(e) => onchangedata(e)} />
                                      </div>
                                  </div>
                                  <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">USD Price&nbsp;($)</label>
                                      <div className="col-sm-12">
                                          <input type="text" className="form-control" placeholder="USD Price" name='price' value={onchange.price} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9 ]/ig, '').replace(/(\..*)\./g, "$1")} onChange={(e) => onchangedata(e)} />
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
                                                  value='0'
                                                  name="status"
                                                  id="formHorizontalRadios1"
                                                  onChange={(e) => onchangedata(e)}
                                                  checked={onchange.status == '0'}
                                              />
                                              <Form.Check
                                                  type="radio"
                                                  label="Deactive"
                                                  value='1'
                                                  name="status"
                                                  id="formHorizontalRadios2"
                                                  onChange={(e) => onchangedata(e)}
                                                  checked={onchange.status == '1'}
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