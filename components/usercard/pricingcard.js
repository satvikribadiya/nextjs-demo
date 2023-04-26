import dynamic from 'next/dynamic';
import React from 'react'
import parse from 'html-react-parser'

const Buynowbutton = dynamic(() => import('./buynowbutton'))

export default function pricingcard(props) {
    // planname , icon, rupees, fistservice, secondservice, thirdservice, forthservice, fiveservice
    let stringToHTML = function (str) {
        // let dom = document.createElement('div');
        // dom.innerHTML = str;
        // return dom;
    };
    return (
        <div>
            <h3>{props.planname}</h3>
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <h4><sup>$</sup>{props.rupees}<span> / month</span></h4>
            <ul>
                {parse(props.fistservice)}
                {parse(props.secondservice)}
                {parse(props.thirdservice)}
                {parse(props.forthservice)}
                {parse(props.fiveservice)}
            </ul>
            <Buynowbutton />
        </div>
    )
}
