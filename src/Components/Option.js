import React from 'react'

const Option = props => {
  return (
    <label>{props.name} {props.price} {props.quantity}</label>
  )
}

export default Option