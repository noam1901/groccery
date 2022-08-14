import './App.css';
import List from './Components/List.js';
import {useState } from 'react';

function App() {
  const [list, setList] = useState({'Milk':{ price: 19.90, quantity:12, icon: "milk.png"},
                                    'Coffee':{price:12.90, quantity: 2, icon:"coffee.png" },
                                    'Bread':{ price:14.90, quantity: 4, icon: "bread.png"},
                                    'Tomatto':{ price:2.90, quantity: 7, icon: "tomato.png"},
                                    'Butter':{price:10.00, quantity: 22, icon: "butter.webp"},
                                    'Meat':{price:16.90, quantity: 1, icon: "meat.png"}})
  const [cart, setCart] = useState({})
  const [outOfStock, setOutOfStock] = useState({})
  const [total, setTotal] = useState(0)
  function updateFromList(name){
    cart[name]? cart[name].quantity += 1: cart[name] = {price: list[name].price, quantity: 1, icon: list[name].icon}
    if (list[name].quantity-1 === 0){
      outOfStock[name] = {price: list[name].price, quantity: 0, icon: list[name].icon}; 
      delete list[name]
    }else{
      list[name].quantity -= 1
    }
    setList({...list})
    setCart({...cart})
    setTotal(total+cart[name].price)
}
  function updateFromCart(name){
    list[name]? list[name].quantity += 1: list[name] = {price: cart[name].price, quantity: 1, icon: cart[name].icon}
    cart[name].quantity-1 === 0? delete cart[name]: cart[name].quantity -= 1
    if(outOfStock[name]){
      delete outOfStock[name]
    }
    setCart({...cart})
    setList({...list})
    setOutOfStock({...outOfStock})
    setTotal(total-list[name].price)
}
  function resetAll(){
    for(let item of Object.keys(cart)){
      if(outOfStock[item]){
        list[item] = outOfStock[item]
        delete outOfStock[item]
      }
      list[item].quantity += cart[item].quantity
      delete cart[item]
    }
    setCart({})
    setOutOfStock({})
    setTotal(0)
    setList({...list})
  }
  return (
    <div className="App">
      <List name="List" list={list} secondList={outOfStock} onClick={(name)=>updateFromList(name)}></List>
      <List name="Cart" summary={true} total={total} list={cart} order={()=>resetAll()} onClick={(name)=>updateFromCart(name)}></List>
    </div>
  );
}

export default App;
