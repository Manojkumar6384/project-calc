import React from 'react'
import "./Card.css"

function Card(props) {
    let example="Manoj"
  return (
    <div className={example}>
        <h1 className='d1'>3 in 1 Calculator</h1>
    {props.children}
    </div>
  )
}

export default Card