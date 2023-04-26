import React from 'react'

export default function faqcard(props) {
    // faqheading, faqcontent , faqnumber
    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span className="num">{props.faqnumber}.</span>
                    {props.faqheading}
                </button>
            </h3>
            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                    {props.faqcontent}
                </div>
            </div>
        </div>
    )
}
