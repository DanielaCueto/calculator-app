import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState('0')
  const [operation, setOperation] = useState ("")
  const [firstDigit, setFirstDigit] = useState(true)
  console.log(number, previousNumber, operation);
  
  
  const handleNumber = (ev) => {
    const newDigit = ev.target.innerHTML;
    if(firstDigit){
      setNumber(newDigit);
    }else{
      setNumber(number + newDigit);
    }
    setFirstDigit(false)
    
  };

  const handleDelete = () => {
    const newStatus = number.slice(0, number.length - 1);
    if(newStatus === ""){
      setNumber("0");
      setFirstDigit(true)
    }else{
    setNumber(newStatus);
    }
  };

  const handleReset = () => {
    setFirstDigit(true)
    setNumber("0");
    setPreviousNumber('0');
    setOperation("");
  };

  const handleOperation = (ev) => {
    
    setPreviousNumber(number); 
    setOperation(ev.target.innerHTML);
    setFirstDigit(true)
    
  }

  const handleResult = () => {
    const num1 = parseFloat(previousNumber);
    const num2 =  parseFloat(number)
    let lastResult;
    if(operation === '+'){
      lastResult = num1+num2 ;
    }else if (operation === '-'){
      lastResult = num1 - num2;
      
    } else if(operation === '/'){
      lastResult = num1 / num2;
    }
  else if(operation === 'x'){
    lastResult = num1 * num2;
  }else{
    return 
  }
    setNumber(`${lastResult}`)
    setPreviousNumber('0')
    setOperation("")
    setFirstDigit(true)
    
  }

  

  return (
    <div className="App">
      <header className="header">
        <h1>Calc</h1>
        <h2>THEME</h2>

        <span>1</span>
        <span>2</span>
        <span>3</span>
        <input type="checkbox" />
      </header>
      <section>
        <input type="text" name="name" value={number} readOnly />
      </section>
      <section>
        <button onClick={handleNumber}>7</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleDelete}>DEL</button>
      </section>
      <section>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={handleOperation}>+</button>
      </section>
      <section>
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={handleOperation}>-</button>
        
      </section>
      <section>
        <button onClick={handleNumber} >.</button>
        <button onClick={handleNumber}>0</button>
        <button onClick={handleOperation} >/</button>
        <button onClick={handleOperation}>x</button>
      </section>
      <section>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleResult}>=</button>
      </section>
    </div>
  );
}

export default App;
