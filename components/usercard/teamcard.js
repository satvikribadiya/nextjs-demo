import React from 'react'

export default function teamcard(props) {
    // memberimg, membername, memberpost, fblink, twitterlink, instagramlink , linkedinlink
    return (
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
                <img src={`assets/img/team/${props.memberimg}`} className="img-fluid" alt="" />
                <h4>{props.membername}</h4>
                <span>{props.memberpost}</span>
                <div className="social">
                    <a href={props.fblink}><i className="bi bi-twitter"></i></a>
                    <a href={props.twitterlink}><i className="bi bi-facebook"></i></a>
                    <a href={props.instagramlink}><i className="bi bi-instagram"></i></a>
                    <a href={props.linkedinlink}><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
