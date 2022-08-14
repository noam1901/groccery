import React from 'react'

const Option = props => {
    if(props.outOfstock){
        return(
            <label className='disabled'><img className='icon' src={props.icon}></img><div>{props.name}</div> <div>{props.price}$</div> <div className='disabled'>{props.quantity}</div></label>
          )
    }
  return (
    <label onClick={()=>props.onClick(props.name)}><img className='icon' src={props.icon}></img><div>{props.name}</div> <div>{props.price}$</div> <div>{props.quantity}</div></label>
  )
}

export default Option