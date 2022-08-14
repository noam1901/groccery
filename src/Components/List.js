import React from 'react'
import Option from './Option'

const List = props => {
  return (
    <div className='groccery-list'>
        <h2>List</h2>
        <section className='list-title'><div>Choose:</div><div>name:</div> <div>price:</div> <div>quantity:</div></section>
        <section className='list-content'>
            {Object.keys(props.list).map((key)=>{return <Option icon={props.list[key].icon} name={key} key={key} price={props.list[key].price} quantity={props.list[key].quantity} onClick={props.onClick}></Option>})}
            {props.secondList? Object.keys(props.secondList).map((key)=>{return <Option icon={props.secondList[key].icon} name={key} key={key} price={props.secondList[key].price} quantity={props.secondList[key].quantity} outOfstock={true}></Option>}):""}
        </section>
        
        {props.summary && <section className='summary'>
          <h3>Summary</h3>
          total: {props.total.toFixed(2)}$<br></br>
          <button>Order Now</button>
        </section>}
      </div>
  )
}


export default List