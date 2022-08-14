import React, { useState }from 'react'
import Option from './Option'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const List = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const orderButton = ()=>{
        props.order()
        handleClose()
    }
  return (
    <div className='groccery-list'>
        <h2>{props.name}</h2>
        <section className='list-title'><div>Choose:</div><div>name:</div> <div>price:</div> <div>quantity:</div></section>
        <section className='list-content'>
            {Object.keys(props.list).map((key)=>{return <Option icon={props.list[key].icon} name={key} key={key} price={props.list[key].price} quantity={props.list[key].quantity} onClick={props.onClick}></Option>})}
            {props.secondList? Object.keys(props.secondList).map((key)=>{return <Option icon={props.secondList[key].icon} name={key} key={key} price={props.secondList[key].price} quantity={props.secondList[key].quantity} outOfstock={true}></Option>}):""}
        </section>
        
        {props.summary && <section className='summary'>
          <h3>Summary</h3>
          total: {props.total.toFixed(2)}$<br></br>
          <Button variant="primary" onClick={handleShow}>
        Order Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Object.keys(props.list).map((key)=>{return <Option icon={props.list[key].icon} name={key} key={key} price={props.list[key].price} quantity={props.list[key].quantity} outOfstock={true}></Option>})}<br></br>total: {props.total.toFixed(2)}$</Modal.Body>
        <Modal.Footer>
            Are You Sure?
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={orderButton}>
            Yes! Order Now
          </Button>
        </Modal.Footer>
      </Modal>
        </section>}
      </div>
  )
}


export default List