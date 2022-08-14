import './App.css';
import List from './Components/List.js';
import {useState } from 'react';

function App() {
  const [list, setList] = useState({'Milk':{ price: 19.90, quantity:12, icon: "https://cdn-icons-png.flaticon.com/512/3753/3753934.png"},
                                    'Coffee':{price:12.90, quantity: 2, icon:"https://cdn-icons-png.flaticon.com/512/4856/4856718.png" },
                                    'Bread':{ price:14.90, quantity: 4, icon: "https://cdn-icons-png.flaticon.com/512/4241/4241664.png"},
                                    'Tomatto':{ price:2.90, quantity: 7, icon: "https://cdn-icons-png.flaticon.com/512/2909/2909894.png"},
                                    'Butter':{price:10.00, quantity: 22, icon: "https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F9C8-butter-512.png"},
                                    'Meat':{price:16.90, quantity: 1, icon: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png"}})
  const [cart, setCart] = useState({})
  const [outOfStock, setOutOfStock] = useState({})
  const [total, setTotal] = useState(0)
  function updateFromList(name){
    console.log(name);
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
