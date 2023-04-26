import { withSessionSsrMLM } from '@/helper/session'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Flatpickr from "react-flatpickr";
const moment = require('moment');

export default function packagehistory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const date = moment(new Date()).subtract(1, 'month');
    const [dateRange, setDateRange] = useState([date['_d'], date['_i']])
    const [startDate, endDate] = dateRange
    var st = new Date(moment(startDate).format('MM/DD/YYYY')).getTime() / 1000;
    var ed = new Date(moment(moment(endDate).format('MM/DD/YYYY')).add(23, 'h').add(59, 'm').add(59, 's')).getTime() / 1000;
    const [start, setStart] = useState(st);
    const [end, setEnd] = useState(ed);
  return (
      <div className="pcoded-inner-content">
          <div className="main-body">
              <div className="page-wrapper">
                  <div className="page-body">
                      <div className="card">
                          <div className="card-header">
                              <h5>Package History</h5>
                          </div>
                          
                          <div className='card-block'>
                              <div className='row justify-content-end'>
                                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                                      <div className='row justify-content-between'>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4'>
                                              <Form.Select aria-label="Default select example " className='waves-effect waves-light btn-grd-primary mr-4 border-0 form-control'>
                                                  <option>Selection Status</option>
                                                  <option value="1">Active</option>
                                                  <option value="2">Deactive</option>
                                              </Form.Select>
                                          </div>

                                          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-12 userdate margintop">
                                              <Flatpickr
                                                  className='form-control flatpickerpadding'
                                                  options={{
                                                      minDate: { startDate },
                                                      maxDate: { endDate },
                                                      defaultDate: [startDate, endDate],
                                                      altInput: true,
                                                      altFormat: "j, M Y",
                                                      dateFormat: "Y-m-d",
                                                      showMonths: 1,
                                                      mode: "range"
                                                  }
                                                  }
                                                  onChange={(update) => {
                                                      setDateRange(update);
                                                  }}
                                              />
                                          </div>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop'>
                                              <div class="main-search morphsearch-search">
                                                  <div class="input-group mb-0">
                                                      <input type="text" class="form-control searchinput" placeholder='search' />
                                                      <span class="input-group-addon search-btn"><i class="ti-search"></i></span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0'>
                                              <button class="btn waves-effect waves-light btn-grd-primary">Submit</button>
                                          </div>
                                          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-4 margintop mt-sm-3 mt-md-0 ft-right'>
                                              <button class="btn waves-effect waves-light btn-grd-primary float-right" onClick={handleShow}>Add Coin</button>
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
                                              <th>User Name</th>
                                              <th>Package Name</th>
                                              <th>Coin</th>
                                              <th>Price</th>
                                              <th>Created On</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <th scope="row">1</th>
                                              <td>Mark</td>
                                              <td>Otto</td>
                                              <td>@mdo</td>
                                              <td>
                                                  <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                  </label>
                                              </td>
                                              <td>@mdo</td>
                                              <td className='icon-list-demo editicon'><i class="ti-pencil"></i></td>
                                          </tr>
                                          <tr>
                                              <th scope="row">2</th>
                                              <td>Jacob</td>
                                              <td>Thornton</td>
                                              <td>Thornton</td>
                                              <td>Thornton</td>
                                              <td>@fat</td>
                                              <td className='icon-list-demo editicon'><i class="ti-pencil"></i></td>
                                          </tr>
                                          <tr>
                                              <th scope="row">3</th>
                                              <td>Larry</td>
                                              <td>the Bird</td>
                                              <td>@twitter</td>
                                              <td>@twitter</td>
                                              <td>@twitter</td>
                                              <td className='icon-list-demo editicon'><i class="ti-pencil"></i></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <Modal show={show} onHide={handleClose}
                              size="md"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered>
                              <Modal.Header closeButton>
                                  <Modal.Title>Add Coin</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  <div class="form-group row">
                                      <label class="col-sm-12 col-form-label">Coin Name</label>
                                      <div class="col-sm-12">
                                          <input type="text" class="form-control" placeholder="Enter coin name" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-sm-12 col-form-label">Ticker Name</label>
                                      <div class="col-sm-12">
                                          <input type="text" class="form-control" placeholder="Enter coin name" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-sm-12 col-form-label">Logo</label>
                                      <div class="col-sm-12">
                                          <input type="file" class="form-control" placeholder="Logo" />
                                      </div>
                                  </div>
                                  <div class="form-group row">
                                      <label class="col-sm-12 col-form-label">USD Price</label>
                                      <div class="col-sm-12">
                                          <input type="text" class="form-control" placeholder="USD Price" />
                                      </div>
                                  </div>
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button variant="btn waves-effect waves-light btn-grd-secondary" onClick={handleClose}>
                                      Close
                                  </Button>
                                  <Button variant="btn waves-effect waves-light btn-grd-primary" onClick={handleClose}>
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