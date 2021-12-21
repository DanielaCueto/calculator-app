import { useState } from "react";
import "../styles/App.scss";


function App() {


  const [number, setNumber] = useState('')

  const clickNumber = (ev) =>{
  const newNumber = number + ev.target.innerHTML;  
  setNumber(newNumber); 
  }

  const handleDelete = () =>{
    const newStatus = number.slice(0, number.length -1); 
    setNumber(newStatus);
  }

  const handleReset = () =>{
    setNumber(''); 
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Calc</h1>
        <h2>THEME</h2>  
                    
        <span>1</span>
        <span>2</span>
        <span>3</span>
          <input type="checkbox" checked/>
      </header>
      <section>
        <input type="number" name="name" value={number}/> 
      </section>
      <section>
        <button onClick={clickNumber}>7</button>
        <button onClick={clickNumber}>8</button>
        <button onClick={clickNumber}>9</button>
        <button onClick={handleDelete} >DEL</button>
      </section>
      <section>
        <button onClick={clickNumber}>4</button>
        <button onClick={clickNumber}>5</button>
        <button onClick={clickNumber}>6</button>
        <button>+</button>
      </section>
      <section>
        <button onClick={clickNumber}>1</button>
        <button onClick={clickNumber}>2</button>
        <button onClick={clickNumber}>3</button>
        <button >-</button>
        <label>
          
        </label>
      </section>
      <section>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </section>
      <section>
        <button onClick={handleReset}>RESET</button>
        <button>=</button>
      </section>
    </div>
  );
}

export default App;
