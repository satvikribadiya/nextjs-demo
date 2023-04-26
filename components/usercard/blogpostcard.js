import React from 'react'

export default function blogpostcard(props) {
    // memberimg, heading, subheading, authername, date = Jan 1, 2022
    return (
        <div className="col-xl-4 col-md-6">
            <article>

                <div className="post-img">
                    <img src={`assets/img/blog/${props.memberimg}`} alt="" className="img-fluid" />
                </div>

                <p className="post-category">{props.heading}</p>

                <h2 className="title">
                    <a href="blog-details.html">{props.subheading}</a>
                </h2>

                <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                        <p className="post-author">{props.authername}</p>
                        <p className="post-date">
                            <time datetime="2022-01-01">{props.date}</time>
                        </p>
                    </div>
                </div>

            </article>
        </div>
    )
}
