import { alphabet, email, password } from '@/helper/fns'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { toast } from 'react-toastify'

export default function crude() {
  let defaultobject = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    maritalStatus: "",
    hobby: []
  }
  const [change, setchange] = useState({ ...defaultobject })
  const [user, setuser] = useState([])
  const [page, setpage] = useState(1)
  const [pageCount, setpageCount] = useState(0)
  const [userid, setuserid] = useState("")
  const [passeye, setPassEye] = useState(false)
  
  const changedata = (e) => {
    if (e.target.type == "checkbox") {
      if (e.target.checked) {
        setchange({ ...change, hobby: [...change.hobby, e.target.value] })
      } else {
        setchange({ ...change, hobby: change.hobby.filter(x => x !== e.target.value) })
      }
    } else {
      setchange({ ...change, [e.target.name]: e.target.value })
    }
  }
  const submitdata = async () => {
    if (change.firstName === "") {
      toast.error("Enter first name", { autoClose: 1500 })
      return false
    }
    if (change.firstName.length <= 2) {
      toast.error("Enter valid first name", { autoClose: 1500 })
      return false
    }
    if (!alphabet(change.firstName)) {
      toast.error("First name must be latters", { autoClose: 1500 })
      return false
    }
    if (change.lastName === "") {
      toast.error("Enter last name", { autoClose: 1500 })
      return false
    }
    if (change.lastName.length <= 2) {
      toast.error("Enter valid last name", { autoClose: 1500 })
      return false
    }
    if (!alphabet(change.lastName)) {
      toast.error("Last name must be latters", { autoClose: 1500 })
      return false
    }
    if (change.email === "") {
      toast.error("Enter email", { autoClose: 1500 })
      return false
    }
    if (!email(change.email)) {
      toast.error("Enter valid email", { autoClose: 1500 })
      return false
    }
    if (change.password === "") {
      toast.error("Enter password", { autoClose: 1500 })
      return false
    }
    if (!password(change.password)) {
      toast.error("Invalid password", { autoClose: 1500 })
      return false
    }
    if (change.maritalStatus === "") {
      toast.error("Select marital status", { autoClose: 1500 })
      return false
    }
    else {
      let userdata = { ...change, id: userid }

      const response = await fetch(process.env.API_BASE_UPL + '/crude/adddata', {
        method: "POST",
        body: JSON.stringify(userdata)
      });
      let resp = await response.json();

      if (resp.status == true) {
        toast.success(resp.oth, { autoClose: 1500 })
        getdata()
        setchange(defaultobject)
        setuserid("")
      } else {
        toast.error(resp.oth, { autoClose: 1500 })
      }
    }

  }

  const getdata = async () => {
    const response = await fetch(process.env.API_BASE_UPL + '/crude/getdata', {
      method: "POST",
      body: JSON.stringify({ page: page })
    })
    let resp = await response.json();
    if (resp.status == true) {

      setuser(resp.data.data)
      setpageCount(resp.data.totalpage)
    }

  }
  const handlePageClick = (e) =>{
    setpage(e.selected + 1)
  }

  const geteditdata = async (id) =>{
    const response = await fetch(process.env.API_BASE_UPL + '/crude/geteditdata', {
      method: "POST",
      body: JSON.stringify({ id: id })
    })
    let resp = await response.json();
    if (resp.status == true) {
      setchange(resp.data)
      setuserid( resp.data._id)
    }
  }
  const deletedata = async (id) => {
    const response = await fetch(process.env.API_BASE_UPL + '/crude/deletedata', {
      method: "POST",
      body: JSON.stringify({ id: id })
    })
    let resp = await response.json();
    if (resp.status == true) {
      getdata()
    }
  }
  useEffect(() => {
    getdata()
  }, [page])

  return (
    <div className='row crude'>
      <div className='col-12'>
        <div className='container'>

          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className='text-center'>Sr no.</th>
                <th scope="col" className='text-center'>First Name</th>
                <th scope="col" className='text-center'>Last Name</th>
                <th scope="col" className='text-center'>email</th>
                <th scope="col" className='text-center'>Password</th>
                <th scope="col" className='text-center'>Marital Status</th>
                <th scope="col" className='text-center'>Hobby</th>
                <th scope="col" className='text-center'>Edit</th>
                <th scope="col" className='text-center'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 && user.map((x, y) => {
                return (
                  <tr key={y}>
                    <td className='text-center'>{((page - 1) * Number(process.env.PERPAGE_DATA)) + y + 1}</td>
                    <td className='text-center'>{x.firstName}</td>
                    <td className='text-center'>{x.lastName}</td>
                    <td className='text-center'>{x.email}</td>
                    <td className='text-center'>{x.password}</td>
                    <td className='text-center'>{x.maritalStatus}</td>
                    <td className='text-center'>{x.hobby.join()}</td>
                    <td className='text-center'><button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => geteditdata(x._id)}><i className='fa fa-pencil'></i></button></td>
                    <td className='text-center'><button type="button" className="btn btn-secondary" onClick={() => deletedata(x._id)}><i className='fa fa-trash'></i></button></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
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
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className='pb-4'>
                    <label className='mb-1'>First Name</label>
                    <input type='text' className='inputfield w-100 p-2 ' placeholder='First Name' name='firstName' onChange={(e) => changedata(e)} value={change.firstName} />
                  </div>
                  <div className='pb-4'>
                    <label className='mb-1'>Last Name</label>
                    <input type='text' className='inputfield w-100 p-2 ' placeholder='Last Name' name='lastName' onChange={(e) => changedata(e)} value={change.lastName} />
                  </div>
                  <div className='pb-4'>
                    <label className='mb-1'>Email</label>
                    <input type='email' className='inputfield w-100 p-2 ' placeholder='Email' name='email' onChange={(e) => changedata(e)} value={change.email} />
                  </div>
                  <div className='pb-4'>
                    <label className='mb-1'>Password</label>
                    <input type={!passeye ? 'password' : 'text'} className='inputfield w-100 p-2 password' placeholder='Password' name='password' onChange={(e) => changedata(e)} value={change.password} />
                    <i className={!passeye ? "fa fa-eye-slash globleicon" : "fa fa-eye globleicon"} onClick={() => setPassEye(!passeye)}></i>
                    <p className='mt-1'>1 Uppercase,1 Lowercase,1 Number,1 Special character,8-32 length</p>
                  </div>
                  <div className='pb-4'>
                    <label className='mb-1'>Merital Status</label>

                    <div className="form-check">
                      <label className="form-check-label" >
                        Married
                        <input type="radio" className="form-check-input" id="" name="maritalStatus" value='married' onChange={(e) => changedata(e)} checked={change.maritalStatus == "married"} />
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <label className="form-check-label" >
                        Unmarried
                        <input type="radio" className="form-check-input" id="" name="maritalStatus" value='unmarried' onChange={(e) => changedata(e)} checked={change.maritalStatus == "unmarried"} />
                      </label>
                    </div>
                  </div>
                  <div className='pb-4'>
                    <label className='mb-1'>Hobby</label>

                    <div className="form-check mb-3">
                      <label className="form-check-label" >
                        Play
                        <input type="checkbox" className="form-check-input" id="" name="hobby" value='play' onChange={(e) => changedata(e)} checked={change.hobby.includes('play')} />
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <label className="form-check-label" >
                        Read
                        <input type="checkbox" className="form-check-input" id="" name="hobby" value='read' onChange={(e) => changedata(e)} checked={change.hobby.includes('read')} />
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <label className="form-check-label" >
                        Travelling
                        <input type="checkbox" className="form-check-input" id="" name="hobby" value='travelling' onChange={(e) => changedata(e)} checked={change.hobby.includes('travelling')} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={() => submitdata()}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
