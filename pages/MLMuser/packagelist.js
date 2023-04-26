import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { withSessionSsrMLMuser } from '@/helper/session'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import parse from 'html-react-parser'
import UAParser from "ua-parser-js";
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function packagelist(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    const [packagedata, setpackagedata] = useState([])
    const [coinData, setcoinData] = useState([])
    const [coinId, setcoinId] = useState("")
    const [packageId, setpackageId] = useState("")
    const [packageprice, setpackageprice] = useState(0)

    const [show, setShow] = useState(false);
    const handleShow = (x) => { setShow(true), getcoindata(), setpackageId(x._id), setpackageprice(x.price)};
    const handleClose = () => setShow(false);

    const getdata = async () => {

        const response = await fetch(process.env.MLM_USER_API_BASEURL + 'getpackage', {
            method: "POST",
            body: JSON.stringify({
                page: 1
            })
        })
        let resp = await response.json();
        if (resp.status == true) {
            setpackagedata(resp.data)
        }
    }
    const getcoindata = async () => {

        const response = await fetch(process.env.MLM_USER_API_BASEURL + 'getcoindata', {
            method: "POST",
            body: JSON.stringify({
                email: props.email
            })
        })
        let resp = await response.json();
        if (resp.status == true) {
            setcoinData(resp.data)
            console.log("resp.data", resp.data)
        }
    }
    const buypackage = async (x) => {

        const response = await fetch(process.env.MLM_USER_API_BASEURL + 'buypackage', {
            method: "POST",
            body: JSON.stringify({
                coinId: coinId,
                packageid: packageId,
                price: packageprice,
                email: props.email
            })
        })
        let resp = await response.json();
        if (resp.status == true) {
            setpackagedata(resp.data)
        }
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className=' p-4'>
            <div className='sec5main'>
                <div className='row'>
                    <div className='text-center pb-2 '>
                        <h3 className=''>Packages</h3>
                    </div>
                    <div className='col-12 sec5slidermain container'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={true}
                            transitionDuration={500}
                            swipeable={true}
                            autoPlay={false}
                            deviceType={props.deviceType}

                        >
                            {packagedata.length > 0 && packagedata.map((x, k) => {
                                return <div className="" key={k}>
                                    <div className='text-center p-4'>
                                        <Image src={"/assets/MLMadmin/allimage/" + `${x.image}`} height={200} width={200} onClick={() => change()} />
                                        <h4 className='pt-2'>{x.name}</h4>
                                        <p className='pb-3'>{x.description}</p>
                                        <h4 className='pt-2'>Price : {x.price}&nbsp;($)</h4>
                                        <button class="btn btn-success active" type="button" aria-pressed="true" onClick={(e) => handleShow(x)}>Buy now</button>
                                    </div>
                                </div>
                            })}
                        </Carousel>


                        <Modal show={show} onHide={handleClose}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Buy Package</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <Form.Select aria-label="Default select example " className='waves-effect waves-light sponser mr-4 form-control' onChange={(e) => setcoinId(e.target.value)}>
                                            <option value="">Select Coin</option>
                                            {coinData.length > 0 && coinData.map((x, y) => {
                                                return (<option value={x.coin.coinId} key={y}>{x.coin.coinname}</option>)
                                            })}
                                        </Form.Select>
                                    </div>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-secondary" type="button" onClick={handleClose}>
                                    Close
                                </button>
                                <button className="btn btn-success " type="button" onClick={() => { handleClose, buypackage() }}>
                                    Save Changes
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    )
}

export const getServerSideProps = withSessionSsrMLMuser(async function getServerSideProps(context) {

    if (context.req.session.usersession == '' || context.req.session.usersession == undefined || context.req.session.usersession == 'undefined') {
        return {
            props: { title: "Login" },
            redirect: {
                destination: '/MLMuser',
                permanent: false,
            },
        }
    } else {
        let userAgent;
        if (context.req) {
            userAgent = context.req.headers["user-agent"];
        } else {
            userAgent = navigator.userAgent;
        }

        const parser = new UAParser();
        parser.setUA(userAgent);
        const resulT = parser.getResult();
        const deviceType = (resulT.device && resulT.device.type) || "desktop";
        return {
            props: { title: "Login", deviceType: deviceType, email: context.req.session.usersession }
        }
    }
})