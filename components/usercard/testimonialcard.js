import React from 'react'

export default function testimonialcard(props) {
    // personimg ,personname, post, ratingstars == number 1 to 5, content

    let starrate = props.ratingstars ? props.ratingstars : 0
    let element = []
    if (starrate >= 1) {
        for (let i = 1; i <= starrate; i++) {
            element.push(i);
        }
    }

  return (
      <div className="swiper-slide">
          <div className="testimonial-wrap">
              <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                      <img src={`assets/img/testimonials/${props.personimg }`} className="testimonial-img flex-shrink-0" alt=""/>
                          <div>
                          <h3>{props.personname}</h3>
                          <h4>{props.post}</h4>
                              <div className="stars">
                              {element.map ((x,y) =>{
                                  return <i className="bi bi-star-fill" key={y}></i>
                              })}
                                </div>
                          </div>
                  </div>
                  <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {props.content}
                      <i className="bi bi-quote quote-icon-right"></i>
                  </p>
              </div>
          </div>
      </div>
  )
}
