import React from 'react'

export default function button(props) {
    // buttonname , link

  return (
      <a href={props.link} className="btn-get-started">{props.buttonname}</a>
  )
}
