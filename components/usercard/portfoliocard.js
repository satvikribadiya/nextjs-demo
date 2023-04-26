import React from 'react'

export default function portfoliocard(props) {
    // imagename , heading , content , portfoliolink
  return (

          <div className="portfolio-wrap">
              <a href={`assets/img/portfolio/ ${props.imagename}`} data-gallery="portfolio-gallery-app" className="glightbox"><img src={`assets/img/portfolio/${props.imagename}`} className="img-fluid" alt=""/></a>
              <div className="portfolio-info">
                  <h4><a href={props.portfoliolink} title="More Details">{props.heading}</a></h4>
                  <p>{props.content}</p>
              </div>
          </div>
  )
}
