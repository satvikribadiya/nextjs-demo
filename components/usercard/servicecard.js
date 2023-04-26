import React from 'react'

export default function servicecard(props) {
    // heading, content, linkname , icon , buttonname

  return (
      <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
              <div className="icon">
                  <i className={props.icon}></i>
              </div>
              <h3>{props.heading}</h3>
              <p>{props.content}</p>
              <a href={props.linkname} className="readmore stretched-link">{props.buttonname}<i className="bi bi-arrow-right"></i></a>
          </div>
      </div>
  )
}
