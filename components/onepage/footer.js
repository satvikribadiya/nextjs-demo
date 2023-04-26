import React from 'react'

export default function footer() {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-12'>
          <div className='footerheader'>
            <img src='assets/img/burger/footerlogo.png'></img>
            <span>Burger House</span>
          </div>
        </div>
      </div>
      <div className='row footermiddle'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 footerdesc'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 footerrigntcenter  order-first order-sm-last'>
          <div className='fixright'>
            <div className='footerright mb-3'>
              <i className='fa fa-map-marker'></i>
              <span>
                Büyükdere Cad., 22A, Istanbul, Turkey
              </span>
            </div>
            <div className='footerright'>
              <i className='fa fa-envelope'></i>
              <span>
                info@companyname.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='row footerbottom'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 footerbottomleft'>
          <p>© Company Name 2021. All rights reserved.</p>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 footerbottomright order-first order-sm-last'>
          <span>
            <i className='fa fa-instagram'></i>
          </span>
          <span>
            <i className='fa fa-facebook'></i>
          </span>
          <span>
            <i className='fa fa-twitter'></i>
          </span>
          <span>
            <i className='fa fa-whatsapp'></i>
          </span>
        </div>
      </div>
    </footer>
  )
}
