import Image from 'next/image'
import React from 'react'

export default function section2() {
    return (
        <div className='row sec2main'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 sec2inmain'>
                <div className='w-100 sec2card1 ps-sm-4 pe-sm-4'>
                    <div className='sec2card1txt'>
                        <h4>try it today</h4>
                        <h3>most popular banner</h3>
                    </div>
                    <div className='sec2card1img'>
                        <img src='/assets/img/burger/sec2.png' className='w-100 sec2image' />
                    </div>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 sec2inmain '>
                <div className='w-100 sec2card2  ps-sm-4 pe-sm-4'>
                    <div className='sec2card2txt'>
                        <h4>try it today</h4>
                        <h3>more fun more taste</h3>
                    </div>
                    <div className='sec2card2img'>
                        <img src='/assets/img/burger/sec2-1.png' className='w-100 sec2image' />
                    </div>

                </div>
                <div className='w-100 sec2card3  ps-sm-4 pe-sm-4'>
                    <div className='sec2card2txt'>
                        <h4>try it today</h4>
                        <h3>fresh & chili</h3>
                    </div>
                    <div className='sec2card2img'>
                        <img src='/assets/img/burger/sec2-2.png' className='w-100 sec2image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
