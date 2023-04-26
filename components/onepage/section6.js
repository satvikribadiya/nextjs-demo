import React from 'react'

export default function () {
    return (
        <div className='sec6main pt-5 pb-5'>
            <div className='row'>
                <div className='col-2'>
                    <div className='text-left'>
                        <img src='assets/img/burger/sec5-1.png' className='sec6imagewidth img-fluid' />
                    </div>
                    <div className='text-center pt-4'>
                        <img src='assets/img/burger/sec5-2.png' className='sec6imagewidth img-fluid' />
                    </div>
                </div>
                <div className='col-8'>
                    <div className='container'>
                        <div className='row text-center centerform'>
                            <div className='col-12'>
                                <p className='sec6head'>Reservation</p>
                                <h3 className='sec3heading'>BOOK YOUR TABLE</h3>
                            </div>
                            <div className='col-12 pt-5'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <input type='text' className='inputfield w-100 sec6input' placeholder='name' />
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <input type='email' className='inputfield w-100 sec6input' placeholder='email' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <input type='date' className='inputfield w-100 sec6input' placeholder='Date' />
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <input type='time' className='inputfield w-100 sec6input' placeholder='4:47 PM' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <input type='number' className='inputfield w-100 sec6input' placeholder='people' />
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <div className='pb-4'>
                                            <button className='w-100 sec6button'>find a table</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 text-end sec6rightimg'>
                    <img src='assets/img/burger/sec5-3.png' className='sec6imagewidth img-fluid' />
                </div>
            </div>
        </div>
    )
}
