import './App.css';
import Option from './Components/Option.js';

function App() {
  return (
    <div className="App">
      <div className='groccery-list'>
        <h2>List</h2>
        <section className='list-content'>
          <Option name='Tomato' price={19.90} quantity={5}></Option>
          <label>Tomato</label>
          <label>Tomato</label>
        </section>
      </div>
      <div className='groccery-list'>
        <h2>Cart</h2>
        <section className='list-content'>
          <label>Tomato</label>
          <label>Tomato</label>
        </section>
        <section className='summary'>
          <h3>Summary</h3>
          total: 20$<br></br>
          <button>Order Now</button>
        </section>
      </div>
    </div>
  );
}

export default App;
