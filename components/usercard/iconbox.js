import React from 'react'

export default function iconbox(props) {
    // iconclass , boxlink , boxname

  return (
      <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="icon-box">
              <div className="icon"><i className={props.iconclass}></i></div>
              <h4 className="title"><a href={props.boxlink} className="stretched-link">{props.boxname}</a></h4>
          </div>
      </div>
  )
}
